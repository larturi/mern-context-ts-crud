import { createContext } from 'react';
import { IPost } from '../../interfaces/post';

interface ContextProps {
    posts: IPost[],
    isLoaded: boolean,

    // Mehtods
    getPosts: () => Promise<IPost[]> | Promise<void>;
    createPost: (post: IPost) => Promise<IPost> | Promise<void>;
}

export const PostContext = createContext<ContextProps>({} as ContextProps);
