# Harry Potter and the Philosopher's Stone — Fan Site

A small static website introducing characters from Book 1, sorted by Hogwarts house, with an interactive quiz that tells you which chapter to revisit when you miss a question.

## Files

- `index.html` — Character guide, grouped by house
- `quiz.html` — Quiz page (loads `quiz.js`)
- `quiz.js` — 18 Book 1 questions + instant-feedback logic
- `style.css` — Styling for both pages

All character "pictures" are inline SVG avatars — no external image files needed.

## Running locally

Just open `index.html` in any browser. Everything is client-side.

## Deploying to GitHub Pages (automatic)

This repo ships with a GitHub Actions workflow at
`.github/workflows/deploy.yml` that deploys the site to GitHub Pages
every time you push to `main`.

1. Create a new GitHub repository (for example, `harry-potter-book1`).
2. Put every file from this folder in the repo's root and push:

   ```bash
   git init
   git add .
   git commit -m "Add Harry Potter Book 1 site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

3. In your repo on GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
   (No branch to pick — the workflow handles it.)
5. Open the **Actions** tab. You'll see the *Deploy to GitHub Pages*
   workflow running. When it finishes (about a minute), your site is
   live at `https://<your-username>.github.io/<your-repo>/`.

From then on, any `git push` to `main` re-deploys automatically.

## Notes

- All character names and concepts belong to their respective rights holders. This is a fan-made study guide.
- Chapter references are from the UK edition of *Harry Potter and the Philosopher's Stone* (US title: *Sorcerer's Stone*).
