import CocktailDbResponse, {CocktailArrayDbResponse} from "../types/CocktailDbResponse";
import Cocktail from "../types/Cocktail";

export function mapCocktailResponse(dataArray: CocktailArrayDbResponse): Cocktail{
    const data = dataArray.drinks[0] as CocktailDbResponse;

    let cocktail = new Cocktail();

    cocktail.id = data.idDrink;
    cocktail.name = data.strDrink;
    cocktail.ingredients = [];
    cocktail.drinkAlternate = data.strDrinkAlternate;
    cocktail.tags = data.strTags;
    cocktail.video = data.strVideo;
    cocktail.category = data.strCategory;
    cocktail.IBA = data.strIBA;
    cocktail.alcoholic = true;
    cocktail.glass = data.strGlass;
    cocktail.instructions = {
        en: data.strInstructions
    };
    cocktail.thumbnail = data.strDrinkThumb;
    cocktail.imageSource = data.strImageSource;
    cocktail.imageAttribution = data.strImageAttribution;
    cocktail.creativeCommonsConfirmed = false;
    cocktail.dateModified = data.dateModified;


    const MAX_INGREDIENTS = 15;
    for (let i = 0; i < MAX_INGREDIENTS ; i++) {
        const idx = String(i+1);
        const ingredientKey = `strIngredient${idx}` as keyof CocktailDbResponse;
        const measureKey = `strMeasure${idx}` as keyof CocktailDbResponse;

        if (data[ingredientKey] !== null) {
            cocktail.ingredients.push({
                name: data[ingredientKey] as string,
                measure: data[measureKey] as string
            });
        }
    }

    cocktail.alcoholic = data.strAlcoholic === 'Alcoholic'
    cocktail.creativeCommonsConfirmed = data.strCreativeCommonsConfirmed === 'Yes'


    return cocktail;
}