import { Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage, PostFormPage } from './pages';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/new" element={ <PostFormPage /> } />
      <Route path="*" element={ <NotFoundPage /> } />
    </Routes>
  )
}

export default App;
