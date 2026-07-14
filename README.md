# Force1 Training Facility — Website

Astro static site, styled for the Force1 brand (black / white / red, Proxima Nova
Extra Bold headings, 3px button radius). Built for Cloudflare Pages.

## Pages

- `/` Home
- `/memberships/` Memberships (pricing placeholders — see TODO below)
- `/gallery/` Gallery
- `/personal-training/` Personal Training
- `/about/` About Us
- `/contact/` Contact
- `/free-pass/` Free 7 Day Pass

## Images

The AI-generated site images download automatically the first time you build
(`download-images.mjs` runs before `astro build` and skips files that already
exist). To replace any image, just drop your own file with the same name into
`public/images/` — the script won't overwrite it.

## Run locally

```
npm install
npm run dev
```

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo and use:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Add your custom domain (force1trainingfacility.com) under **Custom domains**.

## Fonts

Proxima Nova is a commercial Adobe Font. The site currently uses **Montserrat 800**
as a near-identical live fallback. To switch to real Proxima Nova Extra Bold:

1. Create a web project ("kit") at https://fonts.adobe.com containing Proxima Nova (weight 800).
2. Add the kit's stylesheet link in `src/layouts/Base.astro` (a placeholder comment marks the spot).
3. Done — the CSS already lists `"proxima-nova"` first in the heading font stack.

## TODO before launch

- [x] **Memberships pricing** — $65/mo + $100 sign-up, or $680 paid-in-full for 12 months.
- [ ] **Location** — update "Coming Soon" in the Footer and Contact page when the address is set.
- [ ] **Forms** — Contact and Free Pass forms are intentionally not wired up yet. Connect them to Formspree, Web3Forms, or a Cloudflare Pages Function when ready.
      Formspree, Web3Forms, or a Cloudflare Pages Function.
- [ ] Swap in real gym photos in `public/images/` whenever ready — filenames are mapped
      in each page, so replacing a file updates the site.
