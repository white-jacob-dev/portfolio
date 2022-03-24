import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import MobileNav from './Components/MobileNav';
import Intro from './Components/Intro';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="px-6 md:px-24 bg-gray-50">
      <Navbar showMenu={showMenu} handleMenu={handleMenu} />
      <MobileNav showMenu={showMenu} handleMenu={handleMenu} />
      <div className="space-y-20 flex flex-col lg:items-center">
        <div className="max-w-screen-lg">
          <Intro />
        </div>
        <div className="max-w-screen-lg">
          <About />
        </div>
        {/* <div className="max-w-screen-lg">
          <Skills />
        </div> */}
        <div className="max-w-screen-lg">
          <Work />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
