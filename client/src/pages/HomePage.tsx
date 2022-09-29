import React, { useContext, useEffect } from 'react';
import { PostsList } from '../components/PostsList';
import { PostContext } from '../context/post';

export const HomePage = () => {

  const { posts, getPosts, isLoaded } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, [])

  if(!isLoaded) return null;
  
  return (
    <>
      <h2>HomePage</h2>
     
      {
        !isLoaded ? (
          <p>Loading...</p>
        ) : (
          <PostsList posts={posts} />
        )
      }
    
    </>
  )
}

export default HomePage;

