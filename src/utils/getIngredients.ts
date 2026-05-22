import type { Meal } from "../types/meal"

export interface IngredientItem {
    ingredient: string
    measure: string
}

const getIngredients = (meal: Meal): IngredientItem[] => {
    const ingredients: IngredientItem[] = []

    for (let index = 1; index <= 20; index++) {
        const ingredientKey = `strIngredient${index}` as keyof Meal
        const measureKey = `strMeasure${index}` as keyof Meal

        const ingredient = String(meal[ingredientKey] ?? '').trim()
        const measure = String(meal[measureKey] ?? '').trim()
        if (ingredient !== '') {
            ingredients.push({
                ingredient: ingredient,
                measure: measure
            })
        }
    }

    return ingredients
}

export default getIngredients