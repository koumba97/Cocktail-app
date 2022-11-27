import { VercelRequest, VercelResponse } from '@vercel/node';
import axios, { AxiosResponse } from "axios";
import {CocktailArrayDbResponse} from "../types/CocktailDbResponse";
import {mapCocktailResponse} from "../functions/mapCocktailResponse";

export default (req:VercelRequest, res: VercelResponse) => {
    axios.get("https://thecocktaildb.com/api/json/v1/1/random.php", {
        headers: {
            "Content-Type": "application/json",
            "accept-encoding": "application/json",
        },
    })
    .then((resp: AxiosResponse) => {
        const data = resp.data as CocktailArrayDbResponse;

        const cocktail = mapCocktailResponse(data);
        res.json(cocktail);
    })
    .catch(function (error: Error) {
        console.log(error.message);
        res.send(error);
    });
};