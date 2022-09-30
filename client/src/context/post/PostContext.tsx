import { createContext } from 'react';
import { IPost } from '../../interfaces/post';

interface ContextProps {
    posts: IPost[],
    post?: IPost,
    isLoaded: boolean,

    // Mehtods
    getPosts: () => Promise<IPost[]> | Promise<void>;
    getPost: (idPost: string) => Promise<IPost> | Promise<void>;
    createPost: (post: IPost) => Promise<IPost> | Promise<void>;
    updatePost: (idPost: string, post: IPost) => Promise<IPost> | Promise<void>;
    deletePost: (idPost: string) => Promise<IPost> | Promise<void>;
}

export const PostContext = createContext<ContextProps>({} as ContextProps);
