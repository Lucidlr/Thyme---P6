import { useEffect, useState } from "react";
import axios from "axios";
import { RecipeInterface } from "../../../../interfaces/Recipe";
import Card from "./_food/Card";

export const Food = () => {

    const [data, setData] = useState<RecipeInterface[]>([]);

    useEffect(() => {
        if (data.length === 0) getRecipes();
    })

    // Gets all recipes from the database by using the specific URL
    const getRecipes = async () => {
        const temp1 = await axios.get("http://localhost:5000/api/get-recommended-recipes");
        console.log(temp1);
        setData(temp1.data as RecipeInterface[]);
    }
    if(data.length > 0){
        return (
        <>
            {data.map(r => 
                <Card recipe={r}></Card>
            )}
        </>
    );}
    else return (
        <> </>
    );
}
