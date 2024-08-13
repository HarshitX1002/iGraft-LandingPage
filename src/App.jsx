
import React from 'react';
import Header from './components/Header'; // Adjust the path as necessary
import MiddleData from './components/MiddleData';
import Footer from './components/Footer';
import Middle2 from './components/Middle2';
import { Testemonial } from './components/Testemonial';
import LowerData from './components/LowerData';
import Upper3 from './components/Upper3';
import Upper2 from './components/Upper2';
import Upper1 from './components/Upper1';


function App()
{
  return (
    <div>
      <Header />
      <Upper1 />
      <MiddleData />
      <Upper2 />
      <Upper3 />
      <Middle2 />
      <Testemonial />
      <LowerData />
      <Footer />
    </div>
  );
}

export default App;