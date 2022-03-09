import React from 'react';

export function Intro({}) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center space-y-4 md:items-start md:text-left">
      <div className="text-left self-start font-ooohbaby text-4xl opacity-25">&lt;intro&gt;</div>
      <div className="text-xl font-medium tracking-tight">
        Hi, my name is <span className="text-blue-700">Jacob White</span>.
      </div>
      <div className="text-6xl font-bold tracking-tight">I design and build for the web.</div>
      <p className="text-md md:text-xl font-medium tracking-tight whitespace-normal md:w-3/5">
        I'm a <span className="text-blue-700">ui/ux designer</span> and <span className="text-blue-700">front-end developer</span> who creates unique
        & interactive digital experiences with a human-centered approach. Currently, I'm focused on designing and building world-class applications
        with my team at <span className="text-blue-700">M&S Consulting.</span>
      </p>
      <button className="py-2 px-5 bg-blue-700 text-white rounded-lg text-lg font-bold tracking-tight">Send me an email</button>
      <div className="self-start text-left font-ooohbaby text-4xl opacity-25">&lt;/intro&gt;</div>
    </div>
  );
}

export default Intro;
