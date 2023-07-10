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
import Immersion from './components/Categories-pages/Immersion';
import ProductPage from '../src/components/pages/ProductPage';
// import Geyser from './components/Categories-pages/Geyser';
import ScrollButton from './components/Scroller/ScrollButton';
// import PageNotFound from './components/404PageNotFound/PageNotFound';
function App() {
  return (
    <>

  <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="products" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="ceiling" element={<Ceiling/>} />
          <Route path="cooler" element={<Cooler />} />
          <Route path="pedestal" element={<Pedestal />} />
          <Route path="heater" element={<Heater />} />
          <Route path="immersion" element={<Immersion />} />
          {/* <Route path="geyser" element={<Geyser />} /> */}
        </Route>
        {/* <Route component={PageNotFound} /> */}

        <Route path="categories/product/:id" element={<ProductPage />} />

        </Routes>
        <ScrollButton />
   </>
  );
}

export default App;
