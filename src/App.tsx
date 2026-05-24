import { useState } from 'react'
import type { Meal } from './types/meal'
import { searchMeals } from './api/mealApi'
import './App.css'
import SearchBar from './components/SearchBar'
import MealCard from './components/MealCard'
import RecipeModal from './components/RecipeModal'
import getIngredients from './utils/getIngredients'
import type { IngredientItem } from './utils/getIngredients'
import { loadShoppingList, saveShoppingList } from './utils/shoppingListStorage'
import ShoppingListModalProps from './components/ShoppingListModal'

function App() {

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [meals, setMeals] = useState<Meal[]>([])
  const [error, setError] = useState<string>('')
  const [hasSearched, setHasSearched] = useState<boolean>(false)

  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null)

  const [shoppingList, setShoppingList] = useState<IngredientItem[]>([])

  const [isShoppingListOpen, setIsShoppingListOpen] = useState<boolean>(false)

  const handleSearch = async (): Promise<void> => {
    if (searchTerm.trim() === '') {
      return
    }

    setLoading(true)
    setError('')
    setHasSearched(true)

    try {
      const result: Meal[] = await searchMeals(searchTerm.trim())
      setMeals(result)
    } catch (error) {
      setError(`${error}`)
      setMeals([])
    } finally {
      setLoading(false)
    }

  }

  const handleAddToShoppingList = (meal: Meal) => {
    const currentList = loadShoppingList()
    const mealList = getIngredients(meal)
    const newList = [...currentList, ...mealList]
    setShoppingList(newList)
    saveShoppingList(newList)
    alert("Shopping list has been updated!")
  }



  return (
    <main className='app'>

      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearch={handleSearch}
      />

      <button className="shopping-list-button" onClick={() => setIsShoppingListOpen(true)}>view my shopping list</button>

      {
        isShoppingListOpen && (
          <ShoppingListModalProps
            shoppingList={shoppingList}
            onClose={() => setIsShoppingListOpen(false)}
          />
        )
      }

      {
        loading && <p>Loading...</p>
      }

      {
        !loading && error === '' && hasSearched && meals.length === 0 && (
          <p>No meals found!</p>
        )
      }

      <div className="meal-grid">
        {
          meals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              onSelect={() => setSelectedMeal(meal)}
            />
          ))
        }
      </div>

      {
        selectedMeal !== null && (
          <RecipeModal
            meal={selectedMeal}
            onClose={() => setSelectedMeal(null)}
            onAddToShoppingList={() => handleAddToShoppingList(selectedMeal)}
          />
        )
      }
    </main>
  )
}

export default App
