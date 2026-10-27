# QuickQuote — Quotation Builder

QuickQuote is a small business quotation and estimate builder made with HTML, CSS, Bootstrap, and vanilla JavaScript. It is designed for freelancers, service businesses, and repair shops that need a simple way to prepare customer quotes.

## What it does

- Create a quotation number, date, validity period, and customer details.
- Add line items with description, quantity, and unit price.
- Calculate subtotal, discount, tax, and balance due.
- Save the draft in the current browser.
- Print the quote or save it as a PDF from the browser print dialog.
- Load a sample quote to see the layout quickly.

## Run locally

Open `index.html` directly in a browser, or start a local server from the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/quickquote/`.

## Structure

- `index.html` — Bootstrap-based layout and form controls.
- `styles.css` — small visual adjustments and print-friendly styles.
- `app.js` — quote state, item handling, totals, local save, and print actions.

## Notes

This is a learning project, not a billing or accounting system. It stores drafts in the current browser only and does not sync between devices. The first version is intentionally simple so the logic stays readable and honest to my current skill level.

## Possible next improvements

- Export the quote to a downloadable PDF or image.
- Add quote templates for different service types.
- Add a customer list and saved quote history.
- Connect the form to a backend when the project grows beyond a front-end prototype.
