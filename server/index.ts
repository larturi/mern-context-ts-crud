import { connectDB } from './db.js';
import { NODE_PORT } from './config.js';
import app from './app.js';

connectDB();

app.listen(NODE_PORT);
console.log(`Server listening on port ${NODE_PORT}`);