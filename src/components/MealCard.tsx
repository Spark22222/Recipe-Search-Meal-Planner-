import type { Meal } from "../types/meal";

interface MealCardProps{
    meal:Meal
}

const MealCard = ({meal}:MealCardProps) => {

    return(
            <div>
              <img src={meal.strMealThumb} alt={meal.strMeal} width='200'></img>
              <h3>{meal.strMeal}</h3>
              <p>{meal.strCategory}</p>
              <p>{meal.strArea}</p>
            </div>
    )
}

export default MealCard