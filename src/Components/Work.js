import React from 'react';
import Fade from 'react-reveal/Fade';
import gigupdesktop from '../Assets/gigupdesktop.png';
import gigupmobile from '../Assets/gigupmobile.png';
import react from '../Assets/react.svg';
import firebase from '../Assets/firebase.svg';
import mui from '../Assets/mui.svg';
import expo from '../Assets/expo.svg';

export function Work() {
  return (
    <div>
      <Fade clear delay={500}>
        <section id="work" className="h-screen flex flex-col justify-center space-y-4">
          <div className="space-y-4 md:hidden">
            <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;work&gt;</div>
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
                    <img src={gigupmobile} className="w-full bg-white rounded-2xl shadow-lg"></img>
                  </a>
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
            </Fade>
          </div>
          <div className="hidden md:block space-y-4">
            <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;work&gt;</div>
            <Fade clear delay={2000}>
              <div className="flex flex-row space-x-4">
                <div className="basis-1/2 flex flex-col text-left justify-center space-y-4">
                  <div className="text-6xl font-bold tracking-tight">GigUp</div>

                  <div className="text-2xl font-light tracking-tight -space-y-2">Web & Mobile Development</div>
                  <div className="py-4 px-4 bg-blue-600 text-white text-xl font-base tracking-tight rounded-lg shadow-lg ">
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
                    <img src={gigupdesktop} className="w-full rounded-3xl bg-white shadow-lg"></img>
                  </a>
                </div>
              </div>
            </Fade>
          </div>
          <div className="space-y-4">
            <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;/work&gt;</div>
          </div>
        </section>
      </Fade>
    </div>
  );
}
export default Work;
