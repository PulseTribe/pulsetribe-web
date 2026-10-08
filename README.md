# PulseTribe

The website for **PulseTribe**, a Nairobi community for mind, body and soul.
Live at [pulsetribe.co.ke](https://pulsetribe.co.ke).

Plain static site: no build step, no dependencies.

```
index.html          the page
styles.css          all styling (brand colours at the top)
main.js             footer year + signup form handling
assets/             hero photo, logos, social share image
favicon.svg         browser tab icon
apple-touch-icon.png
_headers            caching and security headers (Cloudflare Pages / Netlify)
```

## Common updates

| Task | Where |
|---|---|
| Add or remove an event | `index.html`, the `EVENTS` section. Copy an `<li class="event">` block. Theme classes: `tag-fitness`, `tag-music`, `tag-hiking`, `tag-eco` |
| Change the hero photo | Replace `assets/hero.jpg` (landscape, ~1920px wide, under 300KB) |
| Social links / email | `index.html`, footer |
| Brand colours | `styles.css`, `:root` at the top |

Edit on GitHub (web or mobile), commit to `main`, and the site updates automatically.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Signup form

The form posts to [Formspree](https://formspree.io) (free tier is enough to start).

1. Create a form at formspree.io and copy its ID.
2. In `index.html`, replace `YOUR_FORM_ID` in the form's `action`.

Until then, the form shows a "signups open soon" message instead of failing.

## Deploying on Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, pick this repo.
3. Build settings: framework preset **None**, build command empty, output directory `/`.
4. Deploy. You get a `*.pages.dev` URL.

### Custom domain (pulsetribe.co.ke)

1. Cloudflare → **Add a site** → `pulsetribe.co.ke` (free plan).
2. At your .co.ke registrar, replace the nameservers with the two Cloudflare gives you. Propagation can take a few hours.
3. In the Pages project → **Custom domains**, add `pulsetribe.co.ke` and `www.pulsetribe.co.ke`.
4. SSL is issued automatically.

Pushes to other branches get their own preview URL, handy for checking changes before they go live.
