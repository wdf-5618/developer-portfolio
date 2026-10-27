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

### 5. HelpDesk Lite
Repository: [wdf-5618/helpdesk-lite](https://github.com/wdf-5618/helpdesk-lite) · [Live demo](https://helpdesk-lite-wdf-5618s-projects.vercel.app)

A small-business support queue for customer issues, priorities, assignees, status changes, and activity notes. The demo is stored in the current browser and does not send customer notifications.

### 6. FeedbackPulse
Repository: [wdf-5618/feedback-pulse](https://github.com/wdf-5618/feedback-pulse) · [Live demo](https://feedback-pulse-wdf-5618s-projects.vercel.app)

A customer feedback dashboard for rating averages, rating distribution, category summaries, and follow-up on low scores. Sentiment labels use simple rating thresholds rather than AI analysis; all responses remain in the current browser.

### 7. QuickQuote
Repository: [wdf-5618/quickquote](https://github.com/wdf-5618/quickquote) · [Live demo](https://quickquote-wdf-5618s-projects.vercel.app)

A quotation and estimate builder for small businesses and freelancers. Add line items, calculate totals, apply discount or tax, and print a customer-ready estimate.

### 8. Ledgerly Cash Flow Tracker
Repository: [wdf-5618/ledgerly-cashflow-tracker](https://github.com/wdf-5618/ledgerly-cashflow-tracker) · [Live demo](https://ledgerly-cashflow-tracker-wdf-5618s-projects.vercel.app)

A monthly income-and-expense tracker with transaction management, category filters, monthly totals, net cash flow, and CSV export.

### 9. ShiftBoard Lite
Repository: [wdf-5618/shiftboard-lite](https://github.com/wdf-5618/shiftboard-lite) · [Live demo](https://shiftboard-lite.vercel.app/)

A weekly staff-scheduling workspace built with React and Tailwind CSS. It uses Supabase Auth and PostgreSQL for private per-account workspaces, staff rosters, and shifts, with row-level security and database-side overlapping-shift validation.

## About me

I graduated from Yadanarbon University with a Bachelor of Science in Mathematics. I built a foundation in web development through online courses and self-study, and I continue learning from frontend to backend.

I am also studying Harvard's CS50 course through YouTube to strengthen my computer science fundamentals.

## Technologies used

- HTML5 and semantic page structure
- CSS3 and responsive layouts
- Vanilla JavaScript and DOM events
- Bootstrap 5 and vanilla JavaScript in the separate QuickQuote, ClientBrief, HelpDesk Lite, and FeedbackPulse apps
- React, Bootstrap 5, and Vite in the separate ServiceSlot app
- React, Tailwind CSS 4, and Vite in ShiftBoard Lite
- Supabase Auth, PostgreSQL, and row-level security (RLS) for ShiftBoard Lite workspace data
- Browser localStorage for Task Management, Ledgerly, QuickQuote, ClientBrief, ServiceSlot, HelpDesk Lite, and FeedbackPulse local persistence
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

The portfolio links to nine separately maintained learning apps. ShiftBoard Lite is the first app in this portfolio using a hosted database and authentication: Supabase Auth with PostgreSQL tables protected by row-level security. Its production signup, email-confirmation redirect, sign-in, and persisted workspace flow have been manually verified with a test account. Broader automated tests, cross-browser coverage, and a two-account check of workspace isolation remain to be completed. Stockwise has a local SQLite-backed server mode, but it is not deployed as a hosted backend. Task Management, Ledgerly, QuickQuote, ClientBrief, ServiceSlot, HelpDesk Lite, and FeedbackPulse are browser-local prototypes. Each README explains the current scope. Headless browser smoke tests have been performed for ClientBrief, HelpDesk Lite, and FeedbackPulse. Full browser verification of every app remains pending.

## Future direction

Next steps for ShiftBoard Lite are to add repeatable automated tests, check workspace isolation with two separate accounts, and refine the workspace experience. Further projects can build on the same database, authentication, and authorization fundamentals.
