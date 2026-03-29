# 🛒 E-Cart — React Shopping App

A simple e-commerce web app built with React, Bootstrap, and React Router. Browse products, filter by category or price, search, and manage a shopping cart.

---

## Features

- Browse products (Mobiles, Laptops, Tablets)
- Filter by category and price
- Search products by name
- Add items to cart with toast notifications
- View product detail page with related products
- Clear cart functionality

---

## Tech Stack

- React 18
- React Router DOM v6
- Bootstrap 5
- react-toastify
- react-icons
- Vite + SWC

---

## Getting Started

```bash
git clone <your-repo-url>
cd e-cart
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
└── components/
    ├── Data.jsx          # Product data
    ├── Navbar.jsx        # Navigation + filters + search
    ├── Product.jsx       # Product grid
    ├── ProductDetail.jsx # Single product + related items
    ├── SearchItem.jsx    # Search results
    └── Cart.jsx          # Shopping cart
```

---

## Routes

| Path | Page |
|---|---|
| `/` | All products |
| `/product/:id` | Product detail |
| `/search/:term` | Search results |
| `/cart` | Shopping cart |

---

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## License

MIT License — free to use and modify.