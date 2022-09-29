import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import postRoutes from './routes/post.routes.js';
import { CLIENT_APP_URL } from './config.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(fileUpload({ useTempFiles: true, tempFileDir: './upload' }));

// CORS
app.use(cors({
    origin: CLIENT_APP_URL,
}))

// Routes
app.use(postRoutes);

export default app;