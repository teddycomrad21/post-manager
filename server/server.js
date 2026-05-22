import express from 'express';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router.js';

dotenv.config({ path: '.env' })

// eslint-disable-next-line
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use(cors());
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL);

        app.listen(3000, () => {
            console.log('Server is running on 3000');
        });
    } catch {
        console.log('Custom error');
    }
}

startApp();