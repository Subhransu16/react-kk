# React useMemo Assignment

This project includes all three tasks in one small React app. It uses no CSS files or custom styling.

## Requirements
- Node.js (LTS recommended)
- npm

## Run the app
1. Extract the ZIP file.
2. Open a terminal in the extracted `usememo_assignment` folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Verify useMemo
Open the browser developer console.

- **Task 1:** Changing the number runs `calculateDouble()`. Switching the theme does not rerun it.
- **Task 2:** Changing the search text runs `filterProducts()`. Clicking Increment does not rerun filtering.
- **Task 3:** Changing a quantity recalculates the total. Switching the theme reuses the cached total.

Note: React Strict Mode may call render-related functions more than once in development to help detect unexpected side effects. The console may therefore show extra calls during development.
