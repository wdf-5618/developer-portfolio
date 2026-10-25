# Developer Portfolio

A personal portfolio website for **THET PAING SOE**, built with plain HTML, CSS, and JavaScript. This repository contains the portfolio website only; each application is maintained in its own repository.

## Projects

### 1. Task Management App
Repository: [wdf-5618/task-management-app](https://github.com/wdf-5618/task-management-app)

A task manager with create/edit/complete/delete, search, status filters, sorting, priorities, due dates, and browser-local persistence.

### 2. Stockwise Inventory Manager
Repository: [wdf-5618/stockwise-inventory-manager](https://github.com/wdf-5618/stockwise-inventory-manager)

A small-shop inventory app with product management, stock adjustments, movement history, low-stock alerts, categories, and CSV import/export. A local Node.js server provides SQLite persistence; browser-only mode remains available.

### 3. Ledgerly Cash Flow Tracker
Repository: [wdf-5618/ledgerly-cashflow-tracker](https://github.com/wdf-5618/ledgerly-cashflow-tracker)

A monthly income-and-expense tracker with transaction management, category filters, monthly totals, net cash flow, and CSV export.

## About me

I graduated from Yadanarbon University with a Bachelor of Science in Mathematics. I built a foundation in web development through online courses and self-study, and I continue learning from frontend to backend.

I am also studying Harvard's CS50 course through YouTube to strengthen my computer science fundamentals.

## Technologies used

- HTML5 and semantic page structure
- CSS3 and responsive layouts
- Vanilla JavaScript and DOM events
- Browser `localStorage` for Task Management and Ledgerly local persistence
- Node.js built-in `node:sqlite` and SQLite persistence in Stockwise local-server mode
- CSV import/export for data portability

## Portfolio features

- Responsive page layout for desktop and mobile
- Accessible navigation with a mobile menu
- Semantic sections and a skip-to-content link
- Skills described at an honest current level
- Dedicated repository links for each practical app
- Keyboard focus styles and reduced-motion support

## Run the portfolio locally

No build tools or package installation are needed. Open `index.html` in a browser, or run a small server from this repository root:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000/](http://localhost:8000/).

## Repository structure

```text
developer-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── README.md
└── .gitignore
```

## Scope and limitations

The portfolio links to three separate learning projects. Stockwise has a local SQLite-backed server mode, but it is not deployed as a hosted backend and does not provide shared cloud storage or multi-user accounts. Task Management and Ledgerly remain browser-local prototypes. Each repository README explains its current scope. Full manual browser verification is still pending.

## Future direction

The next major development effort is a database-backed business application with authentication, business-specific data access, and clear authorization boundaries.
