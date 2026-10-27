# Developer Portfolio

A personal portfolio website for **THET PAING SOE**, built with plain HTML, CSS, and JavaScript. This repository contains the portfolio website only. Each practical application is maintained in its own repository.

## Projects

### 1. Task Management App
Repository: [wdf-5618/task-management-app](https://github.com/wdf-5618/task-management-app)

A task manager with create/edit/complete/delete, search, status filters, sorting, priorities, due dates, and browser-local persistence.

### 2. Stockwise Inventory Manager
Repository: [wdf-5618/stockwise-inventory-manager](https://github.com/wdf-5618/stockwise-inventory-manager)

A small-shop inventory app with product management, stock adjustments, movement history, low-stock alerts, categories, and CSV import/export. A local Node.js server provides SQLite persistence; browser-only mode remains available.

### 3. ServiceSlot
Repository: [wdf-5618/serviceslot](https://github.com/wdf-5618/serviceslot) · [Live demo](https://serviceslot-wdf-5618s-projects.vercel.app)

An appointment-request demo built with React and Bootstrap. Customers can select a service, date, and time, then submit a request for a local queue. The demo does not contact a real business or reserve a shared calendar.

### 4. ClientBrief
Repository: [wdf-5618/client-brief](https://github.com/wdf-5618/client-brief) · [Live demo](https://client-brief-wdf-5618s-projects.vercel.app)

A client/project intake form that turns project goals, deliverables, requirements, budget, and timing into a structured brief. It supports browser-local drafts, copy, JSON export, and print/PDF; it does not submit information to a server.

### 5. QuickQuote
Repository: [wdf-5618/quickquote](https://github.com/wdf-5618/quickquote) · [Live demo](https://quickquote-wdf-5618s-projects.vercel.app)

A quotation and estimate builder for small businesses and freelancers. Add line items, calculate totals, apply discount or tax, and print a customer-ready estimate.

### 6. Ledgerly Cash Flow Tracker
Repository: [wdf-5618/ledgerly-cashflow-tracker](https://github.com/wdf-5618/ledgerly-cashflow-tracker)

A monthly income-and-expense tracker with transaction management, category filters, monthly totals, net cash flow, and CSV export.

## About me

I graduated from Yadanarbon University with a Bachelor of Science in Mathematics. I built a foundation in web development through online courses and self-study, and I continue learning from frontend to backend.

I am also studying Harvard's CS50 course through YouTube to strengthen my computer science fundamentals.

## Technologies used

- HTML5 and semantic page structure
- CSS3 and responsive layouts
- Vanilla JavaScript and DOM events
- Bootstrap 5 and vanilla JavaScript in the separate QuickQuote and ClientBrief apps
- React, Bootstrap 5, and Vite in the separate ServiceSlot app
- Browser localStorage for Task Management, Ledgerly, QuickQuote, and ClientBrief local persistence
- Node.js built-in node:sqlite and SQLite persistence in Stockwise local-server mode
- CSV import/export for data portability

## Portfolio features

- Responsive page layout for desktop and mobile
- Accessible navigation with a mobile menu
- Semantic sections and a skip-to-content link
- Skills described at an honest current level
- Dedicated repository links for each practical app
- Keyboard focus styles and reduced-motion support

## Run the portfolio locally

No build tools or package installation are needed. Open index.html in a browser, or run a small server from this repository root:

~~~bash
python -m http.server 8000
~~~

Then open [http://localhost:8000/](http://localhost:8000/).

## Repository structure

~~~text
developer-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── README.md
└── .gitignore
~~~

## Scope and limitations

The portfolio links to six separately maintained learning apps. Stockwise has a local SQLite-backed server mode, but it is not deployed as a hosted backend and does not provide shared cloud storage or multi-user accounts. Task Management, Ledgerly, QuickQuote, ClientBrief, and ServiceSlot are browser-local prototypes. Each README explains the current scope. Manual interaction tests have been performed for the recent ClientBrief MVP; full browser verification of every app remains pending.

## Future direction

The next major development effort is a database-backed business application with authentication, business-specific data access, and clear authorization boundaries.
