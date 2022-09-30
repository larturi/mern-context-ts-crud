import axios from 'axios';
import { IPost } from '../interfaces/post';

export const getPostsApi = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_BACKEND_URL}/posts`);
    const posts: IPost[] = response.data.posts;
    return posts;
};

export const createPostApi = async (newPost: IPost) => {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_BACKEND_URL}/posts`, newPost);
    const post: IPost = response.data;
    return post;
};

export const deletePostApi = async (idPost: string) => {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_BACKEND_URL}/posts/${idPost}`);
    const post: IPost = response.data;
    return post;
};