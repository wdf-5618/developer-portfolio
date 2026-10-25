# Developer Portfolio

A personal portfolio website for **THET PAING SOE**, built with plain HTML, CSS, and JavaScript. It now includes two practical application demos alongside the portfolio page.

## Projects

### 1. Task Management App

A separate public repository: [task-management-app](https://github.com/wdf-5618/task-management-app). It includes task creation, editing, completion, deletion, search, status filters, sorting, priorities, due dates, and browser-local persistence.

### 2. Stockwise Inventory Manager

A small-shop inventory prototype in `inventory-manager/`. It supports a product catalog, SKU/category tracking, stock adjustments, low-stock and out-of-stock filters, stock-value summaries, and CSV export.

Open `inventory-manager/index.html` directly or run a local server from the repository root:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000/inventory-manager/](http://localhost:8000/inventory-manager/).

## About me

I graduated from Yadanarbon University with a Bachelor of Science in Mathematics. I built a foundation in web development through online courses and self-study, and I continue learning from frontend to backend.

I am also studying Harvard's CS50 course through YouTube to strengthen my computer science fundamentals.

## Technologies used in these projects

- HTML5 and semantic page structure
- CSS3, responsive layout, and keyboard focus styles
- Vanilla JavaScript and DOM events
- Browser `localStorage`
- CSV export for simple data portability

## Portfolio features

- Responsive page layout for desktop and mobile
- Accessible navigation with a mobile menu
- Semantic sections and a skip-to-content link
- Skills described at an honest current level
- Source links for implemented projects
- Keyboard focus styles and reduced-motion support

## Repository structure

```text
developer-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── inventory-manager/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── README.md
├── README.md
└── .gitignore
```

## Scope and limitations

The task manager is maintained in its own repository. Stockwise is a standalone front-end demo inside this portfolio repository. Both applications currently store data in the local browser; neither has login, shared cloud storage, or a server-backed database.

The projects are MVP learning prototypes. This update prioritizes implementation; full browser/manual verification has been deferred to save time. The project READMEs describe the current scope and possible next improvements.

## Further improvements

- Add a database-backed business application with authentication and tenant-aware access control.
- Add automated tests and manual browser checks when time allows.
- Connect a hosted demo after confirming deployment settings.
