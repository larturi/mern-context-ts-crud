import { Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage, PostFormPage } from './pages';
import PostContext from './context/postContext';

import './App.css';

function App() {
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
      <div className='px-10 container m-auto'>
        <PostContext>
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/new" element={ <PostFormPage /> } />
            <Route path="*" element={ <NotFoundPage /> } />
          </Routes>
        </PostContext>
      </div>
    </div>
  )
}

export default App;
