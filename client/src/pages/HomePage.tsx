import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VscEmptyWindow } from 'react-icons/vsc';
import { PostsList } from '../components/PostsList';
import { PostContext } from '../context/post';

export const HomePage = () => {
   const { posts, isLoaded } = useContext(PostContext);

   if (!isLoaded) return null;

   if (posts.length === 0)
      return (
         <div className='flex flex-col justify-center items-center'>
            <VscEmptyWindow className='w-48 h-48 text-white' />
            <h2 className='text-white text-2xl'>Aun no hay publicaciones</h2>
            <Link
               to='/new'
               className='bg-blue-500 hover:bg-blue-700 text-white font-bold 
                          py-2 px-4 rounded mt-10'
            >
               Crear Post
            </Link>
         </div>
      );

   return (
      <>
         <div className='flex flex-row justify-between mb-10 mt-10'>
            <h2 className='text-white lg:text-3xl text-2xl mb-3 md:mb-0'>Listado de Posts ({posts.length})</h2>

            <Link
               to='/new'
               className='bg-blue-500 hover:bg-blue-700 text-white font-bold 
                          py-2 px-4 rounded'
            >
               Crear Post
            </Link>
         </div>
         {!isLoaded ? <p>Loading...</p> : <PostsList posts={posts} />}
      </>
   );
};

export default HomePage;
