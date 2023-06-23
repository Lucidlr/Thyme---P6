import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Button = () => {

    const [i, setI] = useState(0);
    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/food';
        navigate(path);
    }
    
    const inputOnClick = async () => {
        try {
            const temp = {email: "dog@mail.com", name: "doggy"}
            const response = await axios.post("http://localhost:5000/api/create-user", temp);
        } catch (error) {
            console.log(error)
        }
    }

    const handleOnClick = async () => {
        /* const temp = i +1;
        setI(temp);
        console.log(temp); */

        try {
            const data = await axios.post("http://localhost:5000/api/get-recommended-recipes", {userId: 1});
            console.log(data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleOnRate = async (num: number) => {
        try {
            const data = await axios.post("http://localhost:5000/api/update-preferences", {rate: num, recipeId: 1, user: 1})
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <> 
            <p> {i} </p>
            <button onClick={routeChange} style={{ color: 'pink', backgroundColor: 'green'}}> Button </button>
            <button onClick={() => handleOnRate(1)}> Rate +1 </button>
            <button onClick={handleOnClick}> Button server </button>
            <button onClick={() => handleOnRate(-1)}> Rate -1 </button>
            <button onClick={inputOnClick}> Button input </button>

        </>
    );
}