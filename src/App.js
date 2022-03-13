import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import MobileNav from './Components/MobileNav';
import Intro from './Components/Intro';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="px-6 md:px-24 ">
      <Navbar showMenu={showMenu} handleMenu={handleMenu} />
      <MobileNav showMenu={showMenu} handleMenu={handleMenu} />
      <Intro />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
