# GadgetHeaven

Welcome to **GadgetHeaven** — your go-to destination for the latest and greatest gadgets! This is a responsive e-commerce platform built with React that allows users to browse products, manage their cart and wishlist, and complete purchases.

## Live Website Link
- [Live Demo](https://gadget-heaven-ii-shimul.netlify.app/)

## Requirement Document
- [Requirement Document](https://drive.google.com/file/d/1_92x3nq0A5k4kKESLJb-EoiRqU7UlfNJ/view)

## React Fundamentals Used
- **React Router** for managing routes and navigation between pages.
- **React Context API** for managing global state across different components (Cart, Wishlist).
- **React Hooks**:
  - `useState` for managing local state in components.
  - `useEffect` for side-effects like fetching data and updating the document title.
  - `useContext` for accessing shared state (Cart/Wishlist).
  - `useLocation` for dynamically changing the background color based on the route.
- **React-Helmet** for managing dynamic document titles and favicons.
  
## Data Management
- **Context API**: Used to manage the global state for Cart and Wishlist. This allows components to access and update the state without prop drilling.
- **LocalStorage**: Used for persisting Cart and Wishlist data across page reloads, ensuring the state is maintained even after refreshing the page.

## 5 Features of GadgetHeaven
1. **Product Filtering by Category**: Products can be filtered by categories such as Computers, Phones, Smart Watches, etc.
2. **Cart & Wishlist Management**: Users can add items to their cart or wishlist and view/manage them easily.
3. **Price Sorting in Cart**: Users can sort cart items by price in descending order, with the total price displayed.
4. **Toast Notifications**: Inform users when items are added to the cart or wishlist with distinct messages for each action.
5. **Statistics Page**: Display a price vs. product name composed chart, and scatter data based on ratings.

---
