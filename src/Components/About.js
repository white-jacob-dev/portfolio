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

export function About({}) {
  return (
    <>
      <Fade clear>
        <div id="about" className="h-screen space-y-4 flex flex-col justify-center">
          <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;about&gt;</div>
          <div className="flex flex-col space-y-4 text-md font-light tracking-tight md:flex-row md:space-x-4 md:items-center">
            <img src={avatar} className=" md:max-h-96"></img>
            <div className="space-y-4">
              <Carousel dynamicHeight={true} showStatus={false} className="-space-y-6">
                <div key="slide1" className="px-12 pb-12 pt-4 h-fit">
                  Hello! My name is Jacob and I love creating experiences on the web that excite people.
                </div>
                <div key="slide2" className="px-12 pb-12 pt-4 h-fit">
                  After spending most of my hours coding for fun during my aerospace engineering undergraduate, I realized that pursuing a computer
                  science degree was definitely the right move for me.
                </div>
                <div key="slide1" className="px-12 pb-12 pt-4 h-fit">
                  Hundreds of thousands of lines of code later, I truly love what I do and always get excited for new projects and experiences.
                </div>
                <div key="slide2" className="px-12 pb-12 pt-4 h-fit">
                  I've had the joy of working with a wide variety of clients covering many different industries, and as a result, have been exposed to
                  a miriad of technologies.
                </div>
              </Carousel>
              <Fade cascade bottom>
                <div className="text-center">Here's some of the technologies I've used:</div>
                <div className="grid grid-cols-5 grid-rows-4 place-items-center border-4 rounded-lg">
                  <img src={firebase} className="max-h-8"></img>
                  <img src={react} className="max-h-6"></img>
                  <img src={expo} className="max-h-5"></img>
                  <img src={vscode} className="max-h-5"></img>
                  <img src={redux} className="max-h-5"></img>
                  <img src={bootstrap} className="max-h-5"></img>
                  <img src={mui} className="max-h-6"></img>
                  <img src={tailwind} className="max-h-7"></img>
                  <img src={axios} className="max-h-6"></img>
                  <img src={formik} className="max-h-7"></img>
                  <img src={yarn} className="max-h-6"></img>
                  <img src={figma} className="max-h-6"></img>
                  <img src={typescript} className="max-h-6"></img>
                  <img src={netlify} className="max-h-7"></img>
                  <img src={git} className="max-h-6"></img>
                  <img src={npm} className="max-h-4"></img>
                  <img src={illustrator} className="max-h-6"></img>
                  <img src={sass} className="max-h-6"></img>
                  <img src={less} className="max-h-5"></img>
                  <img src={chromedevtools} className="max-h-5"></img>
                </div>
              </Fade>
            </div>
          </div>
          <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;/about&gt;</div>
        </div>
      </Fade>
    </>
  );
}

export default About;
