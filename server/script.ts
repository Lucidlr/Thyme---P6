import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from 'express';
import cors from 'cors';
import { IngredientInterface } from "../interfaces/Ingredients";
import { RecipeInterface } from "../interfaces/Recipe";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

// API endpoint, .get becomes .post to post
app.get('/api/get-all-users', async (req: Request, res: Response) => {
    try {
        const data = await prisma.user.findMany();

        res.json(JSON.stringify(data));
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retreiving data from database');
    }
})

app.get('/api/get-recipes', async (req: Request, res: Response) => {
    try {
        // Get a lot of recipes from the database
        const dataRecipes = await prisma.recipe.findMany();

        // Empty recipe list for later storage
        const recipeList: RecipeInterface[] = [];
        
        // For every recipe we have found, find it's ingredients
        for(const recipe of dataRecipes){
            const ingredientList: IngredientInterface[] = [];

            // Find all related ingredients
            const relations = await prisma.relation.findMany({
                where: { recipeId: recipe.id }
            });

            // For every ingredient found
            for(const relation of relations){
                const ingredient = await prisma.ingredient.findFirst({
                    where: { id: relation.ingredientId }
                });

                if(ingredient) {
                    const temp = {
                        name: ingredient.name,
                        amount: relation.amount,
                        unit: relation.unit
                    } as IngredientInterface;
    
                    ingredientList.push(temp);
                }
            }

            // Collect all the found data into one 
            const temp = {
                id: recipe.id,
                name: recipe.name,
                method: recipe.method,
                time: recipe.time,
                ingredients: ingredientList 
            } as unknown as RecipeInterface;

            recipeList.push(temp);
        }
        console.log(recipeList);
        // Send the result back 
        res.status(200).send(recipeList);

    } catch (error) {
        console.log(error);
    }
})
app.post('/api/create-user', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        await prisma.user.create({data: data});
        res.status(200).send('User succesfully created.')
    } catch (error) {
        console.log(error);
    }
})

app.get('/api/get-recommended-recipes', async (req: Request, res: Response) => {
    try {
        const points = await prisma.points.findMany({
            where: {userId: 1}
        })

        // Get a lot of recipes from the database
        const dataRecipes = await prisma.recipe.findMany();

        // Empty recipe list for later storage
        const recipeList = [];
        
        // For every recipe we have found, find it's ingredients
        for(const recipe of dataRecipes){
            let point = 0;

            // Find all related ingredients
            const relations = await prisma.relation.findMany({
                where: { recipeId: recipe.id }
            });

            // For every ingredient found
            for(const relation of relations){
                const ingredient = await prisma.ingredient.findFirst({
                    where: { id: relation.ingredientId }
                });

                if(ingredient) {
    
                    const i = points.find(temp => temp.ingredientId === ingredient.id);
                    if(i) point += i.point;
                }
            }

            // Collect all the found data into one 
            recipeList.push({point: point, recipe});
        }
        const sortedList = recipeList.sort((a,b) => (a.point > b.point) ? -1 : 0);

        const result = [];
        for(const content of sortedList){
            const recipe = content.recipe;
            const ingredientList: IngredientInterface[] = [];

            // Find all related ingredients
            const relations = await prisma.relation.findMany({
                where: { recipeId: recipe.id }
            });

            // For every ingredient found
            for(const relation of relations){
                const ingredient = await prisma.ingredient.findFirst({
                    where: { id: relation.ingredientId }
                });

                if(ingredient) {
                    const temp = {
                        name: ingredient.name,
                        amount: relation.amount,
                        unit: relation.unit
                    } as IngredientInterface;
    
                    ingredientList.push(temp);
                }
            }

            // Collect all the found data into one 
            const temp = {
                id: recipe.id,
                name: recipe.name,
                method: recipe.method,
                time: recipe.time,
                ingredients: ingredientList 
            } as unknown as RecipeInterface;

            result.push(temp);
        }

        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        
    }
})

app.post('/api/update-preferences', async (req: Request, res: Response) => {
    try {
        const data = req.body;

        console.log(data)

        const ingredients = await prisma.relation.findMany({
            where: {recipeId: data.recipeId}
        })

        for(const ingredient of ingredients){
            const point = await prisma.points.findFirst({
                where: {ingredientId: ingredient.ingredientId}
            })
            
            if(point){
                const update = await prisma.points.upsert({
                    where: {
                        id: point.id
                    },
                    update: {
                        point: data.rate
                    },
                    create: {
                        point: data.rate,
                        preferences: true,
                        userId: 1,
                        ingredientId: ingredient.ingredientId
                    }
                })
            } else {
                const create = await prisma.points.create(
                {
                    data:
                    {
                        point: data.rate,
                        preferences: true,
                        userId: 1,
                        ingredientId: ingredient.ingredientId
                    }
                })
            }
        }

        res.status(200).send(data);
    } catch (error) {
        console.log(error);
    }
})

app.listen(5000, () => {
    console.log('Listens to port 5000')
})