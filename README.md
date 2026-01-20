# GadgetMart

## Short Project Description

GadgetMart is a simple e-commerce style web application built using **Next.js (App Router)** and **Tailwind CSS**.  
It displays a list of gadgets and electronics fetched from a local JSON file (`public/products.json`). Users can view product details on a separate page.

---

## Setup & Installation Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd gadgetmart
npm install
npm run dev
Open the app
Visit http://localhost:3000/items
 in your browser

Folder Structure
 app/
 ├─ items/
 │   ├─ page.jsx           ← Product list page
 │   └─ [id]/
 │       └─ page.jsx       ← Product details page
public/
 ├─ products.json          ← Product data
 └─ images/
     ├─ iphone.jpg
     ├─ macbook.jpg
     ├─ samsung.jpg
     └─ ...other images
```

Route Summary
Route Description
/gadget Displays all products in a grid layout
/gadget/[id] Displays detailed page for a specific product
/ Optional landing/home page

List of Implemented Features

Product list page with responsive grid layout

Dynamic product details page

Responsive design using Tailwind CSS

Optimized product images using Next.js <Image> component

Empty state handling if no products exist

Professional card hover effects with shadow and transition

Fetching product data from local JSON file (public/products.json)

Brief Explanation of Features

Product List Page (/items)

Shows all products in a responsive grid.

Each card includes: Image, Name, Description, Price, and a "View" button.

Hover effects highlight the card.

Dynamic Product Details Page (/items/[id])

Clicking "View" opens a dynamic page for the selected product.

Displays: Image, Name, Description, Price, and "Add to Cart" button.

Responsive Design

Fully responsive for mobile, tablet, and desktop screens using Tailwind CSS.

Image Optimization

Images served using Next.js <Image> component for faster loading and better performance.

Empty State Handling

If no products exist in products.json, a friendly message is displayed.

Professional UI Enhancements

Cards have rounded corners, shadows, and smooth hover transitions for a modern look.
