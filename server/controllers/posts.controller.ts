import { Request, Response } from 'express';
import Post from '../models/Post.js';
import { processError } from '../helpers/validations.js';

export const getPosts = async (req: Request, res: Response) => {
    const posts = await Post.find()
    res.json({ posts })
};

export const createPost = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const newPost = new Post({title, description});

    await newPost.save();
    res.json(newPost);
};

export const updatePost = async (req: Request, res: Response) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        return res.json(updatedPost);
    } catch (error: any) {
        processError(res, error);
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({ message: 'Not found' });
        }

        return res.json(deletedPost);

    } catch (error) {
        processError(res, error);
    }
};

export const getPost = async (req: Request, res: Response) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Not found' });
        }

        return res.json(post);

    } catch (error) {
        processError(res, error);
    }
};
