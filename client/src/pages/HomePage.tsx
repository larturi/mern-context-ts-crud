import { useContext } from 'react';
import { postContext } from '../context/postContext';

export function HomePage() {

  const { posts, setPosts } = useContext(postContext);

  console.log(posts)

  return (
    <div>HomePage</div>
  )
}
