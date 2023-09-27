import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Photo from './pages/Photo';
import Contact from './pages/Contact';
import {links} from './models/route';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={links[0].href} element={<Home />} />
        <Route path={links[1].href} element={<Photo />} />
        <Route path={links[2].href} element={<Contact />} />
        <Route path={`/*`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;