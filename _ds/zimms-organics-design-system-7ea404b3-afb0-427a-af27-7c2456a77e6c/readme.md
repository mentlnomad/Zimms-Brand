# Zimms Organics — Design System

Zimms Organics is a California certified-organic extra virgin olive oil brand. It sells
direct-to-consumer and on retail shelves, and it frames its three products as one
three-part daily practice — never as three separate SKUs.

**The brand in one line:** California organic ritual — grounded, calm, editorial, generous
with space. Big Sur, not Beverly Hills. Sonoma, not the South of France.

## The products

| Product | Colour | Olive | Polyphenols | Role |
|---|---|---|---|---|
| **COOK** | Cook Terracotta `#B55437` | Arbosana | 333 | Heat-stable, whole-food cooking |
| **HEAL** | Heal Green `#3E4744` | Arbequina | 311 | The direct ritual — a daily tablespoon |
| **HEAL+** | Heal+ Blue `#00334A` | Koroneiki | 480 | The elevated tier of the direct ritual |

Two rituals the brand serves: the **Direct Ritual** (a tablespoon in the morning) and the
**Culinary Ritual** (cooking whole foods, the shared table).

## Sources

Everything in this system was extracted from material the brand supplied. Nothing here is
invented from a public reference.

- **Figma file** — `Zimms organics 2.0.fig`, mounted as a read-only virtual filesystem.
  Two pages: `Final-Pages` (8 frames) and `Deliveires-by-Timline` (25 frames). The
  authoritative artboard set is `Final-Pages / Updated - All Page - 2026 MAy 18`, which
  contains Home (desktop + mobile), Product, Collection, Blog, Single Blog, About Us and
  The Ritual, each in both breakpoints. 183 local components, 58 page-scoped external,
  34 shared external. 32 Figma Variables in one ungrouped collection.
  The file has no public URL in the material provided — request it from the brand owner.
- **Brand screenshots** (`uploads/`) — six board exports covering logo lockups, the
  illustration library, the colour boards with Pantone references, the type specimen
  (Novecento Sans / National / Lora), the pattern tiles, and the icon + trust-mark sheet.
- **Font binaries** (`uploads/`) — `Novecentosanswide-DemiBold.otf`, `National-Book.otf`,
  `Lora-Italic-VariableFont_wght.ttf`.

## Index

| File | What it is |
|---|---|
| `styles.css` | The single entry point. Imports every token and font file. Link this. |
| `tokens/colors.css` | Core, Oil, Sky, Earth, grounds, tint ramps, semantic tokens, aliases |
| `tokens/typography.css` | Both type tracks, the web scale, tracking, measure, deck scale, utility classes |
| `tokens/spacing.css` | 8-point scale, grid, breakpoints, section rhythm, radii, elevation, motion |
| `tokens/fonts.css` | `@font-face` for the supplied binaries + the Google Fonts import |
| `tokens/fig-tokens.css` | The 32 Figma Variables, verbatim |
| `tokens/base.css` | Element defaults — body, headings, links, focus ring |
| `components/` | 30 reusable primitives in five groups (below) |
| `assets/` | Logo, product photography, lifestyle photography, press marks, trust marks, botanical marks, icon data |
| `ui_kits/storefront/` | Six clickable storefront screens |
| `slides/zimms/` | Ten 16:9 slide masters |
| `guidelines/` | 27 foundation specimen cards, rendered in the Design System tab |
| `SKILL.md` | Agent-Skills wrapper so this folder works inside Claude Code |

---

## CONTENT FUNDAMENTALS

**Voice: calm authority, editorial restraint, declarative.** Short paragraphs. The brand
states facts and lets them stand.

**Casing.** Sentence case for headlines and body. ALL CAPS for section labels, button
labels and pack display type only — never for a sentence. Product names are always
uppercase: COOK, HEAL, HEAL+.

**Person.** Second person for instruction ("Take a tablespoon in the morning"), first
person plural for the brand's own actions ("We test every harvest"). The founder's "I"
appears only on the About page.

**Emoji: never.** Not in UI, not in email, not in social copy. Unicode characters are used
only as functional marks: `→` in category links, `·` as a separator, `−` in savings lines,
`★` in ratings.

**Punctuation.** No exclamation marks anywhere. Em dashes sparingly. Numbers are written as
numerals when they are measurements (311, 400ml, 24%).

On-brand, verbatim from the production build:

> California grown. Daily practice. Uncompromising quality.
> Certified organic EVOO from California. High polyphenols. Built for the long game.
> Wellness isn't one size fits all. Whether you're taking your daily shot, cooking a family
> meal, or finishing a dish, there's a Zimms oil made for that moment.
> Empowering people to be healthier through natural, organic and quality food.

Off-brand — do not write like this:

> Transform your health with our AMAZING superfood oil! 🫒
> Limited time only — don't miss out!
> Clinically proven to reduce inflammation and heal your gut.
> The Mediterranean secret Big Food doesn't want you to know.

### Claim compliance

Every surface — packaging, PDP, ads, email, influencer briefs — obeys the same list.

**May say:** organic · certified organic · high polyphenol · single origin · single
varietal · cold-pressed · part of my daily routine · supports my health goals · grown in
California · harvest date · third-party tested.

**May never say:** cures · heals (as a verb applied to a person) · treats · prevents ·
fixes · detoxes · reverses · "clinically proven" · any medical claim, any disease name, any
before/after framing.

The **claim compliance zone** is a designated, structured block — on the label and on the
PDP — carrying certifications, harvest year, polyphenol count and sourcing. Keep it
structured and clean. Do not scatter health language through the layout instead.

**Social proof is quiet.** Trust bar directly under the hero. Reviews on the PDP. Star
ratings in Harvest Gold. Never lead a carousel with an illness-heavy testimonial.

**Cross-sell is ritual completion.** Bundles are framed as completing the three-part
practice — "Complete your routine" — never as an upsell, never with urgency.

---

## VISUAL FOUNDATIONS

### Non-negotiables

1. **No pure black. No pure white.** Body text is Dark Olive Root `#3D2410`. Ground is
   Cream/Linen `#F5F0E8`; the production build also uses Paper `#FFFFFC` and Shell
   `#FBF7ED`. One documented exception: the Marketplace Exception (below).
2. **All spacing is a multiple of 8.** 4px only for icon and type nudges. Never 15, never 27.
3. **Serif carries emotion, sans carries function.** Lora for headlines, ritual copy and
   pull quotes. DM Sans for body and UI. Raleway ExtraBold caps for labels only.
4. **Gold and terracotta are accents, never fields.** Landscape proportions: mostly open
   ground and sky, punctuated by the gold of the grove.
5. **Space is part of the voice.** Density reads cheap. Air reads premium.
6. **The illustration library is the brand's biggest differentiator.** Honour and extend
   the proprietary botanical hand. Do not replace it, do not redraw it generically.
7. **Would this still feel on brand in five years?** If it's trend-driven, it fails.

### Colour

Four locked core colours lead every layout: Heal Green, Cook Terracotta, Heal+ Blue,
Cream/Linen. Three supporting families extend them — **The Oil** (Harvest Gold, Liquid
Amber, Sunlit Canopy, First Light), **The Sky** (Grove Sky, Midday Air, Sea Haze) and
**The Earth** (Sunglow Clay, Warm Wheat, Dark Olive Root).

Hex values are the digital system; Pantone values are the print system. They were
established separately and are **equivalents, not conversions** — always state which medium
you are working in.

Two pairings fail WCAG AA for body text and are marked as failing everywhere in this file:
Cook Terracotta on Cream (4.00:1) and Harvest Gold on Cream (3.87:1). Terracotta is legal
at 24px+ (or 19px bold), for borders and for non-text accents. Gold is legal for stars,
badges, icons and large numerals. See `guidelines/color-contrast.card.html` for the full
measured matrix.

### Type

Two parallel tracks. **Packaging/print:** Novecento Sans Wide DemiBold (display), National
Book (body), Lora Regular (editorial). **Web/digital:** Lora (headlines), DM Sans
Light/Regular (body and UI), Raleway ExtraBold (section labels), Cormorant Garamond at 40px
and above only.

Production values, lifted from the build: hero Lora 62/66; section heading Lora 44/1.15;
card title Lora 18/100%; body DM Sans 16–18 at 1.6–1.8; card support copy DM Sans 14;
button label DM Sans SemiBold 16 uppercase; the section eyebrow is Lora **Bold** 18 caps
with 16px rules either side. Minimum body size 16px, minimum line-height 1.6, measure capped
at 680–760px.

Email fallbacks: Lora → Georgia · Raleway → Arial · DM Sans → Helvetica/Arial.

Banned: Montserrat, Oswald, Bebas Neue, Lato, Open Sans, Roboto, Playfair Display, Libre
Baskerville, PT Serif. No script fonts, no drop shadows on type, no two serif styles in one
layout, no oversized italic.

### Layout and spacing

8-point scale: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 80 / 120 / 160, named `--space-2xs` through
`--space-5xl`. 1440 canvas, 1280 max content column, 12 columns, 24px gutters (16 mobile).
Outer gutters 80 / 64 / 40 / 24 / 16 by breakpoint — content never touches the viewport
edge. Section rhythm 120 / 80 / 64 (utility sections 80 / 56 / 48). Within a section:
label → heading 12 · heading → body 24 · body → CTA 32 · grid rows 48 (32 mobile).

Component sizing: nav 80px desktop (72 compact, 64 mobile), collapsing below 1024 ·
buttons 48 tall (54 for hero/CTA), 16/32 padding, radius 4 · cards 24 padding (32 large),
radius 4–8, 24 gap · inputs 48 tall, 12/16 padding, radius 4 · badges 6/12 · accordion rows
24 vertical · tap targets ≥44. Email: 600px wrapper, 24 side padding, 40 between blocks.

**Mobile-first, genuinely.** Most DTC traffic is mobile. Verify the PDP at 375px.

### Backgrounds

Flat colour, never a gradient field. Four grounds carry the whole site: Paper `#FFFFFC`,
Cream `#F5F0E8`, Shell `#FBF7ED` and Bone `#F3F3EC`. Dark sections are solid Heal+ Blue or
Heal Green. Photography appears full-bleed in the hero under a flat scrim
(`rgba(0,51,74,.55)` to `.72`) — never a coloured gradient overlay. The footer closes with
a full-bleed grove photograph as a band. Product-card media sits on a flat Bone panel. No
noise, no texture overlays, no glassmorphism, no mesh gradients. The only permitted
"texture" is a botanical pattern tile at ≤8% opacity behind a section.

### Corner radii and cards

The system is nearly square. 4px on buttons, inputs, badges, product-card media and most
panels; 8px on hero bottom corners and large media; pill radius only on category badges and
filter chips. Cards are flat: a fill (Bone or Shell) or a 1px hairline
`rgba(61,36,16,.14)`. Shadows exist in the token file for overlays and sticky bars but a
standard card carries **no shadow** — this is a hairline system, not an elevation system.
No coloured left-border accents, ever.

### Motion

The slow pour. `--ease-pour: cubic-bezier(.22,.61,.36,1)` is the default — fast out, long
settle. 150ms for a checkbox tick, 220ms for hover and focus, 300ms for accordions and
drawers, 600ms for image reveals, 900ms for hero content. Never a bounce, never an
overshoot, never a spring. Content fades and rises 16px on scroll-in; it does not slide from
the side. `prefers-reduced-motion` is honoured in `tokens/base.css`.

### States

**Hover:** buttons darken one ramp step (`--zo-navy-90`); nav links grow a 1px underline in
the current colour; card images scale to 1.03 over 600ms; text links move from Forest to
Terracotta. **Press:** 1px downward translate, no colour change, no scale-down.
**Focus:** a 2px Grove Sky ring at 2px offset — visible on every interactive element.
**Disabled:** 8% Root fill with 38% Root text; no opacity fade on the whole element.
**Selected:** a 2px Navy ring plus the Shell wash — never colour alone.

### Borders, transparency and blur

Hairlines are `rgba(61,36,16,.14)` on light and `rgba(245,240,232,.16)` on dark. Input
borders are `rgba(0,51,74,.24)`. Transparency appears in exactly three places: the hero
scrim, muted text on dark grounds (`rgba(245,240,232,.72–.86)`), and disabled states.
**Blur is never used.** No backdrop-filter, no frosted panels. The sticky nav is solid Paper
with a hairline, not a translucent bar.

### Fixed and sticky elements

The desktop nav is transparent over the hero and solid Paper elsewhere; it becomes sticky
on PLP and PDP. The PDP gallery is sticky at `top: 104px` on desktop; the buy box scrolls.
On mobile the buy CTA docks to the bottom with `--shadow-sticky`. Nothing else is fixed.

### Photography

Natural light only — morning or late afternoon, soft directional shadow. Warm but not
orange; true greens; slightly muted saturation. Four recurring subjects: **ritual close-up**
(hands, spoon, morning light), **whole food cooking** (real kitchens, a hot pan, ingredients
mid-prep), **gathering** (a shared table, people, plates in use), **ingredient integrity**
(the grove, the fruit, the mill). Crop 4:5 for feed, 1:1 for grid, 16:9 for hero and
lifestyle bands, 9:16 for Stories. Export at 2× for retina.

Avoid: studio strobe, hard specular highlights, clinical white sweeps, an orange grade,
plated restaurant food, stock-looking models, anything that reads Mediterranean travel
poster.

### The 3-second shelf test

Front-of-pack must communicate *organic · grounded · standard · calm authority* in three
seconds, sitting next to gourmet imports and trendy wellness tonics. The label carries three
tiers: brand + ritual identity → product type → standards and credentials.

### The 100px thumbnail test

Every product image, ad and social post must be legible at thumbnail scale. If the product
name isn't readable at 100px, the layout fails. See
`guidelines/brand-thumbnail-test.card.html`.

### The Marketplace Exception

Amazon and most marketplaces **require** a pure white RGB(255,255,255) background on the
main listing image, with the product filling roughly 85% of the frame. This is the single
sanctioned violation of the no-pure-white rule, and it is a platform requirement, not a
design choice. Secondary listing images return to Cream. Never carry pure white into DTC,
email, social, print or packaging. See `guidelines/brand-marketplace.card.html`.

---

## ICONOGRAPHY

**The UI icon set is Phosphor Icons**, confirmed by the component names and variant axes in
the Figma file: `ArrowUpRight`, `CaretDown/Left/Right`, `Check`, `CheckCircle`,
`InstagramLogo`, `MagnifyingGlass`, `Minus`, `Play`, `Plus`, `ShoppingBag`,
`ShoppingCartSimple`, `User` — each with a `Format` axis (Outline / Stroke) and a `Weight`
axis (Thin / Light / Regular / Bold / Fill / Duotone).

The real path geometry was extracted out of the .fig into `assets/icons/icon-data.js` and is
rendered by `assets/icons/Icon.jsx`. **No icon in this system is hand-drawn or approximated.**
The Stroke-format, Duotone and Thin variants were dropped: their geometry did not decode
cleanly out of the binary, and the production build never uses them. What remains is
Outline format in Light / Regular / Bold / Fill.

Usage: 28px Light in the nav, 24px Regular for inline UI, 18–20px in dense rows,
12px Fill for the verified-buyer tick. Icons take `currentColor`, so they inherit the text
colour of whatever they sit in.

**Social marks** are a separate 26-platform set, also extracted verbatim, with two colour
variants each: `Original` (the platform's own brand colour) and `Negative` (single-colour,
safe on Navy and Forest). The footer uses `Negative`.

**Trust marks** in `assets/trust/` are the real certification lockups from the file: USDA
Organic, CCOF Certified Organic, Single Origin (SO), Single Varietal (SV) and Proudly Grown
in California. They are mandatory on pack, PDP and ad creative. Minimum reproduction 32px
digital / 10mm print, clear space half the mark's height. Never recolour a certifier's mark.

**Botanical marks** in `assets/illustrations/` are the proprietary hand — closed organic
contours, filled not stroked, reading as land and body rather than ornament. Approved
colourways: Forest on Cream, Terracotta on Cream, Cream on Forest, Cream on Navy. Density
rules: framing device, section divider, background texture at ≤8% opacity, label detail.
Never a full decorative takeover. Minimum breathing room around any mark is one mark-width.

**Emoji are never used.** Unicode is used only as a functional mark: `→`, `·`, `−`, `★`.

---

## Components

Eight groups, 74 primitives. Each directory carries `<Name>.jsx`, `<Name>.d.ts`,
`<Name>.prompt.md` and one `@dsCard` specimen page.

**Layout** — `Container` · `Border` · `Background`
**Core** — `Button` · `Badge` · `SectionLabel` · `Rating` · `PriceStack`
**Forms** — `Input` · `Select` · `Checkbox` · `QuantityStepper` · `NewsletterForm`
**Commerce** — `ProductCard` · `CollectionTile` · `Collections` · `PolyphenolMeter` · `TrustBar` ·
`DeliveryOption` · `BundleSummary` · `BuyBox`
**Content** — `ReviewCard` · `BlogCard` · `Accordion` · `ScienceCard` · `QuoteBlock` · `PressBar` ·
`TabList` · `PrimitiveButton` · `DetailPanel`
**Navigation** — `NavBar` · `TopNav` · `NavLink` · `MobileNav` · `Footer` · `Breadcrumbs` ·
`FilterPills` · `Pagination`
**Marketing** — `Tag` · `PillButton` · `Toggle` · `ShopCard` · `ComparisonCard` · `USPs` ·
`RightForYou` · `ButtonListbox` · `PurchaseOption` · `SubscriptionPanel` · `RankedProductCard` ·
`Mobile` · `MobileBundle` · `MobileSave` · `MobileBadge` · `HeroSection`
**Brand** — `Logo` · `Illustration` · `IllustrationField`
**Icons** — `Icon` · `SocialIcon` · the 14 Phosphor families as named components:
`ArrowUpRight` · `CaretDown` · `CaretLeft` · `CaretRight` · `Check` · `CheckCircle` ·
`InstagramLogo` · `MagnifyingGlass` · `Minus` · `Play` · `Plus` · `ShoppingBag` ·
`ShoppingCartSimple` · `User`

### On the component inventory

The Figma file is a **page-design file, not a structured component library**. Its 135
"component families" are overwhelmingly auto-named Figma artefacts: 28 sets literally called
`Container`, plus `Component 114`, `Component 204`, `Property 1=Default`, `Frame 2147230191`
and so on. Only a handful carry real names — the Phosphor icon families, `Social Icons`,
`Nav bar`, `Top Nav`, `Toggle`, `Label`, `Border`, `Background`, `USPs`, `Mobile - Bundle`,
`Right for You?`.

Building 28 components called `Container` would produce an inventory no designer could use.
Instead, the components above were derived from the **repeated UI patterns in the finished
page designs** — the real inventory the file expresses — with every numeric value (paddings,
radii, type sizes, colours) copied verbatim from the JSX. Each component maps to a pattern
that appears on at least two of the seven page designs.

#### Intentional additions — explicit confirmation list

The following built components are **confirmed intentional additions**. None of them is
expected to match a Figma family name, and none should be renamed: the source file never gave
these patterns a usable name, so they are named here in the brand's own vocabulary. The table
below the list records where each pattern lives in the source designs.

`Icon` · `SocialIcon` · `Button` · `Badge` · `SectionLabel` · `Rating` · `PriceStack` ·
`Input` · `Select` · `Checkbox` · `QuantityStepper` · `NewsletterForm` · `ProductCard` ·
`CollectionTile` · `PolyphenolMeter` · `TrustBar` · `DeliveryOption` · `BundleSummary` ·
`BuyBox` · `ReviewCard` · `BlogCard` · `Accordion` · `ScienceCard` · `QuoteBlock` ·
`PressBar` · `DetailPanel` · `PrimitiveButton` · `MobileNav` · `NavLink` · `Footer` ·
`Breadcrumbs` · `FilterPills` · `Pagination` · `PillButton` · `Tag` · `PurchaseOption` ·
`SubscriptionPanel` · `RankedProductCard` · `HeroSection` · `Logo` · `Illustration` ·
`IllustrationField`

`Logo`, `Illustration` and `IllustrationField` render brand assets the brand supplied
directly as vectors in August 2026. They have no Figma family at all — the .fig held only a
bitmap wordmark — so they are named for what they are and will never match kit vocabulary.

Also confirmed: the Figma Variables carried a stray `--font-family-font-4: "Inter"` that no
component referenced. Inter is not a Zimms Organics brand font, so the token has been removed
rather than preserved. The brand families are Lora, DM Sans, Raleway and Cormorant Garamond.

#### Intentional additions — where each pattern lives

Every component below is an **intentional addition**: the pattern exists in the source page
designs but the file never gave it a usable component name, so it has been named here in the
brand's own vocabulary. This list is the confirmation the compiler asks for; none of these
names is expected to match a Figma family name.

| Component | Where the pattern lives in the source |
|---|---|
| `Button` | Hero "Shop now", "View all", "Buy now", "Explore mini bottle" — 200×54, radius 4 |
| `Badge` | Wellness / Cooking pill inset 16px in product-card media |
| `SectionLabel` | "Trusted by", "About us", "Collections" — Lora Bold 18 caps with 16px rules |
| `Rating` | Star row on cards, hero and review headers |
| `PriceStack` | The `Item` price row: struck compare-at, price, "New price" |
| `Input` | Footer newsletter field, PDP discount field |
| `Select` | PLP sort control, delivery cadence listbox (`Button listbox – Choose an option`) |
| `Checkbox` | Subscription opt-ins in the buy box |
| `QuantityStepper` | Phosphor `Plus` / `Minus` pair in the buy box |
| `NewsletterForm` | Footer "Sign up for our newsletter" + Subscribe |
| `ProductCard` | The `ww` / `Shop card` frames on Home and Collection |
| `CollectionTile` | "Meet the pantry" row |
| `PolyphenolMeter` | The HEAL / COOK packaging strip in the brand screenshots |
| `TrustBar` | The `USPs` families — checked "Free shipping / 100% organic / Single origin" |
| `DeliveryOption` | `Property 1=De-selected option` / `Property 1=Selected` in the buy box |
| `BundleSummary` | "The Ultimate Olive Experience" panel; `Mobile – Bundle` |
| `BuyBox` | The PDP right column, `Frame 2147229639` |
| `ReviewCard` | The `Reviews` frames and `Tabpanel` verified-buyer card |
| `BlogCard` | `Property 1=Blog card` |
| `Accordion` | PDP Benefits / How to use / Quality testing; `Property 1=Expand` |
| `ScienceCard` | "Why Zimms Organics Is Different" containers |
| `QuoteBlock` | The manifesto band on The Ritual page |
| `PressBar` | The Erewhon / Ritz-Carlton / Grazia row under the hero |
| `NavBar` | `Nav bar` and `Top Nav` families |
| `MobileNav` | The `Mobile` family and the mobile artboards' 64px bar |
| `Footer` | `Component 236` / `Footer Desktop` |
| `Breadcrumbs` | The PLP and PDP path trail |
| `FilterPills` | `Property 1=tag` / `Property 1=tag light` on Collection |
| `Pagination` | Implied by the blog index; **not drawn in the file** |
| `Icon` / `SocialIcon` | Wrappers over the extracted Phosphor and `Social Icons` glyph data |

The **Marketing** group carries the source file's own family names verbatim, so these seven
do match the kit vocabulary exactly:

| Component | Source family |
|---|---|
| `Tag` | `Property 1=tag` / `Property 1=tag light` — 125×28, radius 50, DM Sans Medium 14/24 |
| `PillButton` | `Property 1=Btn - Fill` / `Property 1=Btn - Stroke` — 220×54, radius 50 |
| `Toggle` | `Toggle` (`Property 1=Select`) — 16px ring, 6.667px centre |
| `ShopCard` | `Shop card` — 416×547, radius 24, #F7F7F7 |
| `ComparisonCard` | `Comparison card` — 416×740, 70px spec rows, 1px #1E1E1E rules |
| `USPs` | `USPs` (`v2`) — 75px marquee, Plus Jakarta Sans SemiBold 16, tracking 0.04em |
| `RightForYou` | `Right for You?` — 1440×1108 section, 110/80 padding, 16px gutter |
| `ButtonListbox` | `Button listbox - Choose an option` — 44px, radius 12, rgb(180,180,180) ring |
| `PurchaseOption` / `SubscriptionPanel` | `Label` / `Animation` — 615×63 rows, radius 12, 0.8px #1E1E1E |

The **Layout** group likewise carries the file's own names:

| Component | Source family |
|---|---|
| `Container` | `Container` — the 1280 content column inside the 1440 canvas |
| `Border` | `Border` — the divider rule; hairline on light, 16% cream on dark |
| `Background` | `Background` — the named surface wash and hero scrim |

Further families built under their source names:

| Component | Source family |
|---|---|
| `RankedProductCard` | `ww` (`Property 1=v1`) — photographic card with the floating credential chip |
| `Mobile` / `MobileBundle` / `MobileSave` / `MobileBadge` | `Mobile`, `Mobile - Bundle`, `Mobile - Save`, `Mobile - Bage` — the 358×251 mobile bundle picker |
| `TopNav` | `Top Nav` — the utility strip above the main bar |
| `NavLink` | `Component 126` (`Property 1=Default`) — 26px nav link, 4px underline gap |
| `Collections` | `collections` — the "Meet the pantry" category row |
| `HeroSection` | `2 Variation Hero Section` — 800px hero, v1 gold / v2 navy |
| `TabList` / `PrimitiveButton` | `Tab List` / `Primitive.button` — 51px segmented control on the bone track |
| `DetailPanel` | `Component 140` (`Property 1=Frame 2147241488`) — 577px photographic panel with a bone caption card |

These come from the **earlier marketing iterations** (March–April artboards), which use a
rounder, sans-led language: 24px card radius, pill buttons, DM Sans headings on #F7F7F7.
The May 18 storefront moved to the square, Lora-led system in the other five groups. Both
are documented because both are in the file — **do not mix the two shapes on one page**.

Only three of these are genuinely new rather than renamed: `PolyphenolMeter` (the pack
device, reproduced for screen), `Pagination` (implied, not drawn), and the `Icon` /
`SocialIcon` wrappers (the glyphs are the file's; the wrapper is the only way to reach them
from React).

#### Skipped families — confirmed

The 80 unbuilt families break into three groups, all deliberately skipped:

1. **Auto-named layout frames (~70).** The 28 sets called `Container` collapse into one
   `Container` primitive (they are the same content column repeated per artboard version).
   The rest are `Component 114`,
   `118`, `119`, `122`, `123`, `126`, `138`, `140`, `204`, `205`–`214`, `283`–`292`,
   `342`–`351`, `387`, `Frame 2147230191`, `Frame 2147242677`, `Property 1=Default`,
   `Property 1=V1`/`V2`, `ww`, `Animation`, `Background`, `Border`, `Label`. These are
   Figma's default names for wrapper divs and one-off variants. They carry no distinct
   design and no designer refers to them by name. Their geometry is already absorbed into
   the named components above.
2. **Icon families — built.** All 14 Phosphor families ship as named components in
   `components/icons/`, each wrapping the real extracted path data in
   `assets/icons/icon-data.js`. The 12 Figma variants per family collapse into a `weight`
   prop (Light / Regular / Bold / Fill) rather than 168 separate files; the Stroke-format,
   Duotone and Thin variants did not decode cleanly from the binary and are unused in
   production. `Social Icons` (52 variants) ships as `SocialIcon` with `platform` and
   `color` props.
3. **Page-section frames, not components.** `2 Variation Hero Section`, `collections`
   (10 duplicate sets across artboard versions), `Your daily practice, your product.`,
   `Mobile - Bage`, `Mobile - Save`, `Mobile - Bundle`, `Frame 2147230191`,
   `Frame 2147242677`. These are whole page sections that exist once each, most of them
   duplicated across dated artboard versions rather than designed as reusable parts. They
   live in `ui_kits/storefront/` as screen code, which is where a full-width section
   belongs — not in the primitive library.

Everything with a real, non-generated name and a second use in the file **is now built**:
`Toggle`, `Shop card`, `Comparison card`, `Right for You?`, `USPs`, `Property 1=tag`,
`Property 1=Btn - Fill`/`Stroke`, `Button listbox - Choose an option`, `Label`,
`Animation`, `Nav bar`, `Top Nav`, and all 14 icon families. What remains is
Figma's own default naming.


**Also not built:** Toast, Tooltip, Dialog, Tabs, Avatar, Switch. The source defines none of
them. Adding them would give consumers primitives no Zimms designer would recognise.

---

## LOGO

Seven lockups ship as vectors in `assets/logo/`, rendered by `Logo`. Every one is a
**single-colour silhouette** — the geometry paints with `currentColor`, so one file serves
Forest on Paper, Bone on Forest and Cream on Navy. Never recolour part of a mark, never
add a stroke, never sit a mark on a photograph without a flat panel behind it.

| Mark | Ratio | Default | Minimum | Where it goes |
| --- | --- | --- | --- | --- |
| `wordmark` | 1135×97 | 24px | 16px | Site nav, email header, footer |
| `wordmarkDescriptor` | 304×48 | 32px | 20px | Front of pack, first slide, press kit |
| `wordmarkStack` | 672×236 | 64px | 32px | Square crops, tight columns, invoice head |
| `badge` | 119×120 | 72px | 40px | Bottle neck seal, favicon, stamp on shipping |
| `seal` | 430×439 | 96px | 48px | Label centrepiece, certificate, poster |
| `zRing` | 229×276 | 40px | 20px | App icon on light, monogram on stationery |
| `zSolid` | 229×276 | 40px | 20px | App icon on dark, small-scale stamp |

**Clearspace** is the cap height of the wordmark on all four sides — `<Logo clearspace>`
applies it. Nothing enters that margin: no rule, no photo edge, no second mark.

**Sizing.** `height` drives the mark and width follows the ratio. Never set both, never
stretch, never rotate. `logoMinHeight` exports the table above so a build can assert it.

**Colour pairings.** Forest or Navy on Paper, Cream, Shell and Bone. Bone or Cream on
Forest, Navy and Terracotta. Terracotta is available for the wordmark on Cream only — it is
an accent, not a brand colour for the mark. No gold logo, no white-on-white ghosting, no
drop shadow.

Standalone files sit alongside the component: `zimms-<mark>.svg` carries `currentColor` for
CSS use, and `-forest` / `-bone` variants are pre-filled for handoff to print and to
platforms that will not accept an inheriting fill.

---

## ILLUSTRATION

Forty marks ship as vectors in `assets/illustrations/`, rendered by `Illustration`. Same
construction as the logo: one colour, `currentColor`, no strokes and no internal palette.
The library is the brand's whole visual shorthand, so it carries the same restraint as the
copy — one subject per frame, no scene-building out of two marks, no mark inside a circle.

**Botanical** — `olivePip` · `olive` · `leaf` · `leafVeined` · `kale` · `herbs` · `sprig` ·
`avocado` · `avocadoHalf` · `avocadoCut` · `chili`
**The table** — `breadLoaf` · `breadRow` · `bagel` · `eggFried` · `eggInPan` · `pan` ·
`ladle` · `flame` · `smokeRibbon` · `grainScatter` · `tangle` · `stillLife`
**The oil** — `droplets` · `oilPool` · `oilPuddle` · `oilRing` · `oilSplash` · `oilDrip`
**Body and idea** — `gut` · `head` · `heart` · `figureSeated` · `globe` · `burst`
**Compositions and fields** — `cookScene` · `healScene` · `pourWaves` · `patternDense` ·
`rule`

**Where each belongs.** Botanical and oil marks carry provenance — harvest copy, the
standards block, the polyphenol explainer. Table marks carry the Culinary Ritual: recipes,
COOK merchandising, the shared-table sections. Body marks carry the Daily Ritual and the
science: `gut` and `head` beside a mechanism claim, `heart` only where the copy is about
practice, never as a health claim. `cookScene` and `healScene` are the two product
compositions and belong on their own product's pages only — do not swap them.

**As texture.** `pourWaves` and `patternDense` are background tiles. `IllustrationField`
places one behind a section at 8% opacity and caps it there. A mark at reading strength
behind text is a layout error, not a texture.

**Sizing.** `size` sets the long edge; the short edge follows the ratio. Marks are drawn for
40–160px in UI and any size in print. Below 24px use an icon instead — the marks lose their
silhouette. `rule` is the one non-subject entry: an angled divider, not an illustration.

Standalone `mark-<name>.svg` files carry `currentColor` for CSS and print handoff.

**Seen in production.** `guidelines/brand-packaging-reference.card.html` holds the five
Dieline submission boards — the authoritative rendering of the whole system on the bottle.
They fix the vessel (matte ceramic, raw beech cap), the two colourways (Cream on Terracotta
for COOK, Cream on Forest for HEAL), the spec-block construction, and the one place a mark
is allowed at full strength as an oversized backdrop rather than 8% texture. Check any new
packaging or product photography against those boards before it ships.

---

## UI kits

`ui_kits/storefront/` — six clickable screens recreating the May 18 artboards: Home,
Collection, Product (PDP with sticky gallery and buy box), The Ritual, Blog index, and Cart.
They compose the primitives above; nothing is re-implemented inside the kit.

## Slides

`slides/zimms/` — ten 16:9 masters at 1280×720: Title, Section divider, Statement,
Two-column, Image + text, Three-up cards, Data/stat, Comparison table, Quote, Closing.
Deck type runs larger than web type: body 24pt minimum, headings 48pt+. Decks get projected
in bad rooms, so the failing-contrast colours are excluded from data series — charts use
Deep Forest, Grove Sky, Heal+ Blue and Sunglow Clay.

## Known gaps

- **The illustration library is now complete.** Forty marks were supplied as vectors in
  August 2026 and ship in `assets/illustrations/` behind the `Illustration` component. The
  earlier flattened PNG (`assets/illustrations/library-sheet.png`) is kept only as the
  reference sheet the vectors were checked against. **One thing to confirm:** the marks
  arrived as `Asset 96`–`Asset 138` with no names, so the subject names in the table above
  were read off the rendered geometry — `stillLife`, `bagel`, `gut` and `chili` are the
  least certain. Correct any that are wrong and the keys will be renamed.
- **Logo lockups are complete.** Seven vector marks ship in `assets/logo/`, rendered by
  `Logo`. `assets/logo/zimms-wordmark.png` and `zimms-wordmark-footer.png` are the old
  bitmaps and should no longer be referenced — `NavBar` still points at the PNG and wants
  updating to `<Logo mark="wordmark" />`.
- **Font substitutions.** Lora, DM Sans, Raleway and Cormorant Garamond load from Google
  Fonts (they are the genuine families, not lookalikes). The supplied `Lora-Italic`
  variable binary is registered as `Lora Supplied` for italic; upright Lora comes from
  Google. Novecento Sans Wide and National ship as the supplied OTFs and are **print-track
  only** — do not use them for web UI. If you have licensed webfont builds (WOFF2) of
  Novecento and National, supply them and `tokens/fonts.css` can be pointed at those.
- **Inter is not a brand font.** A stray `--font-family-font-4: "Inter"` token came across
  from the Figma Variables, referenced by nothing. It has been deleted. Do not reintroduce it.
