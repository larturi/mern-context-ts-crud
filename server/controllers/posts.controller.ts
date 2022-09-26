import { Request, Response } from 'express';

export const getPosts = (req: Request, res: Response) => res.json({ message: [] });
export const createPost = (req: Request, res: Response) => res.json({ message: 'Post Created' });
export const updatePost = (req: Request, res: Response) => res.json({ message: 'Post Updated' });
export const deletePost = (req: Request, res: Response) => res.json({ message: 'Post Deleted' });
export const getPost = (req: Request, res: Response) => res.json({ message: 'Post' });
