import type { Meal } from "../types/meal";

interface SearchMealResponse {
    meals: Meal[] | null
}

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export async function searchMeals(keyword: string): Promise<Meal[]> {
    const responce = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(keyword)}`)

    if (!responce.ok) {
        throw new Error('Failed to fetch meals');
    }

    const data: SearchMealResponse = await responce.json()

    return data.meals ?? []
}