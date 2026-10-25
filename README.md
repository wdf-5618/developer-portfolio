# Developer Portfolio

A personal portfolio website for **THET PAING SOE**, built with plain HTML, CSS, and JavaScript. The repository includes the portfolio page and three separate practical application demos.

## Practical applications

### 1. Task Management App
Repository: [task-management-app](https://github.com/wdf-5618/task-management-app)

Manage tasks using create/edit/complete/delete, search, status filters, sorting, priorities, due dates, and browser-local persistence.

### 2. Stockwise Inventory Manager
App folder: [inventory-manager/](inventory-manager/)

A small-shop inventory prototype with product create/edit/delete, stock adjustment, low-stock alerts, categories, inventory-value summaries, and CSV export.

### 3. Ledgerly Cash Flow Tracker
App folder: [cashflow-tracker/](cashflow-tracker/)

A simple monthly income-and-expense tracker with categories, transaction search and filters, monthly totals, net cash flow, and CSV export.

To open either standalone app, navigate to its `index.html`. You can also run a local server from the repository root:

```bash
python -m http.server 8000
```

Then visit:
- [Stockwise](http://localhost:8000/inventory-manager/)
- [Ledgerly](http://localhost:8000/cashflow-tracker/)

## About me

I graduated from Yadanarbon University with a Bachelor of Science in Mathematics. I built a foundation in web development through online courses and self-study, and I continue learning from frontend to backend.

I am also studying Harvard's CS50 course through YouTube to strengthen my computer science fundamentals.

## Technologies used

- HTML5 and semantic page structure
- CSS3, responsive layout, and keyboard focus styles
- Vanilla JavaScript and DOM events
- Browser `localStorage` for local persistence
- CSV export for simple data portability

## Portfolio features

- Responsive page layout for desktop and mobile
- Accessible navigation with a mobile menu
- Semantic sections and a skip-to-content link
- Skills described at an honest current level
- Source links for practical applications
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
├── cashflow-tracker/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── README.md
├── README.md
└── .gitignore
```

## Scope and limitations

The three applications are front-end learning prototypes. Task management is in its own public repository; Stockwise and Ledgerly are standalone folders in this repository. Their records are stored in the current browser profile; they do not yet have shared cloud storage, user accounts, or backend databases.

Work is being prioritized toward building, as requested. Full browser/manual verification has been deferred; the project READMEs explain the current scope and limitations.

## Further improvements

- Build a database-backed application with authentication and tenant-aware access control.
- Add automated tests and browser checks when time allows.
- Connect hosted demos after confirming deployment settings.
