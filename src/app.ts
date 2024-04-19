import express, { json } from 'express';
import { productRouter } from './routes/product.routes';
import cors from 'cors';
export const app = express();

app.use(json());
app.use(cors());
app.use('/products', productRouter);
