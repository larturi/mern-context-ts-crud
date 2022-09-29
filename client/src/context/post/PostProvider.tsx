/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useReducer } from 'react';
import { getPostsApi } from '../../api/post';
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

   return (
      <PostContext.Provider
         value={{
            ...state,

            // Mehtods
            getPosts,
         }}
      >
         {children}
      </PostContext.Provider>
   );
};
