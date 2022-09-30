import { Link } from 'react-router-dom';
 
export function NotFoundPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <p className='text-white md:text-6xl text-4xl'>
        404 | Not Found
      </p>

      <Link to="/" className='text-white mt-10 text-lg hover:text-gray-400'>Volver</Link>

    </div>
  )
}
