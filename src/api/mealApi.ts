import type { Meal } from "../types/meal";

interface SearchMealResponse {
    meals: Meal[] | null
}

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'
const RANDOM_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

export async function searchMeals(keyword: string): Promise<Meal[]> {
    const responce = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(keyword)}`)

    if (!responce.ok) {
        throw new Error('Failed to fetch meals');
    }

    const data: SearchMealResponse = await responce.json()

    return data.meals ?? []
}

export const getRandomMeal = async ():Promise<Meal[]> =>{
    const responce = await fetch(RANDOM_URL)
    
    if (!responce.ok) {
        throw new Error('Failed to fetch suprise');
    }

    const data:SearchMealResponse = await responce.json()

    return data.meals ?? []
}