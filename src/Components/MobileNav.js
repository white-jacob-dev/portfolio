import React from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import resume from '../Assets/resume.pdf';

export function MobileNav({ handleMenu, showMenu }) {
  return (
    <div>
      {showMenu ? (
        <Fade right cascade duration={500}>
          <div className="flex flex-col space-y-2 w-fit px-8 pb-6 rounded-b-lg text-right font-light text-md  bg-white/95 dark:bg-slate-900/95 dark:text-slate-200 fixed mx-6 top-16 -right-6 z-10">
            <Link
              onClick={handleMenu}
              activeClass="underline decoration-4 decoration-blue-400 underline-offset-4 text-blue-700"
              to="intro"
              spy={true}
              smooth={true}
              duration={1000}
              className="transition-all duration-500 hover:text-blue-700 tracking-tighter"
            >
              Intro
            </Link>
            <Link
              onClick={handleMenu}
              activeClass="underline decoration-4 decoration-blue-400 underline-offset-4 text-blue-700"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-70}
              className="transition-all duration-500 hover:text-blue-700 tracking-tighter"
            >
              About
            </Link>

            <Link
              onClick={handleMenu}
              activeClass="underline decoration-4 decoration-blue-400 underline-offset-4 text-blue-700"
              to="work"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-70}
              className="transition-all duration-500 hover:text-blue-700 tracking-tighter"
            >
              Work
            </Link>
            <Link
              onClick={handleMenu}
              activeClass="underline decoration-4 decoration-blue-400 underline-offset-4 text-blue-700"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              className="transition-all duration-500 hover:text-blue-700 tracking-tighter"
            >
              Contact
            </Link>
            <a href={resume} target="_blank">
              <button className="self-start py-1 px-2 bg-blue-700 text-white rounded-lg shadow-lg text-sm font-medium tracking-tight">Resume</button>
            </a>
          </div>
        </Fade>
      ) : null}
    </div>
  );
}

export default MobileNav;
