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
| Add or remove an event | `index.html`, the `EVENTS` section. While there are no events it shows a "check back soon" message; replace it with the commented-out `<ul class="events">` template below it and copy an `<li class="event">` block per event. Theme classes: `tag-fitness`, `tag-music`, `tag-hiking`, `tag-eco` |
| Change the hero photo | Replace `assets/hero-sunset.jpg` (landscape, ~2000px wide, under 300KB), or add a new file and update the `url(...)` in `.hero` in `styles.css` |
| Social links / email | `index.html`, footer |
| Brand colours | `styles.css`, `:root` at the top |

Edit on GitHub (web or mobile), commit to `main`, and the site updates automatically.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Signup form

The form posts to [Formspree](https://formspree.io) (form ID `xeaeapnr`, set in the form's `action` in `index.html`).
Submissions arrive in the Formspree dashboard. To switch forms, replace the ID in the `action`.

If the `action` ever contains `YOUR_FORM_ID`, the form shows a "signups open soon" message instead of submitting.

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
