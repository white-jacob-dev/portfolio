import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { Fade as Hamburger } from 'hamburger-react';
import resume from '../Assets/resume.pdf';

function Navbar({ handleMenu, showMenu }) {
  const [introActive, setIntroActive] = useState(false);

  return (
    <div>
      <nav className="backdrop-blur-sm h-16 md:h-20 flex justify-between items-center fixed left-0 right-0 bg-white/95 z-50 transition-all duration-500">
        <Fade top delay={0}>
          <Link href="#" to="intro" spy={true} smooth={true} offset={0} duration={1000} className="ml-6 md:ml-12 flex flex-row ">
            <svg className="w-8 h-8 fill-black" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.88596 0.126797C3.84238 0.196551 4.22188 0.948394 4.7293 1.79756L5.65203 3.34162H9.03114C10.8897 3.34162 12.41 3.38854 12.4097 3.44604C12.4094 3.50354 12.2932 3.73842 12.1516 3.96815C12.0099 4.19788 11.7338 4.66778 11.538 5.01238C10.2981 7.19537 7.40794 12.0743 7.26338 12.2283C7.09556 12.407 6.58265 11.6454 5.07565 8.98043C4.90247 8.67413 4.53285 8.032 4.25418 7.55333L3.74762 6.68314H1.87381C0.829372 6.68314 0 6.7398 0 6.81109C0 6.8814 0.380769 7.5756 0.846154 8.3539C1.31154 9.13219 1.69231 9.79396 1.69231 9.82473C1.69231 9.85536 1.93445 10.2732 2.23046 10.7531C2.52647 11.2332 3.71067 13.2548 4.862 15.2458C6.01333 17.2368 7.00108 18.9177 7.05678 18.9812C7.16368 19.1029 7.41301 18.7128 9.30967 15.4546C9.95613 14.3443 10.9073 12.7153 11.4236 11.8346C12.5083 9.98456 13.9153 7.58075 16.4205 3.29748C17.3976 1.62672 18.1606 0.201285 18.1159 0.129999C18.0087 -0.0412536 3.99314 -0.0443165 3.88596 0.126797ZM16.9936 8.86515C16.2955 10.0631 15.5429 11.3624 15.321 11.7522C15.0992 12.1422 14.4805 13.1933 13.946 14.0881C13.4117 14.9829 12.9744 15.7575 12.9744 15.8094C12.9744 15.9195 14.6409 18.8129 14.7988 18.9769C14.8578 19.038 15.243 18.5054 15.6553 17.7934C16.0675 17.0814 16.8276 15.7783 17.3445 14.8977C17.8613 14.0171 18.8132 12.3881 19.4598 11.2777C20.1065 10.1674 20.9424 8.74903 21.3177 8.1257C21.693 7.50251 22 6.92289 22 6.83782C22 6.73215 21.4088 6.6837 20.1314 6.68509L18.2628 6.6869L16.9936 8.86515Z" />
            </svg>
          </Link>
        </Fade>
        <Fade top delay={400}>
          <div className="flex flex-row md:hidden mr-6">
            <Hamburger toggled={showMenu} toggle={handleMenu} />
          </div>
        </Fade>
        <div className="hidden md:flex flex-row items-center space-x-8 text-md mr-12">
          <Fade top delay={200}>
            <Link
              href="#intro"
              activeClass="underline decoration-4 decoration-blue-400 underline-offset-4 text-blue-700"
              to="intro"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-100}
              className="transition-all duration-500 hover:text-blue-700 tracking-tighter"
            >
              Intro
            </Link>
          </Fade>
          <Fade top delay={400}>
            <Link
              href="#about"
              activeClass="underline decoration-4 decoration-blue-400 underline-offset-4 text-blue-700"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-100}
              className=" transition-all duration-500 hover:text-blue-700 tracking-tighter"
            >
              About
            </Link>
          </Fade>
          <Fade top delay={600}>
            <Link
              href="#skills"
              activeClass="underline decoration-4 decoration-blue-400 underline-offset-4 text-blue-700"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-100}
              className=" transition-all duration-500 hover:text-blue-700 tracking-tighter"
            >
              Skills
            </Link>
          </Fade>

          <Fade top delay={800}>
            <Link
              href="#work"
              activeClass="underline decoration-4 decoration-blue-400 underline-offset-4 text-blue-700"
              to="work"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-100}
              className=" transition-all duration-500 hover:text-blue-700 tracking-tighter"
            >
              Work
            </Link>
          </Fade>

          <Fade top delay={1000}>
            <Link
              href="#contact"
              activeClass="underline decoration-4 decoration-blue-400 underline-offset-4 text-blue-700"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              className=" transition-all duration-500 hover:text-blue-700 tracking-tighter"
            >
              Contact
            </Link>
          </Fade>

          <Fade top delay={1200}>
            <a href={resume} target="_blank">
              <button className="self-start py-1 px-2 bg-blue-700 text-white rounded-lg shadow-lg text-md tracking-tight">Resume</button>
            </a>
          </Fade>
        </div>
      </nav>
    </div>
    // </HideScroll>
  );
}

export default Navbar;
