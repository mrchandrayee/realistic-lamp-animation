# Realistic Lamp Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/realistic-lamp-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A standalone HTML/CSS/JavaScript recreation of the uploaded 22.57-second screen recording.

## What the video shows

- Heading: **Realistic Lamp Animation**
- A dark room with a suspended dome-shaped ceiling lamp
- The lamp is switched on and off by clicking it
- A warm glowing bulb appears under the shade when switched on
- A wide cone of warm light illuminates the room and floor
- A small **Click to interact** hint
- A code panel showing the lamp's HTML structure

## HTML transcribed from the visible video

The following structure is visible in the screen recording and is reproduced in `index.html`:

```html
<input type="checkbox" id="lamp-switch">
<div class="hint">Click to interact</div>

<div class="room-light"></div>

<label for="lamp-switch" class="lamp-wrapper">
    <div class="wire"></div>
    <div class="shade">
        <div class="bulb"></div>
    </div>
    <div class="beam"></div>
</label>

<div class="floor"></div>
```

The video only displays this HTML snippet, not the complete original CSS or JavaScript. The lamp's dome, wire, bulb glow, light cone, room ambience, floor pool, and transitions have therefore been recreated from the visible animation rather than claimed as exact original source.

## Run locally

1. Extract this ZIP.
2. Open `index.html` in a modern browser.
3. Click the lamp shade to switch it ON or OFF.

No npm install, build step, external images, or internet connection is required.

## Project files

- `index.html` — page structure and transcribed HTML snippet
- `style.css` — room, hanging lamp, bulb glow, light beam, and animation
- `script.js` — lamp state hint and accessibility enhancement
- `README.md` — instructions and extraction notes

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
