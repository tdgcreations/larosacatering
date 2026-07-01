# La Rosa Catering Website

A responsive, single-page static website for **La Rosa Catering** by Isabel Paredes.

## What is included

- Mobile-friendly landing page
- Click-to-call buttons using `858-663-5462`
- SMS-based quote form that works without a backend
- SEO title, description, Open Graph data, and Local Business structured data
- Responsive navigation
- Scroll-reveal animations
- Mexican folk-art-inspired colors, borders, rose stickers, and decorative details
- GitHub Pages-ready file structure

## Quick start

1. Upload every file and folder in this project to a new GitHub repository.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/root`.
5. Save. GitHub will provide the live website URL.

## Files you will probably customize first

### Replace the portrait

In `index.html`, find:

```html
<img src="assets/chef-placeholder.svg" alt="Portrait placeholder for Isabel Paredes" />
```

Replace `assets/chef-placeholder.svg` with a real portrait file, for example:

```html
<img src="assets/isabel-paredes.jpg" alt="Chef Isabel Paredes" />
```

Then place that image inside the `assets` folder.

### Replace the food photos

The starter site currently uses remote Unsplash images. Search for `images.unsplash.com` in `index.html` and replace each image URL with photos of Isabel’s actual food.

For the best performance, place optimized WebP or JPG files in the `assets` folder and use paths such as:

```html
<img src="assets/wedding-catering.webp" alt="Wedding catering by La Rosa Catering" />
```

### Add a real domain

After purchasing a domain, add it under **Settings → Pages → Custom domain**.

### Make the quote form send email instead of text

The current form opens a pre-filled text message to Isabel. This is ideal for a GitHub Pages site because it does not require a backend.

To collect submissions automatically, connect the form to a service such as Formspree, Basin, or Netlify Forms, then replace the JavaScript form behavior.

## Local preview

You can double-click `index.html`, or run a small local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Suggested next upgrades

- Add Isabel’s real portrait
- Add 8–12 original food photos
- Add a simple menu or sample packages
- Add Google reviews after the business begins collecting them
- Connect a domain
- Add analytics and Google Search Console
