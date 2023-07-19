import express from 'express'
import { signIn, signUp} from '../controllers/userController'
export const userRouter = express.Router()

//login route
userRouter.post('/signin', signIn)
//signup route
userRouter.post('/signup', signUp)