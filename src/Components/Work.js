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
import { ReactComponent as Link } from '../Assets/link.svg';
import { ReactComponent as Github } from '../Assets/github.svg';
import link from '../Assets/link.svg';

export function Work() {
  return (
    <div>
      <section id="work" className="h-fit flex flex-col justify-center space-y-8">
        <Fade top delay={400}>
          <div className="flex flex-row space-x-4 items-center">
            <div className="text-left font-ooohbaby text-3xl text-slate-400">&lt;work&gt;</div>
            <div className="h-0.5 lg:w-0 bg-gray-100"></div>
          </div>
        </Fade>
        <div className="space-y-12 lg:hidden">
          <div className="space-y-4 ">
            <div className="flex flex-col space-y-4 justify-between">
              <div className="flex flex-row justify-between">
                <Fade clear delay={800}>
                  <div className="text-5xl font-bold text-left dark:text-slate-200">GigUp</div>
                </Fade>
                <Fade clear delay={1200}>
                  <div className="text-xs basis-1/5 font-semibold text-right self-end dark:text-slate-200">Web & Mobile Development</div>
                </Fade>
              </div>
              <Fade clear delay={1600}>
                <div className="basis-3/5 text-left text-white text-xs font-base py-3 px-4 bg-blue-600  rounded-lg shadow-lg">
                  A mobile application for job-seekers to be matched with part-time positions through criteria that they set, and a web portal for
                  employers to view job listings and potential candidates for hire. Also includes a super-admin portal for access to both applications
                  and all data.
                </div>
              </Fade>
            </div>
            <Fade clear delay={2000}>
              <div>
                <a href="https://apps.apple.com/us/app/gigup/id1603502689" target="_blank" className="relative z-0">
                  <img src={gigupmobile} className="w-full bg-slate-100 dark:bg-slate-900 rounded-2xl shadow-lg"></img>
                  <div className="absolute top-2 left-2 lg:h-10 lg:w-10 rounded-full lg:bg-blue-700 shadow-xl z-10 flex justify-center items-center">
                    <img src={link} className="h-6"></img>
                  </div>
                </a>
              </div>
            </Fade>

            <div className="flex flex-row justify-start space-x-4">
              <Fade clear delay={2400}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={react} className="max-h-6"></img>
                  </div>
                  <div className="text-center text-xxs">React</div>
                </div>
              </Fade>
              <Fade clear delay={2800}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={firebase} className="max-h-7"></img>
                  </div>
                  <div className="text-center text-xxs">Firebase</div>
                </div>
              </Fade>
              <Fade clear delay={3200}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={mui} className="max-h-6"></img>
                  </div>
                  <div className="text-center text-xxs">MUI</div>
                </div>
              </Fade>{' '}
              <Fade clear delay={3600}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={formik} className="max-h-6"></img>
                  </div>
                  <div className="text-center text-xxs">Formik</div>
                </div>
              </Fade>
              <Fade clear delay={4000}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={expo} className="max-h-5"></img>
                  </div>
                  <div className="text-center text-xxs">Expo</div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 ">
            <div className="flex flex-col space-y-4 justify-between">
              <div className="flex flex-row justify-between">
                <Fade clear delay={800}>
                  <div className="text-5xl font-bold text-left dark:text-slate-200">Gogh</div>
                </Fade>
                <Fade clear delay={1200}>
                  <div className="text-xs basis-1/5 font-semibold text-right self-end dark:text-slate-200">Web & Mobile Development</div>
                </Fade>
              </div>
              <Fade clear delay={1600}>
                <div className="basis-3/5 text-left text-white text-xs font-base py-3 px-4 bg-blue-600  rounded-lg shadow-lg">
                  A payment reconciliation platform that allows service providers to effortlessly create service payment plans with their customers
                  and allows customers to easily track their payment schedules. Includes a marketplace of services to browse through that fit a
                  customer's budget and needs.
                </div>
              </Fade>
            </div>
            <Fade clear delay={2000}>
              <div>
                <a href="https://apps.apple.com/us/app/gogh-tech/id1597648868" target="_blank" className="relative z-0">
                  <img src={goghmobile} className="w-full bg-slate-100 dark:bg-slate-900 rounded-2xl shadow-lg"></img>
                  <div className="absolute top-2 left-2 lg:h-10 lg:w-10 rounded-full bg-blue-700 shadow-xl border-white z-10 flex justify-center items-center">
                    <img src={link} className="h-6"></img>
                  </div>
                </a>
              </div>
            </Fade>

            <div className="flex flex-row justify-start space-x-4">
              <Fade clear delay={2400}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={react} className="max-h-6"></img>
                  </div>
                  <div className="text-center text-xxs">React</div>
                </div>
              </Fade>
              <Fade clear delay={2800}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={nodejs} className="max-h-6"></img>
                  </div>
                  <div className="text-center text-xxs">Node.js</div>
                </div>
              </Fade>
              <Fade clear delay={3200}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={sass} className="max-h-6"></img>
                  </div>
                  <div className="text-center text-xxs">Sass</div>
                </div>
              </Fade>
              <Fade clear delay={3600}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={formik} className="max-h-6"></img>
                  </div>
                  <div className="text-center text-xxs">Formik</div>
                </div>
              </Fade>
              <Fade clear delay={4000}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={expo} className="max-h-5"></img>
                  </div>
                  <div className="text-center text-xxs">Expo</div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 ">
            <div className="flex flex-col space-y-4 justify-between">
              <div className="flex flex-row justify-between">
                <Fade clear delay={800}>
                  <div className="text-5xl font-bold text-left dark:text-slate-200">Iconic Air</div>
                </Fade>
                <Fade clear delay={1200}>
                  <div className="text-xs basis-1/5 font-semibold text-right self-end dark:text-slate-200">Web Development</div>
                </Fade>
              </div>
              <Fade clear delay={1600}>
                <div className="basis-3/5 text-left text-white text-xs font-base py-3 px-4 bg-blue-600  rounded-lg shadow-lg">
                  Contracted with the U.S. Air Force and on the Forbes 30/30 list, Iconic Air pioneers a new way of emissions monitoring and data
                  reporting for the oil and gas industry. Runs on many custom built sensor components and uses Chart.js to help platform users
                  visualize their data in the format of their liking.
                </div>
              </Fade>
            </div>
            <Fade clear delay={2000}>
              <div>
                <a href="https://iconicair.io/" target="_blank" className="relative z-0">
                  <img src={iconicairmobile} className="w-full bg-slate-100 dark:bg-slate-900 rounded-2xl shadow-lg"></img>
                  <div className="absolute top-2 left-2 lg:h-10 lg:w-10 rounded-full bg-blue-700 shadow-xl border-white z-10 flex justify-center items-center">
                    <img src={link} className="h-6"></img>
                  </div>
                </a>
              </div>
            </Fade>

            <div className="flex flex-row justify-start space-x-4">
              <Fade clear delay={2400}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={angular} className="max-h-6"></img>
                  </div>
                  <div className="text-center text-xxs">Angular</div>
                </div>
              </Fade>
              <Fade clear delay={2800}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={typescript} className="max-h-5"></img>
                  </div>
                  <div className="text-center text-xxs">Typescript</div>
                </div>
              </Fade>
              <Fade clear delay={3200}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={tailwind} className="max-h-6"></img>
                  </div>
                  <div className="text-center text-xxs">Tailwind</div>
                </div>
              </Fade>
              <Fade clear delay={3600}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={firebase} className="max-h-7"></img>
                  </div>
                  <div className="text-center text-xxs">Firebase</div>
                </div>
              </Fade>
              <Fade clear delay={4000}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={chartjs} className="max-h-6"></img>
                  </div>
                  <div className="text-center text-xxs">Chart.js</div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="space-y-4 ">
            <div className="flex flex-col space-y-4 justify-between">
              <div className="flex flex-row justify-between">
                <Fade clear delay={800}>
                  <div className="text-5xl font-bold text-left dark:text-slate-200">Fingy3D</div>
                </Fade>{' '}
                <Fade clear delay={1200}>
                  <div className="text-xs basis-1/5 font-semibold text-right self-end dark:text-slate-200">Web Development</div>
                </Fade>
              </div>
              <Fade clear delay={1600}>
                <div className="basis-3/5 text-left text-white text-xs font-base py-3 px-4 bg-blue-600  rounded-lg shadow-lg">
                  Fingy3D aims to bring accessible and affordable finger prosthetics to everyone using 3D printing and a custom-built hand scanner.
                  The hand scanner uses a piece of 8"x11" paper and your phone's camera to accurately measure your finger prosthetic sizing, which we
                  can then use to custom print an affordable finger prosthetic.
                </div>
              </Fade>
            </div>
            <Fade clear delay={2000}>
              <div>
                <a href="https://www.fingy3d.com/" target="_blank" className="relative z-0">
                  <img src={fingy3dmobile} className="w-full bg-slate-100 dark:bg-slate-900 rounded-2xl shadow-lg"></img>
                  <div className="absolute top-2 left-2 lg:h-10 lg:w-10 rounded-full bg-blue-700 shadow-xl border-white z-10 flex justify-center items-center">
                    <img src={link} className="h-6"></img>
                  </div>
                </a>
              </div>
            </Fade>

            <div className="flex flex-row justify-start space-x-4">
              <Fade clear delay={2400}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={javascript} className="max-h-5"></img>
                  </div>
                  <div className="text-center text-xxs">JavaScript</div>
                </div>
              </Fade>{' '}
              <Fade clear delay={2800}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={html} className="max-h-7"></img>
                  </div>
                  <div className="text-center text-xxs">HTML</div>
                </div>
              </Fade>{' '}
              <Fade clear delay={3200}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={css} className="max-h-7"></img>
                  </div>
                  <div className="text-center text-xxs">CSS</div>
                </div>
              </Fade>{' '}
              <Fade clear delay={3600}>
                <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-12 h-12 flex flex-col p-1 justify-evenly  transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={jquery} className="max-h-6"></img>
                  </div>
                  <div className="text-center text-xxs">jQuery</div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="w-full bg-white h-fit rounded-xl border-4 border-blue-600 shadow-lg py-3 px-4">
            <div className="flex flex-row justify-between items-center pb-4">
              <div className="text-5xl font-bold">Mirror</div>
              <div className="flex flex-row space-x-4 items-center">
                <div>
                  <a href="https://github.com/white-jacob-dev/mirror" target="_blank">
                    <Github />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-xs text-blue-700">
              A project made to update me on FC Barcelona's next match information, including formatted date of next match, formatted kickoff time in
              EST, opponent, location, countdown timer, and a complex, purely vanilla dark mode animation. A neomorphic design was used throughout and
              puppeteer was used to fetch the data from FC Barcelona's official website.
            </div>
          </div>
          <div className="w-full bg-white h-fit rounded-xl border-4 border-blue-600 shadow-lg py-3 px-4">
            <div className="flex flex-row justify-between items-center pb-4">
              <div className="text-5xl font-bold">Food</div>
              <div className="flex flex-row space-x-4 items-center">
                <div>
                  <a href="https://github.com/white-jacob-dev/food" target="_blank">
                    <Github />
                  </a>
                </div>
                <div>
                  <a href="https://food-solver.netlify.app/" target="_blank">
                    <Link className="w-7" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-xs text-blue-700">
              A project I made to solve the ancient problem of not being able to decide where to eat with your significant other. The project uses
              React, Redux and the Google Places API to generate a list of the 20 closest restaurants to your current location that you can then sort
              through with your partner systematically.
            </div>
          </div>
          <div className="w-full bg-white h-fit rounded-xl border-4 border-blue-600 shadow-lg py-3 px-4">
            <div className="flex flex-row justify-between items-center pb-4">
              <div className="text-5xl font-bold">Fire-Auth</div>
              <div className="flex flex-row space-x-4 items-center">
                <div>
                  <a href="https://github.com/white-jacob-dev/mirror" target="_blank">
                    <Github />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/white-jacob-dev/mirror" target="_blank">
                    <Link className="w-7" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-xs text-blue-700">
              A small project that shows a fully functioning authentication front-end using firebase. Includes a persistent user log in as well as
              password resets and a log out system. Built with React, React Paper, and Firebase.
            </div>
          </div>
          <div className="w-full bg-white h-fit rounded-xl border-4 border-blue-600 shadow-lg py-3 px-4">
            <div className="flex flex-row justify-between items-center pb-4">
              <div className="text-5xl font-bold">Arnold</div>
              <div className="flex flex-row space-x-4 items-center">
                <div>
                  <a href="https://github.com/white-jacob-dev/arnold" target="_blank">
                    <Github />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-xs text-blue-700">
              A mobile application built to be a simple, gym exercise tracker. Includes a list of recent exercises that contains date, weight, sets
              and reps, as well as folders that can contain multiple exercises that belong to a certain category (legs, arms, shoulders, etc.). Built
              with react-native.
            </div>
          </div>
        </div>
        <div className="hidden lg:block space-y-32">
          <div className="flex flex-row space-evenly space-x-4">
            <div className="w-fit flex flex-col text-left justify-center space-y-4">
              <Fade clear delay={800}>
                <div className="text-5xl font-bold tracking-tight dark:text-slate-200">GigUp</div>
              </Fade>{' '}
              <Fade clear delay={1200}>
                <div className="text-2xl font-light tracking-tight -space-y-2 dark:text-slate-200">Web & Mobile Development</div>
              </Fade>{' '}
              <Fade clear delay={1600}>
                <div className="py-6 px-6 bg-blue-600 text-white text-lg font-base tracking-tight rounded-lg shadow-lg ">
                  A mobile application for job-seekers to be matched with part-time positions through criteria that they set, and a web portal for
                  employers to view job listings and potential candidates for hire. Also includes a super-admin portal for access to both applications
                  and all data.
                </div>
              </Fade>
              <div className="flex flex-row justify-start space-x-4">
                <Fade clear delay={2000}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={react} className="max-h-9"></img>
                    </div>
                    <div className="text-center text-xs">React</div>
                  </div>
                </Fade>{' '}
                <Fade clear delay={2400}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={firebase} className="max-h-12"></img>
                    </div>
                    <div className="text-center text-xs">Firebase</div>
                  </div>
                </Fade>{' '}
                <Fade clear delay={2800}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={mui} className="max-h-9"></img>
                    </div>
                    <div className="text-center text-xs">MUI</div>
                  </div>
                </Fade>{' '}
                <Fade clear delay={3200}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={expo} className="max-h-8"></img>
                    </div>
                    <div className="text-center text-xs">Expo</div>
                  </div>
                </Fade>
              </div>
            </div>
            <Fade right delay={3600}>
              <div>
                <a className="flex flex-row justify-end items-end relative" href="https://apps.apple.com/us/app/gigup/id1603502689" target="_blank">
                  <img src={gigupdesktop} className="w-fit rounded-3xl bg-slate-100 dark:bg-slate-900 shadow-lg z-0"></img>
                  <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-blue-700 shadow-xl border-white z-10 flex justify-center items-center">
                    <img src={link} className="h-6"></img>
                  </div>
                </a>
              </div>
            </Fade>
          </div>
          <div className="flex flex-row space-evenly space-x-4">
            <div className="w-fit flex flex-col text-left justify-center space-y-4">
              <Fade clear delay={800}>
                <div className="text-5xl font-bold tracking-tight dark:text-slate-200">Gogh</div>
              </Fade>{' '}
              <Fade clear delay={1200}>
                <div className="text-2xl font-light tracking-tight -space-y-2 dark:text-slate-200">Web & Mobile Development</div>
              </Fade>{' '}
              <Fade clear delay={1600}>
                <div className="py-6 px-6 bg-blue-600 text-white text-lg font-base tracking-tight rounded-lg shadow-lg ">
                  A payment reconciliation platform that allows service providers to effortlessly create service payment plans with their customers
                  and allows customers to easily track their payment schedules. Includes a marketplace of services to browse through that fit a
                  customer's budget and needs.
                </div>
              </Fade>
              <div className="flex flex-row justify-start space-x-4">
                <Fade clear delay={2000}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={react} className="max-h-9"></img>
                    </div>
                    <div className="text-center text-xs">React</div>
                  </div>
                </Fade>{' '}
                <Fade clear delay={2400}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={nodejs} className="max-h-12"></img>
                    </div>
                    <div className="text-center text-xs">Node.js</div>
                  </div>
                </Fade>{' '}
                <Fade clear delay={2800}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={sass} className="max-h-11"></img>
                    </div>
                    <div className="text-center text-xs">Sass</div>
                  </div>
                </Fade>{' '}
                <Fade clear delay={3200}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={formik} className="max-h-9"></img>
                    </div>
                    <div className="text-center text-xs">Formik</div>
                  </div>
                </Fade>{' '}
                <Fade clear delay={3600}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={expo} className="max-h-8"></img>
                    </div>
                    <div className="text-center text-xs">Expo</div>
                  </div>
                </Fade>
              </div>
            </div>
            <Fade right delay={4000}>
              <div>
                <a
                  className="w-full flex flex-row justify-end items-end relative"
                  href="https://apps.apple.com/us/app/gogh-tech/id1597648868"
                  target="_blank"
                >
                  <img src={goghdesktop} className="rounded-3xl dark:bg-slate-900 shadow-lg"></img>
                  <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-blue-700 shadow-xl border-white z-10 flex justify-center items-center">
                    <img src={link} className="h-6"></img>
                  </div>
                </a>
              </div>
            </Fade>
          </div>
          <div className="flex flex-row space-evenly space-x-4">
            <div className="w-fit flex flex-col text-left justify-center space-y-4">
              <Fade clear delay={800}>
                <div className="text-5xl font-bold tracking-tight dark:text-slate-200">Iconic Air</div>
              </Fade>{' '}
              <Fade clear delay={1200}>
                <div className="text-2xl font-light tracking-tight -space-y-2 dark:text-slate-200">Web & Mobile Development</div>
              </Fade>{' '}
              <Fade clear delay={1600}>
                <div className="py-6 px-6 bg-blue-600 text-white text-lg font-base tracking-tight rounded-lg shadow-lg ">
                  Contracted with the U.S. Air Force and on the Forbes 30/30 list, Iconic Air pioneers a new way of emissions monitoring and data
                  reporting for the oil and gas industry. Runs on many custom built sensor components and uses Chart.js to help platform users
                  visualize their data in the format of their liking.
                </div>
              </Fade>
              <div className="flex flex-row justify-start space-x-4">
                <Fade clear delay={2000}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={angular} className="max-h-11"></img>
                    </div>
                    <div className="text-center text-xs">Angular</div>
                  </div>
                </Fade>
                <Fade clear delay={2400}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={typescript} className="max-h-8"></img>
                    </div>
                    <div className="text-center text-xs">Typescript</div>
                  </div>
                </Fade>
                <Fade clear delay={2800}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={tailwind} className="max-h-11"></img>
                    </div>
                    <div className="text-center text-xs">Tailwind</div>
                  </div>
                </Fade>
                <Fade clear delay={3200}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={firebase} className="max-h-12"></img>
                    </div>
                    <div className="text-center text-xs">Firebase</div>
                  </div>
                </Fade>
                <Fade clear delay={3600}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={chartjs} className="max-h-11"></img>
                    </div>
                    <div className="text-center text-xs">Chart.js</div>
                  </div>
                </Fade>
              </div>
            </div>
            <Fade right delay={4000}>
              <div>
                <a className="w-full flex flex-row justify-end items-end relative" href="https://iconicair.io/" target="_blank">
                  <img src={iconicairdesktop} className="rounded-3xl bg-slate-100 dark:bg-slate-900 shadow-lg"></img>
                  <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-blue-700 shadow-xl border-white z-10 flex justify-center items-center">
                    <img src={link} className="h-6"></img>
                  </div>
                </a>
              </div>
            </Fade>
          </div>
          <div className="flex flex-row space-evenly space-x-4">
            <div className="w-fit flex flex-col text-left justify-center space-y-4">
              <Fade clear delay={800}>
                <div className="text-5xl font-bold tracking-tight dark:text-slate-200">Fingy3D</div>
              </Fade>
              <Fade clear delay={1200}>
                <div className="text-2xl font-light tracking-tight -space-y-2 dark:text-slate-200">Web & Mobile Development</div>
              </Fade>
              <Fade clear delay={1600}>
                <div className="py-6 px-6 bg-blue-600 text-white text-lg font-base tracking-tight rounded-lg shadow-lg ">
                  Fingy3D aims to bring accessible and affordable finger prosthetics to everyone using 3D printing and a custom-built hand scanner.
                  The hand scanner uses a piece of 8"x11" paper and your phone's camera to accurately measure your finger prosthetic sizing, which we
                  can then use to custom print an affordable finger prosthetic.
                </div>
              </Fade>
              <div className="flex flex-row justify-start space-x-4">
                <Fade clear delay={2000}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={javascript} className="max-h-8"></img>
                    </div>
                    <div className="text-center text-xs">JavaScript</div>
                  </div>
                </Fade>
                <Fade clear delay={2400}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={html} className="max-h-11"></img>
                    </div>
                    <div className="text-center text-xs">HTML</div>
                  </div>
                </Fade>
                <Fade clear delay={2800}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={css} className="max-h-11"></img>
                    </div>
                    <div className="text-center text-xs">CSS</div>
                  </div>
                </Fade>
                <Fade clear delay={3200}>
                  <div className="bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-lg w-20 h-20 flex flex-col p-2 justify-evenly  transition-all duration-500 hover:scale-110">
                    <div className="w-full h-full flex justify-center items-center">
                      <img src={jquery} className="max-h-8"></img>
                    </div>
                    <div className="text-center text-xs">jQuery</div>
                  </div>
                </Fade>
              </div>
            </div>
            <Fade right delay={3600}>
              <div>
                <a className="w-full flex flex-row justify-end items-end relative" href="https://www.fingy3d.com/" target="_blank">
                  <img src={fingy3ddesktop} className="rounded-3xl bg-slate-100 dark:bg-slate-900 shadow-lg "></img>
                  <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-blue-700 shadow-xl border-white z-10 flex justify-center items-center">
                    <img src={link} className="h-6"></img>
                  </div>
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <div className="pt-4">
          <div className="text-left font-ooohbaby text-3xl text-slate-400">&lt;/work&gt;</div>
        </div>
      </section>
    </div>
  );
}
export default Work;
