import { Ingredient } from "./Ingredients";

export default interface Cocktail {
    id: string;
    name: string;
    ingredients: Ingredient[];
    drinkAlternate: string | null;
    tags: string;
    video: string | null;
    category: string;
    IBA: string | null;
    alcoholic: boolean;
    glass: string | null;
    instructions: {
        en: string,
        es?: string,
        de?: string,
        fr?: string,
        it?: string,
    };
    thumbnail: string;
    imageSource: string;
    imageAttribution: string;
    creativeCommonsConfirmed: boolean;
    dateModified: Date | null;
}