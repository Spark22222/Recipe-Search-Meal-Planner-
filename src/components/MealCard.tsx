import type { Meal } from "../types/meal";

interface MealCardProps {
    meal: Meal
    onSelect:() => void
}

const MealCard = ({ meal,onSelect }: MealCardProps) => {

    return (
        <div className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} width='200'></img>
            <div className="meal-card-content">
                <h3>{meal.strMeal}</h3>
                <p>{meal.strCategory}</p>
                <p>{meal.strArea}</p>
                <button onClick={onSelect}>SHOW MORE</button>                
            </div>
        </div>
    )
}

export default MealCard