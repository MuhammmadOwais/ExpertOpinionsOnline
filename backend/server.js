import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import contactRoutes from './routes/contactRoutes.js';

// Load env variables
dotenv.config();

const app = express();

// 1. Middleware (Pehle ye ayenge)
app.use(cors());
app.use(express.json());

// 2. Routes (Middleware ke baad aur Listen se pehle)
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
    res.send('Expert Opinions Online API is Running...');
});

// 3. Port Configuration
const PORT = process.env.PORT || 5000;

// 4. Start Server
app.listen(PORT, () => {
    console.log(`Server running in development mode on port ${PORT}`.yellow.bold);
});