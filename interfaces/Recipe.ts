import { IngredientInterface } from "./Ingredients";

export interface RecipeInterface {
    id: number,
    name: String,
    method: String[],
    time: number,
    ingredients: IngredientInterface[]
}
