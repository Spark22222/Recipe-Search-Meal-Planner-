import type { IngredientItem } from '../utils/getIngredients'

interface ShoppingListModalProps {
  shoppingList: IngredientItem[]
  onClose: () => void
}

const ShoppingListModal = ({ shoppingList, onClose }: ShoppingListModalProps) => {
  const sortedList = [...shoppingList].sort((a, b) =>
    a.ingredient.localeCompare(b.ingredient)
  )

  return (
    <div className="modal-backdrop">
      <div className="modal-content shopping-modal">
        <div className="modal-title-row">
          <h2>Shopping List</h2>
          <button className="secondary-button" onClick={onClose}>
            Close
          </button>
        </div>

        {shoppingList.length === 0 && (
          <p className="message">Your shopping list is empty.</p>
        )}

        {shoppingList.length > 0 && (
          <ul className="shopping-list">
            {sortedList.map((item, index) => (
              <li key={index}>
                <span>{item.ingredient}</span>
                <span>{item.measure}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ShoppingListModal