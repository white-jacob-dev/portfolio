import React from 'react';
import { Link } from 'react-scroll';

export function MobileNav({ showMenu }) {
  return (
    <div>
      {showMenu ? (
        <div className="flex flex-col space-y-2 w-fit px-4 pb-2 rounded-b-lg text-left font-ooohbaby font-semibold text-2xl  bg-white/95 fixed mx-6 top-20 -right-6 z-10">
          <Link href="#" to="intro" spy={true} smooth={true} offset={0} duration={1000} className="opacity-60">
            &lt;intro&gt;
          </Link>
          <Link href="#" to="about" spy={true} smooth={true} offset={0} duration={1000} className="opacity-60">
            &lt;about&gt;
          </Link>
          <Link href="#" to="work" spy={true} smooth={true} offset={-80} duration={1000} className="opacity-60">
            &lt;work&gt;
          </Link>
          <Link href="#" to="contact" spy={true} smooth={true} offset={0} duration={1000} className="opacity-60">
            &lt;contact&gt;
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default MobileNav;
