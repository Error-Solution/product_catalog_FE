import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Accesories } from './components/Accessories';
import { HomePage } from './components/HomePage/HomePage';
import { Phones } from './components/Phones';
import { Tablets } from './components/Tablets';

function App() {
  return (
    <div className="App">
      <header>
        {' '}
        <nav>
          <Link to="/">Home</Link>
          <Link to="phones">Phones</Link>
          <Link to="tablets">Tablets</Link>
          <Link to="accessories">Accessories</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='phones' element={<Phones />} />
        <Route path='tablets' element={<Tablets />} />
        <Route path='accessories' element={<Accesories />} />
      </Routes>

      <footer></footer>
    </div>
  );
}

export default App;
