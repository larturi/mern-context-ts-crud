import express from 'express';
import postRoutes from './routes/post.routes.js';
import { connectDB } from './db.js';
import { NODE_PORT } from './config.js';

const app = express();

connectDB();

app.use(postRoutes);

app.listen(NODE_PORT);
console.log(`Server listening on port ${NODE_PORT}`);