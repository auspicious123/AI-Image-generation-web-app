import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';

import  connectDB  from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import auspiciousRoutes from './routes/auspiciousRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/auspicious',auspiciousRoutes);

app.get('/', async(req, res) => {
  res.send('Hello from auspicious AI')
})

const startServer=async()=>{
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8000, () => {
            console.log(`Server started on port https://localhost:8000`);
        });
    } catch (error) {
        console.log(error);
    }
}

startServer();