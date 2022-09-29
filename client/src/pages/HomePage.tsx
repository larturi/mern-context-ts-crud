import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VscEmptyWindow } from 'react-icons/vsc'
import { PostsList } from '../components/PostsList';
import { PostContext } from '../context/post';

export const HomePage = () => {

  const { posts, isLoaded } = useContext(PostContext);

  if(!isLoaded) return null;

  if(posts.length === 0) return (
    <div className='flex flex-col justify-center items-center'>
      <VscEmptyWindow className='w-48 h-48 text-white' />
      <h2 className='text-white text-2xl'>Aun no hay publicaciones</h2>
    </div>
  );
  
  return (
    <>
      <h2>HomePage</h2>
     
      {
        !isLoaded ? (
          <p>Loading...</p>
        ) : (
          <>
            <Link to="/new">Crear nueva publicación</Link>
            <PostsList posts={posts} />
          </>
        )
      }
    
    </>
  )
}

export default HomePage;

