# 📚 Personal Library App

A clean, editorial-inspired book tracking application designed for a focused reading experience.  
This project emphasizes **Object-Oriented JavaScript**, memory-efficient **Prototypes**, and persistent data management using the **Web Storage API**.

The application separates data management from UI rendering,
allowing the book collection (stored in an array) to dynamically generate the interface.

## Live Demo

[View on GitHub Pages](https://inaladevi.github.io/library-app/)

## Features

- **Persistent Data** using `localStorage` to save your collection across browser sessions.
- **Memory-Efficient Architecture** using JavaScript **Prototypes** to share methods across all book instances.
- **Automated ID Generation** using `crypto.randomUUID()` for precise item tracking.
- **Dynamic Content Rendering** that syncs the "Data Brain" (Array) with the "UI Face" (DOM).
- **Interactive Book Cards** featuring:
  - Custom status badges (Read vs. Not Read).
  - Toggle functionality to flip reading status instantly.
  - Hover elevation effects.
  - `preventDefault()` integration for smooth, no-refresh data entry.
- **Performance Optimized** via **Event Delegation** on the main library container.

## Built With

- **HTML5** (Semantic structure)
- **CSS3**
  - CSS Grid & Flexbox
  - Custom Properties (CSS Variables)
  - Keyframe transitions and hover states
- **JavaScript (ES6+)**
  - Object Constructors & Prototypes
  - JSON Data Handling
  - DOM Manipulation & Event Delegation
- **Google Fonts** (Libre Baskerville & Inter)

## Preview

![Library App Preview](/preview.png)
