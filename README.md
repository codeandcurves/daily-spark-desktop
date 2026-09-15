# Daily Spark ✦

A lightweight Windows desktop companion that quietly lives in your system tray and surfaces bite-sized inspiration at randomized intervals — without becoming another noisy productivity app.

## What it does

Daily Spark opens as a compact **390 × 235 px** card in the bottom-right of Windows. It starts with Windows, stays in the system tray, and can surface a new Spark at a randomized interval (2–4 hours by default).

Current topics include:

- AI Trends
- Motivation
- MMA mindset
- Physical Fitness
- Art & Music
- Upcoming Tasks

The compact card supports **Save**, **Another**, **Open source**, and **Close**. Motivation cards can retrieve a small live selection from The Quotations Page and preserve source attribution.

## Why I built it

Most productivity and AI tools require us to deliberately open another application. Daily Spark explores the opposite interaction model: **what if useful information came to you occasionally, in a calm and non-intrusive way?**

The UX is deliberately small. One idea. One source. A few actions. Then it gets out of the way.

## Download for Windows

The public source is available in this repository. A pre-built Windows installer will be published under **GitHub Releases** as the project release is finalized.

If you want to build it locally now, follow the instructions below.

## Build locally

Requirements:

- Windows 10/11
- Node.js LTS
- npm

Clone the repository and run:

```bash
npm install
npm start
```

To create the Windows installer:

```bash
npm run dist
```

The installer will be generated in `dist/` as `Daily Spark Setup 1.2.0.exe`.

You can also use the included `BUILD-WINDOWS.bat` on Windows.

## Desktop behavior

- Starts automatically with Windows
- Runs from the system tray
- Compact frameless bottom-right popup
- Randomized 2–4 hour interval by default
- 30-second auto-hide
- Hovering keeps the Spark visible
- Closing the popup keeps Daily Spark running in the tray
- **Quit Daily Spark** from the tray exits the application

## Content & sources

Daily Spark is designed around source-aware content. Quote content can be retrieved in small selections from [The Quotations Page](https://www.quotationspage.com/) and links back to the source.

AI Trends and Upcoming Tasks are currently prototype/fallback content. The roadmap is to connect current technology sources and calendar/task integrations rather than representing those cards as live data before those integrations exist.

## Tech stack

- Electron
- HTML / CSS / JavaScript
- Node.js
- electron-builder / NSIS
- Windows system tray and login startup integration

## Privacy

Daily Spark v1.2 stores preferences locally in the Electron user-data directory. No API keys, passwords, tokens, or personal calendar credentials should be committed to this repository.

## Roadmap

- Live AI trend discovery with source links
- Calendar-aware Upcoming Tasks
- Topic preferences and frequency controls
- Favorites/history view
- Better content ranking and deduplication
- Signed Windows releases
- Improved accessibility and keyboard controls
- Additional trusted content sources

## Project status

**v1.2 — Compact prototype**

This is an experimental side project and is under active development.

## License

MIT License. See `LICENSE`.

---

Built as an experiment in **proactive, low-interruption AI/desktop UX**.