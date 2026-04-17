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

## Deploying to GitHub Pages

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
4. Under **Build and deployment**, set:
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
5. Save. After a minute, your site will be live at
   `https://<your-username>.github.io/<your-repo>/`.

That's it — no build step, no dependencies.

## Notes

- All character names and concepts belong to their respective rights holders. This is a fan-made study guide.
- Chapter references are from the UK edition of *Harry Potter and the Philosopher's Stone* (US title: *Sorcerer's Stone*).
