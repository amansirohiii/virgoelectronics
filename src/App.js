import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import FeaturedItem from './components/Featured/FeaturedItem';
import FeaturedSlider from './components/Featured/FeaturedSlider';
import './index.css';

function App() {
  return (
    <>
  <Navbar/>
  <FeaturedSlider/>
   </>
  );
}

export default App;
