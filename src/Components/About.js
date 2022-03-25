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
import chartjs from '../Assets/chartjs.svg';
import angular from '../Assets/angular.svg';
import css from '../Assets/css.svg';
import html from '../Assets/html.svg';
import javascript from '../Assets/javascript.svg';
import jquery from '../Assets/jquery.svg';
import nodejs from '../Assets/nodejs.svg';
import photoshop from '../Assets/photoshop.svg';
import { Carousel } from 'react-responsive-carousel';
import avatar from '../Assets/avatar.png';

export function About({}) {
  return (
    <div>
      <section href="#about" id="about" className="h-fit space-y-8 flex flex-col justify-center">
        <div className="flex flex-row space-x-4 items-center">
          <Fade top delay={400}>
            <div className="text-left font-ooohbaby text-3xl text-slate-400">&lt;about&gt;</div>
            <div className="h-0.5 w-full lg:w-0 bg-gray-100 dark:bg-gray-700"></div>
          </Fade>
        </div>
        <div className="flex flex-col align-center items-start justify-center">
          <Fade top delay={800}>
            <img src={avatar} className="w-1/2 lg:w-1/5 "></img>
            <div className="h-0.5 w-1/2 lg:w-1/5 shadow-xl bg-blue-600"></div>
          </Fade>
          <div className="text-sm md:text-xl font-light tracking-tight whitespace-normal space-y-4 pt-4 dark:text-slate-200">
            <Fade clear delay={1200}>
              <div>
                <span className="font-bold text-blue-700">Hello!</span> My name is Jacob and{' '}
                <span className="text-blue-700 font-bold">I enjoy designing and building smooth experiences</span> for people all over the world.
              </div>
            </Fade>
            <Fade clear delay={1600}>
              <div>
                After spending most of my hours coding for fun during my aerospace engineering undergraduate, I realized that pursuing a computer
                science degree was definitely the right move for me. Hundreds of thousands of lines of code later,
                <span className="text-blue-700 font-bold"> I truly love what I do and always get excited for new projects and experiences</span>.
              </div>
            </Fade>
            <Fade clear delay={2000}>
              <div>
                I was lucky enough to be able to combine <span className="text-blue-700 font-bold">my two passions of design and programming</span>{' '}
                into a single career and because of that, I've had the joy of{' '}
                <span className="text-blue-700 font-bold">working with a wide variety of clients covering many different industries</span>. From
                crypto to medical, retail to agriculture, government to local and several others inbetween, being able to produce high-quality
                applications for the people I meet always brings me great joy.
              </div>
            </Fade>
            <Fade clear delay={2400}>
              <div>
                The breadth of my work has given me <span className="text-blue-700 font-bold">experience with many different technologies</span>. Here
                are some of the ones I've used recently:
              </div>
            </Fade>
          </div>
          <div className="mt-8 flex flex-col space-y-8 text-md font-light tracking-tight md:space-x-4">
            <Fade left cascade delay={2800}>
              <div className="pb-4 grid grid-cols-4 grid-rows-5 md:grid-cols-10 md:grid-rows-3 gap-y-2 gap-x-2 place-items-center text-xs">
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center">
                    <img src={firebase} className="max-h-12"></img>
                  </div>
                  <div className="text-center font-medium">Firebase</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={react} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-medium">React</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={expo} className="max-h-8"></img>
                  </div>
                  <div className="text-center font-medium">Expo</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={vscode} className="max-h-8"></img>
                  </div>
                  <div className="text-center font-medium">VSCode</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={redux} className="max-h-8"></img>
                  </div>
                  <div className="text-center font-medium">Redux</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={bootstrap} className="max-h-8"></img>
                  </div>
                  <div className="text-center font-medium">Bootstrap</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={mui} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-medium">MUI</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={tailwind} className="max-h-11"></img>
                  </div>
                  <div className="text-center font-medium">Tailwind</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={axios} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-medium">Axios</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={formik} className="max-h-10"></img>
                  </div>
                  <div className="text-center font-medium">Formik</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={yarn} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-medium">Yarn</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={figma} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-medium">Figma</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={typescript} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-medium tracking-tighter">Typescript</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={netlify} className="max-h-10"></img>
                  </div>
                  <div className="text-center font-medium">Netlify</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={git} className="max-h-10"></img>
                  </div>
                  <div className="text-center font-medium">Git</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={npm} className="max-h-5"></img>
                  </div>
                  <div className="text-center font-medium">NPM</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={illustrator} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-medium">Illustrator</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={photoshop} className="max-h-12"></img>
                  </div>
                  <div className="text-center font-medium">Photoshop</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={sass} className="max-h-10"></img>
                  </div>
                  <div className="text-center font-medium">Sass</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={less} className="max-h-7"></img>
                  </div>
                  <div className="text-center font-medium">Less</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={chromedevtools} className="max-h-8"></img>
                  </div>
                  <div className="text-center font-medium">CDT</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={angular} className="max-h-11"></img>
                  </div>
                  <div className="text-center font-medium">Angular</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={chartjs} className="max-h-12"></img>
                  </div>
                  <div className="text-center font-medium">Chart.js</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={css} className="max-h-10"></img>
                  </div>
                  <div className="text-center font-medium">CSS</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={html} className="max-h-10"></img>
                  </div>
                  <div className="text-center font-medium">HTML</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={javascript} className="max-h-9"></img>
                  </div>
                  <div className="text-center font-medium">JavaScript</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={jquery} className="max-h-8"></img>
                  </div>
                  <div className="text-center font-medium">jQuery</div>
                </div>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-between transition duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={nodejs} className="max-h-12"></img>
                  </div>
                  <div className="text-center font-medium">Node.js</div>
                </div>
              </div>
            </Fade>
          </div>

          {/* <div className="lg:flex lg:flex-row lg:justify-center -mt-12 lg:mt-0">
                <img src={avatar} className="lg:h-full  lg:bg-white lg:rounded-3xl lg:shadow-lg sm:max-h-60 lg:max-h-full"></img>
              </div> */}
          {/* <div className="basis-1/2">
                <div className="flex flex-col space-y-4 text-md font-light tracking-tight md:space-x-4 md:items-center">
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
              </div> */}
        </div>
        <Fade bottom delay={3200}>
          <div className="text-left font-ooohbaby text-3xl text-slate-400">&lt;/about&gt;</div>
        </Fade>
      </section>
    </div>
  );
}

export default About;
