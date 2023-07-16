import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import FeaturedItem from './components/Featured/FeaturedItem';
import './index.css';

import { Routes, Route} from 'react-router-dom';
import Home from '../src/components/pages/Home';
import Categories from '../src/components/pages/Categories';
import All from './components/Categories-pages/All';
import Ceiling from './components/Categories-pages/Ceiling';
import Cooler from './components/Categories-pages/Cooler';
import Pedestal from './components/Categories-pages/Pedestal';
import Heater from './components/Categories-pages/Heater';
import Immersion from './components/Categories-pages/Iron';
import ProductPage from '../src/components/pages/ProductPage';
// import Geyser from './components/Categories-pages/Geyser';
import ScrollButton from './components/Scroller/ScrollButton';
// import PageNotFound from './components/404PageNotFound/PageNotFound';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react'
import Footer from './components/Footer/Footer';


const App=()=> {
  const [progress, setProgress] = useState(0)
  const setProg = (prog) => {
    setProgress(prog);
  }
  return (
    <>

  <Navbar />
      <Routes>
        <Route index path="/" element={<Home setProgress={setProg}/>} />

        <Route path="products" element={<Categories setProgress={setProg}/>}>
          <Route path="all" element={<All setProgress={setProg}/>} />
          <Route path="ceiling" element={<Ceiling setProgress={setProg}/>} />
          <Route path="cooler" element={<Cooler setProgress={setProg}/>} />
          <Route path="pedestal" element={<Pedestal setProgress={setProg}/>} />
          <Route path="heater" element={<Heater setProgress={setProg}/>} />
          <Route path="iron" element={<Immersion setProgress={setProg}/>} />
          {/* <Route path="geyser" element={<Geyser />} /> */}
        </Route>
        {/* <Route component={PageNotFound} /> */}

        <Route path="categories/product/:id" element={<ProductPage setProgress={setProg}/>} />
        <Route index path="contact" element={<Contact setProgress={setProg}/>} />
        <Route index path="about" element={<About setProgress={setProg}/>} />

        </Routes>
        <LoadingBar
          color='red'
          progress={progress}
        />
        <ScrollButton />
        <Footer />
   </>
  );
}

export default App;
