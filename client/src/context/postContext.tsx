import { createContext, useState } from 'react';

type Props = {
  children?: React.ReactNode
};

export const postContext = createContext<any>(null);

const PostContext: React.FC<Props> = ({children}) => {

    const [posts, setPosts] = useState([]);

    return (
        <postContext.Provider value={{
            posts,
            setPosts
        }}>
            { children }
        </postContext.Provider>
    )
}

export default PostContext;