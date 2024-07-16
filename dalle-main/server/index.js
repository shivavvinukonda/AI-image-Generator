//an instance of our backend API
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);//api end points that we can connect onto on frontside
app.use('/api/v1/dalle', dalleRoutes);//same as above

app.get('/', async (req, res) => {//a route which verifies that our application is working or not
    res.send('Hello from DALL-E');
})

const startServer = async () => {//starting the server and connecting to MongoDB, it takes a url for our mongodb atlas cluster

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
    } catch (error) {
        console.log(error);
    }

}

startServer();