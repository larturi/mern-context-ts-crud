import express from 'express';
import postRoutes from './routes/post.routes.js';

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use(postRoutes);

export default app;