import { PostState } from './PostProvider';
import { IPost } from '../../interfaces/post';


type PostActionType = 
    | { type: 'GET_POSTS', payload: IPost[] }
    | { type: 'GET_POST', payload: IPost }
    | { type: 'CREATE_POST', payload: IPost[] }
    | { type: 'UPDATE_POST', payload: IPost[] }
    | { type: 'DELETE_POST', payload: IPost[] }

export const postReducer = (state: PostState, action: PostActionType): PostState => {
    switch (action.type) {
        case 'GET_POSTS':
            return {
               ...state,
               isLoaded: true,
               post: undefined,
               posts: [ ...action.payload ]
            };

        case 'GET_POST':
            return {
               ...state,
               isLoaded: true,
               post: action.payload
            };

        case 'CREATE_POST':
            return {
               ...state,
               isLoaded: true,
               post: undefined,
               posts: [ ...action.payload ]
            };

        case 'UPDATE_POST':
            return {
               ...state,
               isLoaded: true,
               post: undefined,
               posts: [ ...action.payload ]
            };

        case 'DELETE_POST':
            return {
               ...state,
               isLoaded: true,
               posts: [ ...action.payload ]
            };

        default:
            return state;
    }
};