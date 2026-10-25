# Stockwise — Small-Shop Inventory Manager

Stockwise is a standalone browser app for a small shop to keep a simple product catalog, monitor quantities, identify low stock, and export an inventory snapshot. It is built with HTML, CSS, and vanilla JavaScript to keep the data flow visible and approachable.

## Features

- Create, edit, and delete products.
- Store a product name, optional SKU, category, unit cost in Myanmar kyat (MMK), quantity, and low-stock threshold.
- Adjust quantity by one without reopening the product form.
- See product count, units in stock, total stock value, and products needing attention.
- Search by product name, SKU, or category.
- Filter by all, low-stock, and out-of-stock products; filter by category.
- Sort by name, lowest stock, highest stock value, or recently added.
- Export the catalog and stock values to CSV.
- Save data in this browser using `localStorage`.
- Use the app on narrow screens and with keyboard navigation.

## Run locally

No packages or build tools are required. Open `index.html` directly in a browser, or from the repository root run:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000/inventory-manager/](http://localhost:8000/inventory-manager/).

## Project structure

- `index.html` — semantic structure, product form, filters, and summary.
- `styles.css` — responsive layout, stock-status styles, and focus states.
- `app.js` — product state, persistence, validation, stock adjustment, search, sorting, and CSV export.

## Design decisions

- **One source of truth:** inventory totals and filtered rows are derived from the same product array so separate counters do not drift out of sync.
- **SKU uniqueness:** when a code is supplied, duplicate codes are rejected within this local catalog.
- **Threshold-driven status:** a quantity of zero is out of stock; a positive quantity at or below the threshold is low stock.
- **Safe text rendering:** product names and codes are added with `textContent`, not interpreted as HTML.
- **CSV quoting:** every exported value is quoted and embedded double quotes are escaped, so commas or punctuation in product names do not break columns.
- **Explicit local storage warning:** the interface does not claim a change was saved when the browser refuses storage writes.

## Current limitations

This is a portfolio learning demo, not a production inventory system. It has no user accounts, server, shared database, purchase orders, sales integration, audit trail, or multi-device synchronization. Data lives in the current browser profile. Export a CSV backup if you need a copy outside that browser. The displayed stock value is a simple estimate based on the unit cost entered; it does not account for taxes, currency conversion, or changing purchase prices.

## Next direction

A larger version could add stock movement history, supplier records, import from CSV, user permissions, and a backend database with per-business access control.
