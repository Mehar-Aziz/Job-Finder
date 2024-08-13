import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import serviceRoutes from './routes/serviceRoute.js';

dotenv.config();
connectDB();
const app = express();

const corsOptions = {
    origin: 'http://localhost:3001', // Replace with your frontend URL or '*' for all origins
    methods: 'GET,POST,PUT,DELETE', // Allowed methods
    allowedHeaders: 'Content-Type, Authorization', // Allowed headers
    credentials: true, // If you need to support cookies or authentication headers
  };
  
  app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));