# Pig Game 🎲

A fast, two-player dice game built with **Vanilla JavaScript**, inspired by Jonas Schmedtmann’s course.  
Roll the die, add to your turn score, but **roll a 1 and you lose it all**. Hold to bank points. First to 100 wins.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=000)](#)

---

## 🚀 Live Demo
- **Website:** <https://<your-username>.github.io/<repo-name>/>  
- **Code:** You’re here!  

> Tip: If you haven’t enabled GitHub Pages yet, go to **Settings → Pages → Deploy from branch → `main` / `/`**.

---

## ✨ What it does (Features)

- 🎯 Two-player, turn-based gameplay
- 🎲 Random dice roll (`1–6`) with image updates
- 💾 **Hold** to bank current turn score
- 🔄 **New Game** resets UI & state
- 🧠 Clear turn indicators and active player highlight
- 📱 Responsive layout (mobile → desktop)

---

## 🧩 Concepts & Skills Behind It

- **DOM Manipulation & Events:** `querySelector`, `classList`, click handlers, event delegation patterns
- **State Management:** Active player, current turn score, total scores, game-over guard
- **Pure Logic vs UI:** Kept rule logic independent from DOM updates where sensible
- **Control Flow & Defensive Coding:** Early returns to block input when the game has ended
- **Randomness:** `Math.trunc(Math.random() * 6) + 1`
- **CSS Practices:** Utility classes for visibility/active state; transition-friendly styling
- **Accessibility Basics:** Button roles, focus order, and clear visual states
- **Project Hygiene:** Small functions, naming clarity, and comments for future you

---

## 🧠 What I Learned

- How to **translate game rules into state & UI transitions** without a game loop
- The value of **guard conditions** (e.g., ignore clicks after game over)
- Cleanly updating the UI from a **single source of truth** (JS state)
- Using **modular thinking** even in a single-file app (grouped helpers & handlers)
- Making **responsive, minimal UIs** that remain readable and touch-friendly

---

## 🗂️ Project Structure
├─ index.html # Markup and control buttons
├─ style.css # Layout, active/highlight styles, responsive rules
├─ script.js # Game state, handlers, DOM updates
└─ assets/
└─ dice-1..6.png # Dice images

---

## 🕹️ How to Play

1. **Roll**: Click **Roll Dice** to add to your turn score.
2. **Risk**: If you roll a **1**, you lose your **turn score** and it’s the other player’s turn.
3. **Hold**: Click **Hold** to bank your turn score into your total and pass the turn.
4. **Win**: First player to **100** points wins.

---

## ▶️ Run Locally

**Option A (quick):**
- Open `index.html` in a browser.

**Option B (Live Server):**
- Use the VS Code **Live Server** extension → right-click `index.html` → **Open with Live Server**.

---

## 🧪 Manual Test Checklist

- [ ] Dice updates visually on every roll  
- [ ] Current score resets to `0` when a `1` appears  
- [ ] **Hold** transfers current → total, then switches player  
- [ ] **New Game** resets both players & UI highlights  
- [ ] Buttons ignore input after win state  

---

## 🛠️ Possible Enhancements

- [ ] Custom **winning score** input (e.g., play to 50/150)  
- [ ] **Keyboard controls** (R = roll, H = hold, N = new)  
- [ ] **Animations** on roll/hold/state changes  
- [ ] **Two-dice** variant or “lose total on double-1” rule  
- [ ] **Sound effects** with user-toggle  

---

## 📸 Screenshots

| Gameplay | Win State |
| --- | --- |
| <img alt="Gameplay" src="assets/screen-gameplay.png" width="420"> | <img alt="Win" src="assets/screen-win.png" width="420"> |

> Don’t have screenshots yet? Press `PrtSc` / `Cmd+Shift+4`, drop into `assets/`, and update file names above.

---

## 🙌 Acknowledgements

- Built while following **Jonas Schmedtmann’s** JavaScript course project and then customized by me (**Aditya Pant**) to practice clean state handling, UI updates, and responsive layout.

---

## 📄 License

MIT — use, learn, and have fun.

