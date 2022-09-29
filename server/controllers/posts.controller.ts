import { Request, Response } from 'express';
import Post from '../models/Post.js';
import fileUpload from 'express-fileupload';
import fs from 'fs-extra';
import { processError } from '../helpers/validations.js';
import { uploadImage, deleteImage } from '../libs/cloudinary.js'

export const getPosts = async (req: Request, res: Response) => {
    const posts = await Post.find();
    res.json({ posts });
};

export const createPost = async (req: Request, res: Response) => {
    const { title, description } = req.body;

    let image;

    if(req.files?.image) {
        let f = req.files.image as fileUpload.UploadedFile;

        // Elimino la imagen local porque la grabo en Cloudinary
        const result = await uploadImage(f.tempFilePath);
        await fs.remove(f.tempFilePath)

        image = {
            url: result.secure_url,
            public_id: result.public_id
        }
    }

    const newPost = new Post({ title, description, image });

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

        // Elimino la imagen de Cloudinary
        if(deletedPost && deletedPost.image?.public_id) {
            await deleteImage(deletedPost.image.public_id!);
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
