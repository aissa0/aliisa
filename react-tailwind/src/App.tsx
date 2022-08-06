import React from 'react';
import Headr from "./header/heard";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Sing from './componend/Sign';
import Home from './Home';
import Product from './componend/products/Product';
import Desktop from './topuenuDesktop';
import TopMenuMobile from './header/TopMenuMobile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Foter from './footer/Foter';
function App() {


  
  return (
  
    <div className="  min-h-screen overflow-x-hidden">
      <div className='relative'>
          <TopMenuMobile/>
          <Headr/>
          <Desktop/>
      </div>
          <Router>
                    <Routes>
                    <Route path="/" element={<Home />} />
                      <Route path="sing" element={<Sing />} />
                      <Route path="config" element={<About />} /> 
                      <Route path="Product" element={<Product />} />
       
                    </Routes>
          </Router>
          <Foter/>
    </div>
  );
}

export default App;
 
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}