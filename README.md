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

🏠 HomeScreen

![image alt](https://github.com/Khutie14/chef-chistoffel-menu-app-final-poe/blob/main/HomeScreen.png?raw=true).


➕AddDishScreen

![image alt](https://github.com/Khutie14/chef-chistoffel-menu-app-final-poe/blob/main/AddDishScreen.png?raw=true).


🔍FilterScreen

![image alt](https://github.com/Khutie14/chef-chistoffel-menu-app-final-poe/blob/main/FilterScreen.png?raw=true).


| Change # | Feature / Improvement             | Description of Change                                                                 | Reason / Outcome                                                                 |
|----------|---------------------------------|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| 1        | App Refactored into Multiple Screens | Split the single App.js file into HomeScreen.js, AddDishScreen.js, and FilterScreen.js. | Makes the code more modular, maintainable, and readable.                        |
| 2        | Introduced React Navigation       | Added navigation between Home, AddDish, and Filter screens.                           | Enables smooth transitions and professional multi-screen flow.                 |
| 3        | Added Chef Logo Branding          | Integrated a custom chef_logo.png header on every screen.                             | Provides a polished, branded look.                                             |
| 4        | Added AddDishScreen (Chef Page)   | Moved dish-adding functionality from HomeScreen to a dedicated AddDishScreen. Includes validation, alerts, and delete functionality. | Meets the Part 3 requirement for a separate chef screen and improves user experience. |
| 5        | Added FilterScreen (Guest Page)   | Created a new screen that allows filtering by course (Starter/Main/Dessert).          | Meets the Part 3 requirement for guest functionality.                          |
| 6        | Added Delete Dish Feature         | Added the ability to delete dishes from the array with confirmation alerts.           | Gives the chef full control of menu management.                                |
| 7        | Added Average Price per Course Calculation | HomeScreen now calculates and displays the average dish price per course.             | Adds meaningful business data and meets POE requirement.                       |
| 8        | Enhanced UI Design                | Redesigned all screens using red (#B91C1C) and dark blue (#1E3A8A). Buttons and text are consistent and clean. | Improves readability and user experience.                                      |
| 9        | Improved State Management         | Centralized menu state in App.js and passed via props to other screens.               | Ensures all screens display the latest menu data.                               |


## 🧩 Step-by-Step Summary of Development
Started from Part 2 single-file app.
Refactored code into 3 new screens for modularity.
Implemented navigation using React Navigation Stack.
Added chef logo and header for branding.
Developed AddDishScreen to add and delete menu items.
Developed FilterScreen to filter menu by course.
Updated HomeScreen to display full menu and average price per course.
Styled app with red & dark blue theme for professional look.
Tested app on web and mobile using Expo Snack.
Finalized documentation and changelog for submission.


## 🧠 Technologies Used

React Native (Expo)
React Navigation (Native Stack)
JavaScript (ES6)
React Hooks (useState)
Expo Snack Emulator

## 📚 References 

DigitalOcean. (2024) How to Build Multi-Screen React Native Apps Using React Navigation. Available at: https://www.digitalocean.com/community/tutorials (Accessed: 12 November 2025).
Expo. (2025) Expo Documentation. Available at: https://docs.expo.dev (Accessed: 12 November 2025).
FreeCodeCamp. (2024) React Native Project Examples and Tutorials. Available at: https://www.freecodecamp.org/news/tag/react-native/ (Accessed: 12 November 2025).
GeeksforGeeks. (2025) State Management in React Native. Available at: https://www.geeksforgeeks.org/state-management-in-react-native/ (Accessed: 12 November 2025).
JavaScript.info. (2025) JavaScript Fundamentals. Available at: https://javascript.info (Accessed: 12 November 2025).
Meta. (2025) React Native Documentation. Available at: https://reactnative.dev/docs/getting-started (Accessed: 12 November 2025).
Mozilla Developer Network (MDN). (2025) React Hooks – useState. Available at: https://developer.mozilla.org/ (Accessed: 12 November 2025).
OpenAI. (2025) ChatGPT – Project Development Assistance for React Native Applications. Available at: https://chat.openai.com (Accessed: 12 November 2025).
React Navigation. (2025) React Navigation: Native Stack Navigator Guide. Available at: https://reactnavigation.org/docs/native-stack-navigator (Accessed: 12 November 2025).
W3Schools. (2025) React Native Styling Guide. Available at: https://www.w3schools.com/react/react_native_styling.asp (Accessed: 12 November 2025).

