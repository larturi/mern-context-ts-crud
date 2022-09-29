import { PostState } from './PostProvider';
import { IPost } from '../../interfaces/post';


type PostActionType = 
    | { type: 'GET_POSTS', payload: IPost[] }

export const postReducer = (state: PostState, action: PostActionType): PostState => {
    switch (action.type) {
        case 'GET_POSTS':
            return {
               ...state,
               isLoaded: true,
               posts: [ ...action.payload ]
            };

        default:
            return state;
    }
};