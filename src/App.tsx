import { useState } from 'react'
import type { Meal } from './types/meal'
import { searchMeals } from './api/mealApi'
import './App.css'
import SearchBar from './components/SearchBar'
import MealCard from './components/MealCard'
import RecipeModal from './components/RecipeModal'

function App() {

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [meals, setMeals] = useState<Meal[]>([])
  const [error, setError] = useState<string>('')
  const [hasSearched, setHasSearched] = useState<boolean>(false)

  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null)

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

  return (
    <>

      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearch={handleSearch}
      />

      {
        loading && <p>Loading...</p>
      }

      {
        !loading && error === '' && hasSearched && meals.length === 0 && (
          <p>No meals found!</p>
        )
      }

      <div>
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
            onClose={() => setSelectedMeal(null)} />
        )
      }
    </>
  )
}

export default App
