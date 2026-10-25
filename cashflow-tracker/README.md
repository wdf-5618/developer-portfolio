# Ledgerly — Cash Flow Tracker

Ledgerly is a small front-end demo for recording income and expenses and understanding monthly cash flow. It uses HTML, CSS, and vanilla JavaScript; no package installation or build process is required.

## Features

- Record income and expense transactions with description, amount in MMK, date, category, and optional notes.
- Edit and delete existing entries.
- View monthly income, expenses, net cash flow, and transaction count.
- Change the reporting month.
- Search by description, category, notes, date, or type.
- Filter by all transactions, income, or expenses.
- Sort by date or amount.
- Compare income and expenses visually.
- Export the selected month's transactions as CSV.
- Save entries in this browser using `localStorage`.
- Start with a small fictional sample dataset so the overview is visible on first launch.

## Run locally

Open `index.html` directly, or start a small local server from the repository root:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000/cashflow-tracker/](http://localhost:8000/cashflow-tracker/).

## Project structure

- `index.html` — form, monthly summary, filters, and transaction list.
- `styles.css` — responsive interface, income/expense colors, and focus styles.
- `app.js` — validation, CRUD, local persistence, monthly aggregation, search/sort/filter, and CSV export.

## Implementation choices

- **Store amounts as numbers:** income and expense entries are stored as positive amounts; the selected type determines whether the entry is added to income or expenses.
- **Derive totals from transactions:** monthly numbers are recalculated from the selected month rather than separately stored, so the summary follows the source records.
- **Keep date-only values:** transaction dates use `YYYY-MM-DD` to avoid storing a time-of-day that could shift the displayed date.
- **Quote CSV cells:** embedded quotes are escaped and each cell is quoted, reducing issues when descriptions or notes contain commas.
- **Use text insertion for records:** user-entered descriptions and notes are rendered using `textContent`, not treated as HTML.
- **Be clear about saving:** if browser storage rejects a write, the interface does not claim that the entry was saved successfully.

## Limitations

Ledgerly is a learning prototype and not a financial service. It is not connected to a bank, does not sync between devices, and does not include user accounts, a backend, multi-user access, recurring transactions, invoices, or financial advice. Entries remain in the current browser profile; clearing site data may remove them. Export a CSV copy if you need a separate backup.

## Possible next improvements

- Automated tests and a browser verification pass.
- Recurring transactions, custom categories, and more detailed reports.
- Import from CSV.
- A backend database with authentication and appropriate user-level access controls.
