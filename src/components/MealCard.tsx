import type { Meal } from "../types/meal";

interface MealCardProps {
    meal: Meal
    onSelect:() => void
}

const MealCard = ({ meal,onSelect }: MealCardProps) => {

    return (
        <div>
            <img src={meal.strMealThumb} alt={meal.strMeal} width='200'></img>
            <h3>{meal.strMeal}</h3>
            <p>{meal.strCategory}</p>
            <p>{meal.strArea}</p>
            <button onClick={onSelect}>SHOW MORE</button>
        </div>
    )
}

export default MealCard