import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Carousel  from './Components/Carousel';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
    </div>
  );
}

export default App;
