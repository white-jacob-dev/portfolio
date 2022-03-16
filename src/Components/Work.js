import { MobileWork } from './Work';
import React from 'react';
import Fade from 'react-reveal/Fade';
import projects from '../Assets/projects.png';
export function Work() {
  return (
    <div>
      <Fade clear delay={1000}>
        <section id="work" className="h-screen flex flex-col justify-center space-y-4">
          <div className="space-y-4 md:hidden">
            <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;work&gt;</div>
            <Fade clear delay={2000}>
              <div className="space-y-4 ">
                <div className="flex flex-row items-center space-x-4 justify-between">
                  <div className="basis-2/5 text-center space-y-4">
                    <div className="-space-y-1">
                      <div className="text-xs font-semibold text-left">Web & Mobile Project</div>
                      <div className="text-5xl font-bold text-left">Gogh</div>
                    </div>
                  </div>
                  <div className="basis-3/5 text-center text-white text-xs font-semibold py-3 px-4 bg-blue-600  rounded-lg">
                    MOBILE ipsum dolor sit amet, consectetur adipiscing elit. Consequat turpis vestibulum purus quam et eget. Enim, ac venenatis, in
                  </div>
                </div>

                <div className="bg-blue-500">
                  <img src={projects} className="w-full opacity-25 hover:opacity-100 transition ease-in-out duration-500"></img>
                </div>
                <div className="flex flex-row justify-around font-semibold text-sm">
                  <div>React</div>
                  <div>Formik</div>
                  <div>Axios</div>
                  <div>Redux</div>
                  <div>Expo</div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="hidden md:block space-y-4">
            <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;work&gt;</div>
            <Fade clear delay={2000}>
              <div className="flex flex-row">
                <div className="basis-1/2 bg-blue-500">
                  <img src={projects} className="w-full opacity-25 hover:opacity-100 transition ease-in-out duration-500"></img>
                </div>
                <div className="basis-1/2 flex flex-col text-right justify-center space-y-4">
                  <div>Mobile Project</div>
                  <div>Project 1</div>
                  <div className="py-2 px-4 bg-blue-600 text-white rounded-lg">
                    DESKTOP ipsum dolor sit amet, consectetur adipiscing elit. Consequat turpis vestibulum purus quam et eget. Enim, ac venenatis, in
                  </div>
                  <div className="flex flex-row justify-end space-x-4">
                    <div>React Native</div>
                    <div>Material Design</div>
                    <div>Firebase</div>
                    <div>Expo</div>
                  </div>
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
