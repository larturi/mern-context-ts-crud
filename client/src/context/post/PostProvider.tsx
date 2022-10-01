/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useReducer } from 'react';
import {
    getPostsApi, 
    getPostApi, 
    createPostApi, 
    updatePostApi, 
    deletePostApi 
} from '../../api/post';
import { IPost } from '../../interfaces/post';
import { PostContext, postReducer } from './';

export interface PostState {
    posts: IPost[],
    post?: IPost,
    isLoaded: boolean
}

const POST_INITIAL_STATE: PostState = {
   posts: [],
   post: undefined,
   isLoaded: false,
};

interface Props {
   children: React.ReactNode;
}

export const PostProvider: FC<Props> = ({ children }) => {
   const [state, dispatch] = useReducer(postReducer, POST_INITIAL_STATE);

   const getPosts = async () => {
      const posts: IPost[] = await getPostsApi();
      dispatch({ type: 'GET_POSTS', payload: posts });
   };

   const getPost = async (idPost: string) => {
      const post: IPost = await getPostApi(idPost);
      dispatch({ type: 'GET_POST', payload: post });
   };

   const createPost = async (post: IPost) => {
      try {
         const res = await createPostApi(post);
         dispatch({ type: 'CREATE_POST', payload: [...state.posts, res] });
      } catch (error) {
         console.error(error);
      }
   };

   const updatePost = async (idPost: string, post: IPost) => {
      const res = await updatePostApi(idPost, post);
      dispatch({ 
         type: 'UPDATE_POST', 
         payload: state.posts.map(post => post._id === idPost ? res : post)
      });
   };

   const deletePost = async (idPost: string) => {
      const res = await deletePostApi(idPost);
      dispatch({ 
         type: 'DELETE_POST', 
         payload: state.posts.filter(post => post._id !== idPost)
      });
   };

   useEffect(() => {
      getPosts();
    }, [])

   return (
      <PostContext.Provider
         value={{
            ...state,

            // Mehtods
            getPosts,
            getPost,
            createPost,
            updatePost,
            deletePost,
         }}
      >
         {children}
      </PostContext.Provider>
   );
};
