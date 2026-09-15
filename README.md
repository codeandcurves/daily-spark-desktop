# Daily Spark ✦

**Your useful AI conversations should not disappear when the chat closes.**

Daily Spark is a small, local-first Windows companion that quietly brings back ideas, reminders, suggestions and conversation takeaways worth remembering.

## Daily Spark v1.5

Instead of pulling random quotes, Daily Spark now acts as a lightweight output layer for conversations you already have with tools such as ChatGPT or Gemini.

1. Talk normally with your AI assistant.
2. Copy a useful idea, reminder or suggestion.
3. Press **Ctrl + Shift + S** (or use **Save clipboard as Spark** from the tray).
4. Daily Spark stores that selected text locally.
5. It can quietly resurface later in a compact Windows notification.

Daily Spark does **not** continuously watch your clipboard. Clipboard text is read only when you explicitly trigger capture.

## Experience

- Tiny **340 × 132 px** bottom-right notification
- Does not take keyboard focus from the app you are using
- Auto-hides after about 12 seconds
- Hover pauses auto-hide
- Random quiet resurfacing every 2–4 hours by default
- **Ctrl + Shift + S** quick capture
- Tray action for explicit clipboard capture
- Lightweight local rule classification: Reminder, Idea, Routine, Food idea, Motivation, Suggestion or Talk
- Captured Sparks are preferred over generic fallback content
- Starts with Windows when installed
- No OpenAI or Gemini API key required
- No token or AI API cost

## Privacy

Daily Spark is intentionally local-first. Captured Sparks are stored in the Electron user-data directory in `spark-inbox.json`. The app does not silently scrape ChatGPT/Gemini history and does not continuously monitor the clipboard.

Avoid capturing passwords, authentication tokens, private keys, or other secrets. You control what becomes a Spark by explicitly copying it and triggering capture.

## Run locally

Requirements: Windows 10/11, Node.js LTS and npm.

```bash
git clone https://github.com/codeandcurves/daily-spark-desktop.git
cd daily-spark-desktop
npm install
npm start
```

## Build the Windows installer

```bash
npm run dist
```

The installer is generated under `dist/` as `Daily-Spark-Setup-1.5.0.exe`.

## How the architecture stays simple

```text
ChatGPT / Gemini conversation
          ↓
Copy something worth keeping
          ↓
Ctrl + Shift + S
          ↓
Daily Spark local inbox
          ↓
Lightweight local classification
          ↓
Quiet Windows popup later
```

The intelligence can happen in the conversation you are already having. Daily Spark focuses on capture, storage, timing and resurfacing rather than making another paid AI request.

## Tech

Electron · JavaScript · HTML/CSS · Node.js · electron-builder / NSIS · Windows tray/global shortcut

## Roadmap

- Better local scheduling for reminders
- Done / Later actions
- Optional source labels such as ChatGPT or Gemini
- Browser extension for explicit one-click capture
- History and delete controls
- Smarter local ranking without requiring cloud AI
- Signed Windows releases

## Project status

**v1.5 — Personal companion / conversation capture MVP**

Open-source experiment in proactive, low-interruption desktop UX.

## License

MIT License. See `LICENSE`.