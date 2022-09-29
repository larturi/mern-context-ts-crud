import axios from 'axios';
import { IPost } from '../interfaces/post';

export const getPostsApi = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_BACKEND_URL}/posts`);
    const posts: IPost[] = response.data.posts;
    return posts;
};