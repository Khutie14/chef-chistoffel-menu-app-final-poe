# 🍽️ Chef Christoffel Menu App — Final PoE (Polishing and Last Features)

## 📘 Overview
This project is the final part of the Portfolio of Evidence (PoE) for the TypeScript and React Native module.  
It demonstrates the use of **loops**, **functions**, **global variables**, and **modular code structure** through a restaurant menu management application.

The app allows a chef to manage menu items, calculate average prices by course, and lets guests filter items by course.  
All code has been refactored into multiple files to improve clarity and maintainability.

---

## 🎯 Learning Outcomes Achieved
- ✅ Used `for`, `while`, and `for...in` loops in TypeScript to solve real programming problems.
- ✅ Defined and implemented multiple **functions**.
- ✅ Used **global variables** (via React Context) to manage state across screens.
- ✅ Organized and refactored code into **multiple files** and **modules**.
- ✅ Implemented new app features using functional and modular TypeScript logic.

---

## ⚙️ Features Implemented

### 🏠 Home Screen
- Displays a **complete menu list** with item names, courses, and prices.
- Shows the **average price per course** (Starters, Mains, Desserts, Drinks, etc.).
- Provides buttons to navigate to:
  - “Add / Remove Items” screen.
  - “Filter by Course” screen.

### ➕ Add / Remove Menu Screen
- Allows the **chef to add new menu items** by specifying:
  - Name
  - Course type
  - Price
  - Optional description
- Saves items to a **global array** using React Context.
- Allows **removing existing items** via a delete button.

### 🔍 Filter Screen
- Lets guests **filter menu items by course**.
- Supports showing only “Starters,” “Mains,” or “Desserts,” etc.
- Includes “All” view to show the full menu.

### 🧠 Data Handling
- All menu data stored in a **React Context** (`MenuContext.tsx`).
- Uses **arrays** to store items, with add/remove functionality.
- The **average price per course** is calculated dynamically using a loop in a utility function.

---

## 🧩 Refactoring Summary
- Moved global state to `MenuContext.tsx` for cleaner structure.
- Created a `utils/price.ts` file to calculate averages.
- Created separate files for:
  - `HomeScreen.tsx`
  - `AddMenuScreen.tsx`
  - `FilterScreen.tsx`
- Improved code reusability by using **functions and loops**.
- Modularized code following best practices.
---

## 🧮 Code Architecture

/App.js
/screens
   ├── HomeScreen.js
   ├── AddDishScreen.js
   └── FilterScreen.js
/assets
   └── chef_logo.png

   🔹 App.js
Manages global state (menu array) and navigation across screens.
Passes addDish and removeDish functions to the relevant components.

🔹 HomeScreen.js
Displays:
Complete list of dishes.
Average price per course.
Navigation buttons to Add/Filter screens.

🔹 AddDishScreen.js
Allows chefs to:
Add dishes to the menu.
Delete existing dishes.
Input validation and success alerts.

🔹 FilterScreen.js
Allows guests to:
Filter menu items by course (Starters, Main, Dessert).

## 🖼️ Screenshots

🏠 Home Screen

