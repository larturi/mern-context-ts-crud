import axios from 'axios';
import { IPost } from '../interfaces/post';

export const getPostsApi = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_BACKEND_URL}/posts`);
    const posts: IPost[] = response.data.posts;
    return posts;
};

export const getPostApi = async (idPost: string) => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_BACKEND_URL}/posts/${idPost}`);
    const post: IPost = response.data;
    return post;
};

export const createPostApi = async (newPost: IPost) => {
    const form = new FormData();

    form.append('title', newPost.title);
    form.append('description', newPost.description);
    form.append('image', newPost.image!);

    const response = await axios.post(`${import.meta.env.VITE_SERVER_BACKEND_URL}/posts`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    const post: IPost = response.data;
    return post;
};

export const updatePostApi = async (idPost: string, post: IPost) => {
    const response = await axios.put(`${import.meta.env.VITE_SERVER_BACKEND_URL}/posts/${idPost}`, post);
    const updatedPost: IPost = response.data;
    return updatedPost;
};

export const deletePostApi = async (idPost: string) => {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_BACKEND_URL}/posts/${idPost}`);
    const post: IPost = response.data;
    return post;
};