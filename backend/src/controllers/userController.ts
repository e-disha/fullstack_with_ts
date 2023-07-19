import { Request, Response } from 'express';
import User, { UserDocument } from "../models/userModel";
import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongoose'

const createToken = (_id: ObjectId): string => {
  return jwt.sign({ _id }, process.env.PASS!, { expiresIn: '2d' });
}


export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
        const user = await User.signin(email, password);
    
        // Create a token
        const token = createToken(user._id);
    
        res.status(200).json({ email, token });
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
};



export const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
