import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';


const PORT = process.env.PORT || 4000;
const app = express()

app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000', 
    'https://genpix-6ys4.vercel.app',
    'https://*.vercel.app'
  ],
  credentials: true
}));
await connectDB();

app.use('/api/user',userRouter);
app.use('/api/user',imageRouter);
app.get('/', (req, res) => res.send("API Working fine"))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));