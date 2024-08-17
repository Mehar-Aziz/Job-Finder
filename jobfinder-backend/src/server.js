import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import serviceRoutes from './routes/serviceRoute.js';
import testimonialRoutes from './routes/testimonalRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import profileRoutes from './routes/profileRoutes.js';

dotenv.config();
connectDB();
const app = express();

app.use(express.json({ extended: false }));

const corsOptions = {
    origin: 'http://localhost:3001', 
    methods: 'GET,POST,PUT,DELETE', 
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, 
  };
  
  app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api', testimonialRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api', profileRoutes);


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));