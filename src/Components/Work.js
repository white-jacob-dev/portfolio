import React from 'react';

export function Work({ project }) {
  return (
    <>
      <div className="space-y-4 md:hidden">
        <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;work&gt;</div>
        <div className="flex flex-row items-center">
          <div className="basis-1/2 text-center space-y-4">
            <div>Mobile Project</div>
            <div>Project 1</div>
          </div>
          <div className="basis-1/2 text-center py-2 px-4 bg-blue-600 text-white rounded-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat turpis vestibulum purus quam et eget. Enim, ac venenatis, in
          </div>
        </div>

        <img src={project}></img>
        <div className="flex flex-row justify-between">
          <div>React Native</div>
          <div>Material Design</div>
          <div>Firebase</div>
          <div>Expo</div>
        </div>

        <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;/work&gt;</div>
      </div>
      <div className="hidden md:block space-y-4">
        <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;work&gt;</div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <img src={project}></img>
          </div>
          <div className="basis-1/2 flex flex-col text-right justify-center space-y-4">
            <div>Mobile Project</div>
            <div>Project 1</div>
            <div className="py-2 px-4 bg-blue-600 text-white rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat turpis vestibulum purus quam et eget. Enim, ac venenatis, in
            </div>
            <div className="flex flex-row justify-end space-x-4">
              <div>React Native</div>
              <div>Material Design</div>
              <div>Firebase</div>
              <div>Expo</div>
            </div>
          </div>
        </div>
        <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;/work&gt;</div>
      </div>
      <div className="space-y-4 md:hidden">
        <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;work&gt;</div>
        <div className="flex flex-row items-center">
          <div className="basis-1/2 text-center space-y-4">
            <div>Mobile Project</div>
            <div>Project 1</div>
          </div>
          <div className="basis-1/2 text-center py-2 px-4 bg-blue-600 text-white rounded-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat turpis vestibulum purus quam et eget. Enim, ac venenatis, in
          </div>
        </div>

        <img src={project}></img>
        <div className="flex flex-row justify-between">
          <div>React Native</div>
          <div>Material Design</div>
          <div>Firebase</div>
          <div>Expo</div>
        </div>

        <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;/work&gt;</div>
      </div>
      <div className="hidden md:block space-y-4">
        <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;work&gt;</div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <img src={project}></img>
          </div>
          <div className="basis-1/2 flex flex-col text-right justify-center space-y-4">
            <div>Mobile Project</div>
            <div>Project 1</div>
            <div className="py-2 px-4 bg-blue-600 text-white rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat turpis vestibulum purus quam et eget. Enim, ac venenatis, in
            </div>
            <div className="flex flex-row justify-end space-x-4">
              <div>React Native</div>
              <div>Material Design</div>
              <div>Firebase</div>
              <div>Expo</div>
            </div>
          </div>
        </div>
        <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;/work&gt;</div>
      </div>
    </>
  );
}

export default Work;
