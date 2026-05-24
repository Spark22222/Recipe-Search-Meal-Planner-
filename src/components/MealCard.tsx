import type { Meal } from '../types/meal'

interface MealCardProps {
  meal: Meal
  onSelect: () => void
}

const MealCard = ({ meal, onSelect }: MealCardProps) => {
  return (
    <article className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <div className="meal-card-content">
        <h3>{meal.strMeal}</h3>
        <p>{meal.strCategory}</p>
        <p>{meal.strArea}</p>

        <button onClick={onSelect}>Show More</button>
      </div>
    </article>
  )
}

export default MealCard