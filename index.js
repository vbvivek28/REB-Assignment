import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './Routes/userRoutes.js';
import { config } from 'dotenv';

config();
const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI);

app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
