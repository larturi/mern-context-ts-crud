import dotenv from 'dotenv';
dotenv.config();

export const NODE_PORT = process.env.NODE_PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/merncrud';
