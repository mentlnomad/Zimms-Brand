/**
 * Password gate for the brand guidelines.
 *
 * Runs as Vercel Edge Middleware, so an unauthenticated request never receives
 * the page HTML at all -- the gate is server-side, not a hidden div.
 *
 * On the secret: this repo is public, so the fallback hash below is readable by
 * anyone, and a determined reader could derive the cookie and skip the form.
 * That is fine for keeping the link from being idly shared, which is what this
 * is for. To make it a real secret, set a SITE_PASSWORD environment variable in
 * Vercel (Settings -> Environment Variables, free on every plan). When it is
 * set it takes precedence and nothing sensitive lives in git.
 *
 * Deliberately dependency-free: `pass()` hand-rolls the `x-middleware-next`
 * response that @vercel/edge's next() returns, which keeps this project
 * zero-config static with no package.json and no install step.
 */

export const config = { matcher: '/:path*' };

const FALLBACK_PW_SHA256 =
  '641bc6fce09863075685c7a9d58c02a6f00c68a5638504b4473223641278116e';

const COOKIE = 'zo_gate';
const TOKEN_SALT = '|zo-gate-v1';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

async function sha256(input) {
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(input)
  );
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/** Constant-time compare, so a wrong guess leaks nothing via timing. */
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function expectedPwHash() {
  const env = globalThis.process?.env?.SITE_PASSWORD;
  return env ? await sha256(env) : FALLBACK_PW_SHA256;
}

/** Cookie value the browser must present. Derived from the password. */
async function expectedToken() {
  const env = globalThis.process?.env?.SITE_PASSWORD;
  return await sha256((env ?? 'zimmy333') + TOKEN_SALT);
}

function readCookie(header, name) {
  for (const part of (header || '').split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return v.join('=');
  }
  return null;
}

/** Continue to the static asset. Mirrors @vercel/edge's next(). */
function pass() {
  return new Response(null, { headers: { 'x-middleware-next': '1' } });
}

function loginPage(status, showError) {
  const body = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Zimms Organics Brand Guidelines</title>
<style>
  :root{color-scheme:dark}
  *{box-sizing:border-box}
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
       padding:24px;background:#00334A;color:#F5F0E8;
       font-family:'Raleway',-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif}
  .card{width:100%;max-width:380px;text-align:center}
  h1{margin:0 0 8px;font-size:15px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}
  p{margin:0 0 28px;font-size:13px;line-height:1.6;color:rgba(245,240,232,.68)}
  form{display:flex;flex-direction:column;gap:12px}
  input{width:100%;height:48px;padding:0 16px;border-radius:4px;
        border:1px solid rgba(245,240,232,.28);background:rgba(255,255,255,.06);
        color:#F5F0E8;font-size:16px;font-family:inherit}
  input:focus{outline:2px solid #E8C454;outline-offset:2px;border-color:transparent}
  button{height:48px;border:0;border-radius:4px;background:#F5F0E8;color:#00334A;
         font-family:inherit;font-weight:800;font-size:12px;letter-spacing:.1em;
         text-transform:uppercase;cursor:pointer}
  button:hover{background:#fff}
  .err{margin:0 0 16px;font-size:12px;font-weight:700;letter-spacing:.06em;
       text-transform:uppercase;color:#E8C454}
</style>
</head>
<body>
  <main class="card">
    <h1>Zimms Organics</h1>
    <p>Brand guidelines and assets.<br>Enter the password to continue.</p>
    ${showError ? '<p class="err">Incorrect password</p>' : ''}
    <form method="POST">
      <input type="password" name="password" placeholder="Password"
             aria-label="Password" autofocus autocomplete="current-password" required>
      <button type="submit">Enter</button>
    </form>
  </main>
</body>
</html>`;
  return new Response(body, {
    status,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
}

export default async function middleware(request) {
  const token = await expectedToken();

  const presented = readCookie(request.headers.get('cookie'), COOKIE);
  if (presented && safeEqual(presented, token)) return pass();

  if (request.method === 'POST') {
    let submitted = '';
    try {
      submitted = String((await request.formData()).get('password') ?? '');
    } catch {
      submitted = '';
    }
    if (safeEqual(await sha256(submitted), await expectedPwHash())) {
      const url = new URL(request.url);
      return new Response(null, {
        status: 303,
        headers: {
          location: url.pathname + url.search,
          'set-cookie': `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${MAX_AGE}`,
          'cache-control': 'no-store',
        },
      });
    }
    return loginPage(401, true);
  }

  return loginPage(401, false);
}
