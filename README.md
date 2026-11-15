# Fran — portfolio demo

A static portfolio demo with an editorial opening screen, floating navigation, interactive wireframe artwork and long-form case studies. All names, copy, projects and the contact address are example content.

## Run locally

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/`.

## Customize

- Edit project titles, descriptions and the long-form `chapters` array in `app.js`.
- The wireframe scenes are rendered and animated in `initArtwork()` in `app.js`. Each project uses its own scene, and pointer movement raises individual elements.
- Replace `assets/avatar.jpg` with the desired portrait and `assets/hero.png` with the desired opening artwork.
- Replace `hello@example.com` in `app.js` and `index.html` with a real address. The form opens the visitor's email app; it does not send messages through a server.
- Update the name and footer links in `index.html`; adjust colors and layout in `styles.css`.

The hero and four fallback line illustrations were generated with OpenAI's built-in image generation tool. Hero prompt: “A single elegant sculptural silver-grey abstract bird in motion, like a collectible designer object, brushed metal with warm highlights, transparent background.” The line illustrations depict an orbit, folded ribbon and frames, compass, and open pavilion in fine isometric linework. They are saved in `assets/line-orbit.png`, `assets/line-form.png`, `assets/line-field.png`, and `assets/line-space.png`. The interactive covers are drawn as live canvas scenes. Navigation icons are from Lucide.
