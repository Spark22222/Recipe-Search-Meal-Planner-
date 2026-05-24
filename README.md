# Recipe Search & Meal Planner

A React + TypeScript web application for searching recipes, viewing recipe details, generating random meal ideas, and building a persistent shopping list.

## Overview

Recipe Search & Meal Planner allows users to search for meals using TheMealDB API, view detailed recipe information, add ingredients to a shopping list, and save the shopping list locally in the browser.

The project was built as a small front-end application with a branch-based GitHub workflow, where each feature was developed in a separate branch and merged through pull requests.

## Features

- Search recipes by keyword
- Display recipe results as cards
- View recipe details in a modal
- Display recipe image, category, area, ingredients, measures, and instructions
- Add recipe ingredients to a shopping list
- Store shopping list data in localStorage
- View shopping list in a modal
- Sort shopping list ingredients alphabetically
- Merge duplicate shopping list ingredients
- Generate a random recipe using the "Surprise Me" feature
- Responsive layout for desktop and mobile screens

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- TheMealDB API
- localStorage
- Git & GitHub

## API

This project uses TheMealDB public API.

### Search meals

```text
https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
```

### Random meal

```text
https://www.themealdb.com/api/json/v1/1/random.php
```

## Project Structure

```text
src/
  api/
    mealApi.ts

  components/
    MealCard.tsx
    RecipeModal.tsx
    SearchBar.tsx
    ShoppingListModal.tsx

  types/
    meal.ts

  utils/
    getIngredients.ts
    mergeShoppingList.ts
    shoppingListStorage.ts

  App.css
  App.tsx
  main.tsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

### 2. Navigate into the project folder

```bash
cd your-repository-name
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The app will run locally at:

```text
http://localhost:5173/
```

### 5. Build the project

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

## Main Functionality

### Recipe Search

Users can enter a keyword such as `chicken`, `beef`, or `pasta` to search for recipes. Matching results are displayed as recipe cards.

### Recipe Details

Users can click a recipe card to open a detail modal. The modal displays the recipe image, title, category, area, ingredients, measures, and cooking instructions.

### Shopping List

Users can add ingredients from a recipe to their shopping list. The shopping list is saved in localStorage, so the data remains after refreshing the page.

### Shopping List View

Users can open the shopping list modal to view all saved ingredients. Ingredients are displayed in alphabetical order.

### Duplicate Ingredient Merge

When the same ingredient is added multiple times, duplicate entries are merged to keep the shopping list cleaner.

### Surprise Me

Users can click the "Surprise Me" button to fetch a random recipe and open it directly in the recipe detail modal.

## Development Workflow

This project follows a branch-based GitHub workflow.

Each feature was developed in a separate branch, pushed to GitHub, reviewed through a pull request, and then merged into `main`.

Example branches:

```text
feature/recipe-search
feature/recipe-modal
feature/shopping-list-storage
feature/shopping-list-view
feature/shopping-list-merge
feature/random-recipe
style/ui-polish-readme
```

## Pull Request Workflow

For each feature:

1. Create a new branch from `main`
2. Implement the feature
3. Test locally
4. Push the branch to GitHub
5. Create a pull request
6. Review the code changes
7. Merge the pull request into `main`

## Testing Checklist

The following behaviours were tested manually:

- Search recipes by keyword
- Display loading, error, and empty states
- Open and close recipe detail modal
- Display recipe ingredients and instructions
- Add recipe ingredients to shopping list
- Save shopping list data in localStorage
- View shopping list after page refresh
- Sort shopping list ingredients alphabetically
- Merge duplicate ingredients
- Fetch and display a random recipe
- Build the project successfully with `npm run build`

## Future Improvements

- Add delete support for individual shopping list items
- Add a clear shopping list button
- Improve ingredient quantity merging
- Add favourite recipes
- Add recipe filters by category or area
- Improve accessibility and keyboard navigation
- Add unit tests for utility functions

## Author

Built as a React TypeScript practice project.