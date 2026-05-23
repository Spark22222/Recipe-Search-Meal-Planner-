import type { IngredientItem } from "./getIngredients"
const SHOPPING_LIST_KEY = 'recipe-shopping-list'

export const loadShoppingList = ():IngredientItem[] => {
    const storedList = localStorage.getItem(SHOPPING_LIST_KEY)
    const currentList = storedList? JSON.parse(storedList) :[]
    return currentList
}

export const saveShoppingList = (list:IngredientItem[]) =>{
    localStorage.setItem(SHOPPING_LIST_KEY,JSON.stringify(list))
}