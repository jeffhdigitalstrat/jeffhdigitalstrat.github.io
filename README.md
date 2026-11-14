# Jeff Hwang Portfolio

Static one-page portfolio (HTML/CSS/JS, no build step), hosted free on GitHub Pages.

## Files
- `index.html` : page structure and all text (hero, writing, reports, my story, contact)
- `content.js` : **audio + video lists**. Add/edit a track or video here.
- `style.css`  : design (colors are at the top under `:root`)
- `main.js`    : cards, filters, and the pop-up player
- `assets/img` : web-optimized images
- `assets/docs`: PDFs (resume, screenplay, reports)

## Add a new SoundCloud track
1. On SoundCloud: Share > Embed, copy the code. Find `tracks%3A<NUMBER>` and `secret_token%3D<s-XXXX>`.
2. Put an image (around 900px wide JPG) in `assets/img/`.
3. In `content.js`, add a line to `AUDIO`:
   `{ title: "My Track", label: "Mixdown", cat: "Music Mixdown", type: "soundcloud", id: "NUMBER", token: "s-XXXX", img: "my-image.jpg" },`

## Add a new YouTube video
Add a line to `VIDEO` in `content.js` with `youtube: "VIDEO_ID"` (the part after `watch?v=`).

## Why it is fast
Players (SoundCloud / Spotify / YouTube) are not loaded with the page. Each card is just an image;
the player loads only when a card is clicked, and is removed when the pop-up closes.
Images were resized from ~100 MB of originals to ~3 MB total and lazy-load as you scroll.

## Editing on GitHub
Open the file on github.com, click the pencil icon, edit, and "Commit changes".
The live site updates in about a minute.
