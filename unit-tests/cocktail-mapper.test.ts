import {CocktailResponseExample} from "./data/CocktailResponseExample";
import Cocktail from "../types/Cocktail";
import {mapCocktailResponse} from "../functions/mapCocktailResponse";

test('Map cocktail response to get a more friendly structure', () => {
    const friendlyCocktailResponse = mapCocktailResponse(CocktailResponseExample);

    let isInstanceOfCocktail = false;
    if(friendlyCocktailResponse instanceof Cocktail){
        isInstanceOfCocktail = true;
    }

    expect(isInstanceOfCocktail).toBe(true);
});

//
// describe('Cocktail data structure'){
//     it('should convert Cocktail type', function () {
//
//         formatCocktailStructure()
//     });
// }