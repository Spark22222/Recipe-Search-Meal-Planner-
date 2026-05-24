import type { IngredientItem } from './getIngredients'

export function mergeShoppingList(items: IngredientItem[]): IngredientItem[] {
  const mergedMap = new Map<string, IngredientItem>()

  for (const item of items) {
    const key = item.ingredient.trim().toLowerCase()

    if (!mergedMap.has(key)) {
      mergedMap.set(key, {
        ingredient: item.ingredient,
        measure: item.measure,
      })
      continue
    }

    const existingItem = mergedMap.get(key)!

    if (
      item.measure !== '' &&
      !existingItem.measure.includes(item.measure)
    ) {
      existingItem.measure = existingItem.measure
        ? `${existingItem.measure} + ${item.measure}`
        : item.measure
    }
  }

  return Array.from(mergedMap.values())
}