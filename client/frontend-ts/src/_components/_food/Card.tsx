import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BrowserRouter, useNavigate, Route, Routes } from "react-router-dom";
import { RecipeInterface } from '../../../../../interfaces/Recipe';
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

export default function MultiActionAreaCard(props:{recipe:RecipeInterface}) {

  let navigate = useNavigate();

  const openRecipe = () => {
    let path = '/RecipePage';
    navigate(path, { state: { recipe: props.recipe } });
  }

  function recipePicture(){
    switch (props.recipe.id) {
      case 1:
        return (
        <CardMedia
            component="img"
            src={lasagna}
            height="140"
            alt="Lasagna"
          />)

        case 2: return(
        <CardMedia
            component="img"
            src={indianFriedRice}
            height="140"
            alt="Indian Fried Rice"
          />
        )

        case 3: return(
        <CardMedia
            component="img"
            src={butterChickenCurry}
            height="140"
            alt="Butter Chicken Curry"
          />
        )

        case 4: return(
        <CardMedia
            component="img"
            src={potatoLeekSoup}
            height="140"
            alt="Potato Leek Soup"
          />
        )

        case 5: return(
        <CardMedia
            component="img"
            src={bolognese}
            height="140"
            alt="Spaghetti Bolognese"
          />
        )

        case 6: return(
        <CardMedia
            component="img"
            src={roastedTomatoSoup}
            height="140"
            alt="Roasted Tomato Soup"
          />
        )

        case 7: return(
        <CardMedia
            component="img"
            src={moerbradgryde}
            height="140"
            alt="Danish Tenderloin Stew"
          />
        )

        case 8: return(
        <CardMedia
            component="img"
            src={chickenQuesadilla}
            height="140"
            alt="Chicken Quesadilla"
          />
        )

        case 9: return(
        <CardMedia
            component="img"
            src={baguettePizza}
            height="140"
            alt="Baguette Pizza"
          />
        )

        case 10: return(
        <CardMedia
            component="img"
            src={stuffedBellPeppers}
            height="140"
            alt="Stuffed Bell Peppers"
          />
        )

        case 11: return(
        <CardMedia
            component="img"
            src={tacoBowl}
            height="140"
            alt="Taco Bowl"
          />
        )

        case 12: return(
        <CardMedia
            component="img"
            src={harusame}
            height="140"
            alt="Harusame"
          />
        )

        case 13: return(
        <CardMedia
            component="img"
            src={lentilWalnut}
            height="140"
            alt="Lentil Walnut Pasta Bolognese"
          />
        )

        case 14: return(
        <CardMedia
            component="img"
            src={pumpkinCurry}
            height="140"
            alt="Pumpkin  Curry"
          />
        )

        case 15: return(
        <CardMedia
            component="img"
            src={stuffedEggplantParm}
            height="140"
            alt="Stuffed Eggplant Parm"
          />
        )

        case 16: return(
        <CardMedia
            component="img"
            src={creamyBroccoliPasta}
            height="140"
            alt="Creamy Broccoli Pasta"
          />
        )

        case 17: return(
        <CardMedia
            component="img"
            src={chanaMasala}
            height="140"
            alt="Chana Masala"
          />
        )

        case 18: return(
        <CardMedia
            component="img"
            src={bollerKarry}
            height="140"
            alt="Balls in Curry"
          />
        )

        case 19: return(
        <CardMedia
            component="img"
            src={plokkfiskur}
            height="140"
            alt="Plokkfiskur"
          />
        )

        case 20: return(
        <CardMedia
            component="img"
            src={garlicSalmon}
            height="140"
            alt="Garlic Butter Baked Salmon"
          />
        )

        case 21: return(
        <CardMedia
            component="img"
            src={beefStroganoff}
            height="140"
            alt="Beef Stroganoff"
          />
        )

        case 22: return(
        <CardMedia
            component="img"
            src={goulash}
            height="140"
            alt="Goulash"
          />
        )

        case 23: return(
        <CardMedia
            component="img"
            src={porkFriedRice}
            height="140"
            alt="Pork Fried Rice"
          />
        )

        case 24: return(
        <CardMedia
            component="img"
            src={chiliConCarne}
            height="140"
            alt="Chili Con Carne"
          />
        )

        case 25: return(
        <CardMedia
            component="img"
            src={burningLove}
            height="140"
            alt="Burning Love"
          />
        )
    
      default:
        break;
    }
  }
  
  return (
    <Card sx={{ maxWidth: 345, padding: 2 }} >
      <CardActionArea onClick={() => openRecipe()}>
        {recipePicture()}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.recipe.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}