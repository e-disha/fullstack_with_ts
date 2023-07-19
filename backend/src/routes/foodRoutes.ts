import express, { Request, Response} from 'express'
import { createFood, getAllFoods, getSigleFood, updateFood, deleteFood } from '../controllers/foodController'

export const foodRouter = express.Router()


//GET ALL FOODS
foodRouter.get('/', getAllFoods)

//GET SINGLE FOOD
foodRouter.get('/:id', getSigleFood)

//POST NEW FOOD
foodRouter.post('/', createFood);

//PATCH FOOD
foodRouter.patch('/:id', updateFood)

//DELETE 
foodRouter.delete('/:id', deleteFood)