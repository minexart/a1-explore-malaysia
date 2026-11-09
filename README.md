# Explore Malaysia

A single-page application (SPA) for a Malaysian travel agency, built with React, Vite and React Router.
DIT2163N Web and Mobile System — Assignment 1, UOW Malaysia.

**Live site:** https://YOUR-VERCEL-LINK.vercel.app

## Pages
- **Home** — agency name, tagline and an auto-playing image slider
- **Packages** — travel packages fetched from a mock API, with loading, error and no-data messages
- **About** — agency description and highlights (reusable `Highlight` component)
- **Contact** — feedback form with per-field validation and a success message

## New features
1. Search packages by destination
2. Filter packages by category
3. Sort packages by price (low to high / high to low)
4. Package detail page (`/packages/:id`)

## Mock API
Package data is served from `public/packages.json` and loaded with `fetch()` inside `useEffect`.

## Run locally
    npm install
    npm run dev

## Image credits
All photos from [Unsplash](https://unsplash.com), used under the Unsplash License.

| File | Photographer | Source |
|---|---|---|
| kl.jpg | Elliot Andrews | https://unsplash.com/photos/PqE1B5FENoU |
| beach.jpg | Nur Syafiqah | https://unsplash.com/photos/JyQl3BiCfCM |
| langkawi.jpg | Simon Wiedensohler | https://unsplash.com/photos/M_JGvTZUFTY |
| redang.jpg | Zachary Black | https://unsplash.com/photos/CaMh9ch2Qnw |
| penang.jpg | Kelvin Zyteng | https://unsplash.com/photos/GduUowJExNk |
| melaka.jpg | Fajri Hafizh | https://unsplash.com/photos/KszWGJEU2fo |
| ipoh.jpg | John T | https://unsplash.com/photos/qaLBN7Moe7M |
| cameron.jpg | Abdelrahman Ismail | https://unsplash.com/photos/R8Tb3D4SNtk |
| kinabalu.jpg | Ong Cheng Zheng | https://unsplash.com/photos/juFTPN6uv3w |
