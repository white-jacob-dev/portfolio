import React from 'react';
import Fade from 'react-reveal/Fade';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import avatar from '../Assets/avatar.png';
import firebase from '../Assets/firebase.svg';
import react from '../Assets/react.svg';
import expo from '../Assets/expo.svg';
import vscode from '../Assets/vscode.svg';
import redux from '../Assets/redux.svg';
import bootstrap from '../Assets/bootstrap.svg';
import mui from '../Assets/mui.svg';
import tailwind from '../Assets/tailwind.svg';
import axios from '../Assets/axios.svg';
import formik from '../Assets/formik.svg';
import yarn from '../Assets/yarn.png';
import figma from '../Assets/figma.svg';
import typescript from '../Assets/typescript.svg';
import netlify from '../Assets/netlify.svg';
import git from '../Assets/git.svg';
import npm from '../Assets/npm.svg';
import illustrator from '../Assets/illustrator.svg';
import sass from '../Assets/sass.svg';
import less from '../Assets/less.png';
import chromedevtools from '../Assets/chromedevtools.svg';

import { Carousel } from 'react-responsive-carousel';

export function Skills({}) {
  return (
    <>
      <Fade clear delay={1000}>
        <div id="skills" className="h-screen space-y-4 flex flex-col justify-center">
          <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;about&gt;</div>
          <Fade clear delay={2000}>
            <div className="flex flex-col space-y-4 text-md font-light tracking-tight md:space-x-4 md:items-center">
              {/* <img src={avatar} className="scale-75 md:scale-50 overflow-hidden"></img> */}
              <div className="text-center text-xl font-medium">Here's some of the technologies I've used:</div>
              <div className="resize grid grid-cols-4 grid-rows-5 gap-y-2 gap-x-2 place-items-center text-sm ">
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center">
                    <img src={firebase} className="max-h-12"></img>
                  </div>
                  <div className="text-center font-semibold">Firebase</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-evenly transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={react} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-semibold">React</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={expo} className="max-h-8"></img>
                  </div>
                  <div className="text-center font-semibold">Expo</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={vscode} className="max-h-8"></img>
                  </div>
                  <div className="text-center font-semibold">VSCode</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={redux} className="max-h-8"></img>
                  </div>
                  <div className="text-center font-semibold">Redux</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={bootstrap} className="max-h-8"></img>
                  </div>
                  <div className="text-center font-semibold">Bootstrap</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={mui} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-semibold">MUI</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={tailwind} className="max-h-11"></img>
                  </div>
                  <div className="text-center font-semibold">Tailwind</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={axios} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-semibold">Axios</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={formik} className="max-h-10"></img>
                  </div>
                  <div className="text-center font-semibold">Formik</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={yarn} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-semibold">Yarn</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={figma} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-semibold">Figma</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={typescript} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-semibold tracking-tighter">Typescript</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={netlify} className="max-h-10"></img>
                  </div>
                  <div className="text-center font-semibold">Netlify</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={git} className="max-h-10"></img>
                  </div>
                  <div className="text-center font-semibold">Git</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={npm} className="max-h-5"></img>
                  </div>
                  <div className="text-center font-semibold">NPM</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={illustrator} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-semibold">Illustrator</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={sass} className="max-h-10"></img>
                  </div>
                  <div className="text-center font-semibold">Sass</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={less} className="max-h-7"></img>
                  </div>
                  <div className="text-center font-semibold">Less</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-3">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={chromedevtools} className="max-h-8"></img>
                  </div>
                  <div className="text-center font-semibold">CDT</div>
                </div>
              </div>
            </div>
          </Fade>
          <div className="text-left font-ooohbaby text-4xl py-4 opacity-25">&lt;/about&gt;</div>
        </div>
      </Fade>
    </>
  );
}

export default Skills;
