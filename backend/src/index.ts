import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { foodRouter } from './routes/foodRoutes';
import { userRouter } from './routes/userRoutes';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
//applied cors
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

app.use('/api/foods/', foodRouter);
app.use('/api/users/', userRouter)

mongoose
  .connect(process.env.MONGO_DB!)
  .then(() => {
    app.listen(process.env.PORT, (): void => {
      console.log('Server running and listening on port 9000');
    });
  })
  .catch((error) => console.log(error));

//cors middleware
app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
