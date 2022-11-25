import express from "express";
import axios, { AxiosResponse } from "axios";
import CocktailDbResponse from "./types/CocktailDbResponse";
import Cocktail from "./types/Cocktail";
const app = express();
const port = 4242;

app.get("/", (req: any, res:any) => {
    res.send("Hello World!");
});

app.get("/random", async function (req: any, res: any) {
    axios.get("https://thecocktaildb.com/api/json/v1/1/random.php", {
        headers: {
            "Content-Type": "application/json",
            "accept-encoding": null,
        },
    })
    .then((resp: AxiosResponse) => {
        const data = resp.data.drinks[0] as CocktailDbResponse;
       
        const cocktail: Cocktail = {
            id: data.idDrink,
            name: data.strDrink,
            ingredients: [],
            drinkAlternate: data.strDrinkAlternate,
            tags: data.strTags,
            video: data.strVideo,
            category: data.strCategory,
            IBA: data.strIBA,
            alcoholic: true,
            glass: data.strGlass,
            instructions: {
                en: data.strInstructions,
            },
            imageSource: data.strImageSource,
            imageAttribution: data.strImageAttribution,
            creativeCommonsConfirmed: false,
            dateModified: data.dateModified
        }

        const MAX_INGREDIENTS = 15;
        for (let i = 0; i < MAX_INGREDIENTS ; i++) {
            const idx = String(i+1);
            const ingredientKey = `strIngredient${idx}` as keyof CocktailDbResponse;
            const measureKey = `strMeasure${idx}` as keyof CocktailDbResponse;

            if (data.hasOwnProperty(ingredientKey) && data[ingredientKey] !== null) {
                cocktail.ingredients.push({
                    name: data[ingredientKey] as string,
                    measure: data[measureKey] as string
                });
            }
        }

        cocktail.alcoholic = data.strAlcoholic == 'Alcoholic'
        cocktail.creativeCommonsConfirmed = data.strCreativeCommonsConfirmed == 'Yes'
        res.send(cocktail);
    })
    .catch(function (error: Error) {
        console.log(error.message);
        res.send(error);
    });
});

app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
});
