import dotenv from 'dotenv';
dotenv.config();

export const NODE_PORT = process.env.NODE_PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/merncrud';
export const CLIENT_APP_URL = process.env.CLIENT_APP_URL || 'http://127.0.0.1:5173';
