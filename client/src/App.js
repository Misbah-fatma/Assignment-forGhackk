import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage';
import Login from './Components/Login';
import Register from './Components/Register';
import WebtoonDetail from './Components/WebToonDetails';
import Favorites from './Components/Favourite';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Blog from './Components/Blog';

function App() {
  return (

      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/webtoon/:id" element={<WebtoonDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/webtoon/:id" element={<WebtoonDetail />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer/>
      </div>

  );
}

export default App;
