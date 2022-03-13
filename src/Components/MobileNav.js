import React from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

export function MobileNav({ handleMenu, showMenu }) {
  return (
    <div>
      {showMenu ? (
        <Fade top cascade>
          <div className="flex flex-col space-y-2 w-fit px-8 pb-2 rounded-b-lg text-right font-semibold text-lg  bg-white/95 fixed mx-6 top-20 -right-6 z-10">
            <Link onClick={handleMenu} href="#" to="intro" spy={true} smooth={true} offset={0} duration={1000}>
              intro
            </Link>
            <Link onClick={handleMenu} href="#" to="about" spy={true} smooth={true} offset={0} duration={1000}>
              about
            </Link>
            <Link onClick={handleMenu} href="#" to="work" spy={true} smooth={true} offset={-80} duration={1000}>
              work
            </Link>
            <Link onClick={handleMenu} href="#" to="contact" spy={true} smooth={true} offset={0} duration={1000}>
              contact
            </Link>
          </div>
        </Fade>
      ) : null}
    </div>
  );
}

export default MobileNav;
