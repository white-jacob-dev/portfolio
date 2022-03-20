import React from 'react';
import Fade from 'react-reveal/Fade';
import gigupdesktop from '../Assets/gigupdesktop.png';
import gigupmobile from '../Assets/gigupmobile.png';
import goghdesktop from '../Assets/goghdesktop.png';
import goghmobile from '../Assets/goghmobile.png';
import iconicairdesktop from '../Assets/iconicairdesktop.png';
import iconicairmobile from '../Assets/iconicairmobile.png';
import fingy3ddesktop from '../Assets/fingy3ddesktop.png';
import fingy3dmobile from '../Assets/fingy3dmobile.png';
import react from '../Assets/react.svg';
import firebase from '../Assets/firebase.svg';
import mui from '../Assets/mui.svg';
import expo from '../Assets/expo.svg';
import nodejs from '../Assets/nodejs.svg';
import formik from '../Assets/formik.svg';
import sass from '../Assets/sass.svg';
import angular from '../Assets/angular.svg';
import jest from '../Assets/jest.svg';
import chartjs from '../Assets/chartjs.svg';
import typescript from '../Assets/typescript.svg';
import tailwind from '../Assets/tailwind.svg';
import jquery from '../Assets/jquery.svg';
import html from '../Assets/html.svg';
import css from '../Assets/css.svg';
import javascript from '../Assets/javascript.svg';

export function Work() {
  return (
    <div>
      <Fade clear delay={500}>
        <section id="work" className="h-fit flex flex-col justify-center space-y-4">
          <div className="flex flex-row space-x-4 items-center">
            <div className="text-left font-ooohbaby text-3xl opacity-25">&lt;work&gt;</div>
            <div className="h-0.5 w-full bg-gray-100"></div>
          </div>
          <div className="space-y-12 lg:hidden">
            <Fade clear delay={1500}>
              <div className="space-y-4 ">
                <div className="flex flex-col space-y-4 justify-between">
                  <div className="flex flex-row justify-between">
                    <div className="text-5xl font-bold text-left">GigUp</div>
                    <div className="text-xs basis-1/5 font-semibold text-right self-end">Web & Mobile Development</div>
                  </div>
                  <div className="basis-3/5 text-left text-white text-xs font-base py-3 px-4 bg-blue-600  rounded-lg shadow-lg">
                    A mobile application for job-seekers to be matched with part-time positions through criteria that they set, and a web portal for
                    employers to view job listings and potential candidates for hire. Also includes a super-admin portal for access to both
                    applications and all data.
                  </div>
                </div>
                <div>
                  <a href="https://apps.apple.com/us/app/gigup/id1603502689" target="_blank">
                    <img src={gigupmobile} className="w-full bg-slate-100 rounded-2xl shadow-lg"></img>
                  </a>
                </div>

                <div className="flex flex-row justify-start space-x-4">
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={react} className="max-h-6"></img>
                    </div>
                    <div className="text-center text-xxs">React</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={firebase} className="max-h-7"></img>
                    </div>
                    <div className="text-center text-xxs">Firebase</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={mui} className="max-h-6"></img>
                    </div>
                    <div className="text-center text-xxs">MUI</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={formik} className="max-h-6"></img>
                    </div>
                    <div className="text-center text-xxs">Formik</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={expo} className="max-h-5"></img>
                    </div>
                    <div className="text-center text-xxs">Expo</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 ">
                <div className="flex flex-col space-y-4 justify-between">
                  <div className="flex flex-row justify-between">
                    <div className="text-5xl font-bold text-left">Gogh</div>
                    <div className="text-xs basis-1/5 font-semibold text-right self-end">Web & Mobile Development</div>
                  </div>
                  <div className="basis-3/5 text-left text-white text-xs font-base py-3 px-4 bg-blue-600  rounded-lg shadow-lg">
                    A payment reconciliation platform that allows service providers to effortlessly create service payment plans with their customers
                    and allows customers to easily track their payment schedules. Includes a marketplace of services to browse through that fit a
                    customer's budget and needs.
                  </div>
                </div>
                <div>
                  <a href="https://apps.apple.com/us/app/gogh-tech/id1597648868" target="_blank">
                    <img src={goghmobile} className="w-full bg-slate-100 rounded-2xl shadow-lg"></img>
                  </a>
                </div>

                <div className="flex flex-row justify-start space-x-4">
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={react} className="max-h-6"></img>
                    </div>
                    <div className="text-center text-xxs">React</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={nodejs} className="max-h-6"></img>
                    </div>
                    <div className="text-center text-xxs">Node.js</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={sass} className="max-h-6"></img>
                    </div>
                    <div className="text-center text-xxs">Sass</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={formik} className="max-h-6"></img>
                    </div>
                    <div className="text-center text-xxs">Formik</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={expo} className="max-h-5"></img>
                    </div>
                    <div className="text-center text-xxs">Expo</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 ">
                <div className="flex flex-col space-y-4 justify-between">
                  <div className="flex flex-row justify-between">
                    <div className="text-5xl font-bold text-left">Iconic Air</div>
                    <div className="text-xs basis-1/5 font-semibold text-right self-end">Web Development</div>
                  </div>
                  <div className="basis-3/5 text-left text-white text-xs font-base py-3 px-4 bg-blue-600  rounded-lg shadow-lg">
                    Contracted with the U.S. Air Force and on the Forbes 30/30 list, Iconic Air pioneers a new way of emissions monitoring and data
                    reporting for the oil and gas industry. Runs on many custom built sensor components and uses Chart.js to help platform users
                    visualize their data in the format of their liking.
                  </div>
                </div>
                <div>
                  <a href="https://iconicair.io/" target="_blank">
                    <img src={iconicairmobile} className="w-full bg-slate-100 rounded-2xl shadow-lg"></img>
                  </a>
                </div>

                <div className="flex flex-row justify-start space-x-4">
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={angular} className="max-h-6"></img>
                    </div>
                    <div className="text-center text-xxs">Angular</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={typescript} className="max-h-5"></img>
                    </div>
                    <div className="text-center text-xxs">Typescript</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={tailwind} className="max-h-6"></img>
                    </div>
                    <div className="text-center text-xxs">Tailwind</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={firebase} className="max-h-7"></img>
                    </div>
                    <div className="text-center text-xxs">Firebase</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={chartjs} className="max-h-6"></img>
                    </div>
                    <div className="text-center text-xxs">Chart.js</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 ">
                <div className="flex flex-col space-y-4 justify-between">
                  <div className="flex flex-row justify-between">
                    <div className="text-5xl font-bold text-left">Fingy3D</div>
                    <div className="text-xs basis-1/5 font-semibold text-right self-end">Web Development</div>
                  </div>
                  <div className="basis-3/5 text-left text-white text-xs font-base py-3 px-4 bg-blue-600  rounded-lg shadow-lg">
                    Fingy3D aims to bring accessible and affordable finger prosthetics to everyone using 3D printing and a custom-built hand scanner.
                    The hand scanner uses a piece of 8"x11" paper and your phone's camera to accurately measure your finger prosthetic sizing, which
                    we can then use to custom print an affordable finger prosthetic.
                  </div>
                </div>
                <div>
                  <a href="https://www.fingy3d.com/" target="_blank">
                    <img src={fingy3dmobile} className="w-full bg-slate-100 rounded-2xl shadow-lg"></img>
                  </a>
                </div>

                <div className="flex flex-row justify-start space-x-4">
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={javascript} className="max-h-5"></img>
                    </div>
                    <div className="text-center text-xxs">JavaScript</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={html} className="max-h-7"></img>
                    </div>
                    <div className="text-center text-xxs">HTML</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={css} className="max-h-7"></img>
                    </div>
                    <div className="text-center text-xxs">CSS</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={jquery} className="max-h-6"></img>
                    </div>
                    <div className="text-center text-xxs">jQuery</div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="hidden lg:block space-y-4">
            <Fade clear delay={2000}>
              <div className="flex flex-row space-x-4">
                <div className="basis-1/2 flex flex-col text-left justify-center space-y-4">
                  <div className="text-6xl font-bold tracking-tight">GigUp</div>

                  <div className="text-2xl font-light tracking-tight -space-y-2">Web & Mobile Development</div>
                  <div className="py-6 px-6 bg-blue-600 text-white text-xl font-base tracking-tight rounded-lg shadow-lg ">
                    A mobile application for job-seekers to be matched with part-time positions through criteria that they set, and a web portal for
                    employers to view job listings and potential candidates for hire. Also includes a super-admin portal for access to both
                    applications and all data.
                  </div>
                  <div className="flex flex-row justify-start space-x-4">
                    <div className="bg-white rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={react} className="max-h-9"></img>
                      </div>
                      <div className="text-center text-xs">React</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={firebase} className="max-h-12"></img>
                      </div>
                      <div className="text-center text-xs">Firebase</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={mui} className="max-h-9"></img>
                      </div>
                      <div className="text-center text-xs">MUI</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={expo} className="max-h-8"></img>
                      </div>
                      <div className="text-center text-xs">Expo</div>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-col justify-center">
                  <a href="https://apps.apple.com/us/app/gigup/id1603502689" target="_blank">
                    <img src={gigupdesktop} className="w-full md:w-3/4 aspect-square rounded-3xl bg-white shadow-lg"></img>
                  </a>
                </div>
              </div>
            </Fade>
          </div>
          <div className="space-y-4">
            <div className="text-left font-ooohbaby text-3xl opacity-25">&lt;/work&gt;</div>
          </div>
        </section>
      </Fade>
    </div>
  );
}
export default Work;
