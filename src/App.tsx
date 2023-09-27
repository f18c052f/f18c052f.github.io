import React from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/photo`} element={<Photo />} />
        <Route path={`/*`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


const Photo: React.FC = () => {
  return <>Photo Page</>
}

export default App;