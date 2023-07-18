import express, { Request, Response} from 'express'
import { createFood, getAllFoods, getSigleFood, updateFood, deleteFood } from '../controllers/foodController'

export const router = express.Router()


//GET ALL FOODS
router.get('/', getAllFoods)

//GET SINGLE FOOD
router.get('/:id', getSigleFood)

//POST NEW FOOD
router.post('/', createFood);

//PATCH FOOD
router.patch('/:id', updateFood)

//DELETE 
router.delete('/:id', deleteFood)