import type { Meal } from "../types/meal";
import getIngredients from "../utils/getIngredients";

interface RecipeModalProps {
    meal: Meal
    onClose: () => void
    onAddToShoppingList: () => void
}

const RecipeModal = ({ meal, onClose,onAddToShoppingList }: RecipeModalProps) => {
    const ingredients = getIngredients(meal)
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className="modal-actions">
                    <button onClick={onAddToShoppingList}>Add to Shopping List</button>
                    <button className="secondary-button" onClick={onClose}>Close</button>
                </div>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt={meal.strMeal} width="300" />

                <p>{meal.strCategory}</p>
                <p>{meal.strArea}</p>

                <h3>Ingredients</h3>
                <ul className="ingredient-list">
                    {ingredients.map((item, index) => (
                        <li key={index}>
                            {item.measure} {item.ingredient}
                        </li>
                    ))}
                </ul>

                <h3>Instructions</h3>
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    )
}

export default RecipeModal