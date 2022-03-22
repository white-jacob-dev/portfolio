import React, { Suspense } from 'react';
import Fade from 'react-reveal/Fade';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
import avatar from '../Assets/avatar.png';

export function About({}) {
  return (
    <div>
      <Fade clear delay={400}>
        <section href="#about" id="about" className="h-screen md:h-fit lg:h-fit space-y-4 flex flex-col justify-center">
          <div className="flex flex-row space-x-4 items-center">
            <div className="text-left font-ooohbaby text-3xl opacity-25">&lt;about&gt;</div>
            <div className="h-0.5 w-full lg:w-1/4 bg-gray-100"></div>
          </div>
          <Fade clear delay={800}>
            <div className="flex flex-col align-center items-center justify-center lg:flex-row lg:items-center lg:space-x-6">
              <div className="lg:flex lg:flex-row lg:justify-center -mt-12 lg:mt-0">
                <img src={avatar} className="lg:h-full  lg:bg-white lg:rounded-3xl lg:shadow-lg sm:max-h-60 lg:max-h-full"></img>
              </div>
              <div className="basis-1/2">
                <div className="flex flex-col space-y-4 text-md font-light tracking-tight md:space-x-4 md:items-center">
                  {/* <img src={avatar} className="scale-75 md:scale-50 overflow-hidden"></img> */}
                  <div className="shadow-lg rounded-xl">
                    <div className="w-full flex items-center h-8 space-x-1.5 px-3 rounded-t-xl bg-white border-b-2 border-slate-50">
                      <div className="w-2.5 h-2.5 bg-red-500 #FF5F57 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex flex-row w-screen lg:w-fit">
                      <code className="hidden w-10 md:block bg-white text-slate-600 flex-col text-right align-center py-4 px-3 rounded-bl-xl border-r-2 border-slate-50">
                        1 2 3 4 5 6 7 8 9 10
                      </code>
                      <Carousel
                        interval={5000}
                        emulateTouch={true}
                        showStatus={false}
                        showArrows={false}
                        showThumbs={false}
                        className="w-full bg-white text-slate-700 pr-8 text-xs md:text-base rounded-b-xl md:rounded-bl-none flex flex-col pl-8 pb-4 "
                      >
                        <div className="text-left flex flex-col py-4">
                          <code className="text-blue-700">
                            <code className="text-slate-700">&lt;</code>greeting<code className="text-slate-700">&gt;</code>
                          </code>
                          <code className="pl-4"> Hello! My name is Jacob and I love creating experiences on the web that excite people.</code>
                          <code className="text-blue-700">
                            <code className="text-slate-700">&lt;</code>/greeting<code className="text-slate-700">&gt;</code>
                          </code>
                        </div>
                        <div className="text-left flex flex-col py-4 pb-16">
                          <code className="text-blue-700">
                            <code className="text-slate-700">&lt;</code>about<code className="text-slate-700">&gt;</code>
                          </code>
                          <code className="pl-4">
                            After spending most of my hours coding for fun during my aerospace engineering undergraduate, I realized that pursuing a
                            computer science degree was definitely the right move for me.
                          </code>
                          <code className="text-blue-700">
                            <code className="text-slate-700">&lt;</code>/about<code className="text-slate-700">&gt;</code>
                          </code>
                        </div>
                        <div className="text-left flex flex-col py-4 pr-8">
                          <code className="text-blue-700">
                            <code className="text-slate-700">&lt;</code>about<code className="text-slate-700">&gt;</code>
                          </code>
                          <code className="pl-4">
                            Hundreds of thousands of lines of code later, I truly love what I do and always get excited for new projects and
                            experiences.
                          </code>
                          <code className="text-blue-700">
                            <code className="text-slate-700">&lt;</code>/about<code className="text-slate-700">&gt;</code>
                          </code>
                        </div>
                        <div className="text-left flex flex-col py-4 pr-8">
                          <code className="text-blue-700">
                            <code className="text-slate-700">&lt;</code>about<code className="text-slate-700">&gt;</code>
                          </code>
                          <code className="pl-4">
                            I've had the joy of working with a wide variety of clients covering many different industries, and as a result, have been
                            exposed to a miriad of technologies.
                          </code>
                          <code className="text-blue-700">
                            <code className="text-slate-700">&lt;</code>/about<code className="text-slate-700">&gt;</code>
                          </code>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <div className="text-left font-ooohbaby text-3xl opacity-25">&lt;/about&gt;</div>
        </section>
      </Fade>
    </div>
  );
}

export default About;
