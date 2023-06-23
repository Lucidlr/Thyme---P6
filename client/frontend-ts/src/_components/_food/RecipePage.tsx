import React, { useState } from "react";
import './RecipePage.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { isNonNullChain } from "typescript";
import { useLocation } from "react-router-dom";
import { RecipeInterface } from "../../../../../interfaces/Recipe";
import { IngredientInterface } from "../../../../../interfaces/Ingredients";
import lasagna from '/temp/DEMO/client/frontend-ts/src/images/1Lasagna.jpg';
import indianFriedRice from '/temp/DEMO/client/frontend-ts/src/images/2IndianFriedRice.jpg';
import butterChickenCurry from '/temp/DEMO/client/frontend-ts/src/images/3ButterChickenCurry.jpg';
import potatoLeekSoup from '/temp/DEMO/client/frontend-ts/src/images/4PotatoLeekSoup.jpg';
import bolognese from '/temp/DEMO/client/frontend-ts/src/images/5Bolognese.jpg';
import roastedTomatoSoup from '/temp/DEMO/client/frontend-ts/src/images/6RoastedTomatoSoup.jpg';
import moerbradgryde from '/temp/DEMO/client/frontend-ts/src/images/7Moerbradgryde.jpg';
import chickenQuesadilla from '/temp/DEMO/client/frontend-ts/src/images/8ChickenQuesadilla.jpg';
import baguettePizza from '/temp/DEMO/client/frontend-ts/src/images/9BaguettePizza.jpg';
import stuffedBellPeppers from '/temp/DEMO/client/frontend-ts/src/images/10StuffedBellPeppers.jpg';
import tacoBowl from '/temp/DEMO/client/frontend-ts/src/images/11TacoBowl.jpg';
import harusame from '/temp/DEMO/client/frontend-ts/src/images/12Harusame.jpg';
import lentilWalnut from '/temp/DEMO/client/frontend-ts/src/images/13LentilWalnutPastaBolognese.jpg';
import pumpkinCurry from '/temp/DEMO/client/frontend-ts/src/images/14PumpkinCurry.jpg';
import stuffedEggplantParm from '/temp/DEMO/client/frontend-ts/src/images/15StuffedEggplantParm.jpg';
import creamyBroccoliPasta from '/temp/DEMO/client/frontend-ts/src/images/16CreamyBroccoliPasta.jpg';
import chanaMasala from '/temp/DEMO/client/frontend-ts/src/images/17ChanaMasala.jpg';
import bollerKarry from '/temp/DEMO/client/frontend-ts/src/images/18BollerKarry.jpg';
import plokkfiskur from '/temp/DEMO/client/frontend-ts/src/images/19Plokkfiskur.jpg';
import garlicSalmon from '/temp/DEMO/client/frontend-ts/src/images/20GarlicButterBakedSalmon.jpg';
import beefStroganoff from '/temp/DEMO/client/frontend-ts/src/images/21BeefStroganoff.jpg';
import goulash from '/temp/DEMO/client/frontend-ts/src/images/22Goulash.jpg';
import porkFriedRice from '/temp/DEMO/client/frontend-ts/src/images/23PorkFriedRice.jpg';
import chiliConCarne from '/temp/DEMO/client/frontend-ts/src/images/24ChiliConCarne.jpg';
import burningLove from '/temp/DEMO/client/frontend-ts/src/images/25BraendendeKaerlighed.png';
import CardMedia from '@mui/material/CardMedia';
import axios from "axios";

export const RecipePage = () => {

    const {state} = useLocation();
    let {recipe} = state;
    recipe = recipe as RecipeInterface;
    const ingredients = recipe.ingredients as IngredientInterface[];
    const methods = recipe.method as String[];
    const [value, setValue] = useState<number>(0);

    function recipePicture(){
    switch (recipe.id) {
      case 1:
        return (lasagna)

        case 2: return(indianFriedRice)

        case 3: return(butterChickenCurry)

        case 4: return(potatoLeekSoup)

        case 5: return(bolognese)

        case 6: return(roastedTomatoSoup)

        case 7: return(moerbradgryde)

        case 8: return(chickenQuesadilla)

        case 9: return(baguettePizza)

        case 10: return(stuffedBellPeppers)

        case 11: return(tacoBowl)

        case 12: return(harusame)

        case 13: return(lentilWalnut)

        case 14: return(pumpkinCurry)

        case 15: return(stuffedEggplantParm)

        case 16: return(creamyBroccoliPasta)

        case 17: return(chanaMasala)

        case 18: return(bollerKarry)

        case 19: return(plokkfiskur)

        case 20: return(garlicSalmon)

        case 21: return(beefStroganoff)

        case 22: return(goulash)

        case 23: return(porkFriedRice)

        case 24: return(chiliConCarne)

        case 25: return(burningLove)
    
      default:
        break;
    }
    }

    const updatePoints = async (value: number) => {
        const temp = await axios.post("http://localhost:5000/api/update-preferences", {recipeId: recipe.id, rate: value});
    }
    const getRec = async () => {
        const temp = await axios.get("http://localhost:5000/api/get-recommended-recipes");
        console.log(temp);
    }

    function setRating(value: number | null){
        if(value != null){
            setValue(value);
            updatePoints(value - 3);
            getRec();
        }
    }

    return (
        <div>
            <img src={recipePicture()} alt={recipe.name} width="100%"/>
            <h1> {recipe.name} </h1>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => setRating(newValue)}
            />
            <h5> {recipe.time} min. </h5>

         <h3> Ingredients </h3>
         <hr></hr>
         <p>
            {ingredients.map(i =>
                <li> {i.amount} {i.unit} {i.name} </li>
            )}
         </p>

         <h3> Method </h3>
         <hr></hr>
         <p>
            {methods.map(m =>
                <ul> {m} </ul>
            )}
         </p>

        </div>
    )
}
