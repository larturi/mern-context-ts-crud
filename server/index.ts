import express from 'express';
import postRoutes from './routes/post.routes.js';

const app = express();

app.use(postRoutes);

app.listen(3000);

console.log('Server listening on port 3000');