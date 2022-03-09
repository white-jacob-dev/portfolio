import React, { useState } from 'react';
import avatar from './Assets/Avatar.svg';
import project from './Assets/Project.svg';
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
    console.log('showing menu: ' + showMenu);
  }

  return (
    <div className="px-6 snap-y snap-mandatory">
      <Navbar handleMenu={handleMenu} />
      <MobileNav showMenu={showMenu} />
      <Intro />
      <About avatar={avatar} />
      <Work project={project} />
      <Contact />
    </div>
  );
}

export default App;
