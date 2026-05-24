import type { IngredientItem } from "../utils/getIngredients"

interface ShoppingListModalProps {
    shoppingList: IngredientItem[]
    onClose: () => void
}

const ShoppingListModalProps = ({ shoppingList, onClose }: ShoppingListModalProps) => {

    const sortedList = [...shoppingList].sort((a, b) => a.ingredient.localeCompare(b.ingredient))


    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>Shopping List</h2>

                <button onClick={onClose}>Close</button>

                {
                    shoppingList.length === 0 && (
                        <p>Your shopping list is empty.</p>
                    )
                }

                {
                    shoppingList.length !== 0 && (
                        <ul className="shopping-list">
                            {sortedList.map((item, index) => (
                                <li key={index}>
                                    {item.measure} {item.ingredient}
                                </li>
                            ))}
                        </ul>
                    )
                }                
            </div>
        </div>

    )
}

export default ShoppingListModalProps