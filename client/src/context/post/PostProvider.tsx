/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useReducer, useState } from 'react';
import { getPostsApi, createPostApi } from '../../api/post';
import { IPost } from '../../interfaces/post';
import { PostContext, postReducer } from './';

export interface PostState {
    posts: IPost[],
    isLoaded: boolean
}

const POST_INITIAL_STATE: PostState = {
   posts: [],
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

   const createPost = async (post: IPost) => {
      const res = await createPostApi(post);
      dispatch({ type: 'CREATE_POST', payload: [...state.posts, res] });
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
            createPost,
         }}
      >
         {children}
      </PostContext.Provider>
   );
};
