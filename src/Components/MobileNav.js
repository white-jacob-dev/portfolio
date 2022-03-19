import React from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

export function MobileNav({ handleMenu, showMenu }) {
  return (
    <div>
      {showMenu ? (
        <Fade right cascade duration={500}>
          <div className="flex flex-col space-y-2 w-fit px-8 pb-2 rounded-b-lg text-right font-medium text-lg  bg-white/95 fixed mx-6 top-20 -right-6 z-10">
            <Link
              onClick={handleMenu}
              activeClass="underline decoration-4 decoration-blue-700 underline-offset-4"
              href="#"
              to="intro"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Intro
            </Link>
            <Link
              onClick={handleMenu}
              activeClass="underline decoration-4 decoration-blue-700 underline-offset-4"
              href="#"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              About
            </Link>
            <Link
              onClick={handleMenu}
              activeClass="underline decoration-4 decoration-blue-700 underline-offset-4"
              href="#"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Skills
            </Link>
            <Link
              onClick={handleMenu}
              activeClass="underline decoration-4 decoration-blue-700 underline-offset-4"
              href="#"
              to="work"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Work
            </Link>
            <Link
              onClick={handleMenu}
              activeClass="underline decoration-4 decoration-blue-700 underline-offset-4"
              href="#"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </div>
        </Fade>
      ) : null}
    </div>
  );
}

export default MobileNav;
