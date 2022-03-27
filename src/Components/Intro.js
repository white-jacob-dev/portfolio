import React from 'react';
import Fade from 'react-reveal/Fade';

export function Intro({}) {
  return (
    <>
      <section
        href="#intro"
        id="intro"
        className="h-screen flex flex-col justify-center text-left space-y-4 md:items-start md:text-left dark:text-slate-200"
      >
        <Fade top delay={2000}>
          <div className="text-left self-start font-ooohbaby text-3xl text-slate-400">&lt;intro&gt;</div>
        </Fade>
        <Fade clear delay={2400}>
          <div className="text-xl font-light tracking-tight">Hi, my name is</div>
        </Fade>

        <div className="space-y-2">
          <Fade clear delay={2800}>
            <div className="text-5xl md:text-7xl font-bold tracking-tight text-blue-700">Jacob White.</div>
          </Fade>

          <Fade clear delay={3200}>
            <div className="text-5xl md:text-7xl font-bold tracking-tight text-blue-400">I design & build for the web.</div>
          </Fade>
        </div>
        <Fade clear delay={3600}>
          <p className="text-sm md:text-xl font-light tracking-tight whitespace-normal md:w-3/5">
            I'm a <span className="text-blue-700 dark:text-blue-300">ui/ux designer</span> and{' '}
            <span className="text-blue-700 dark:text-blue-300">front-end developer</span> who creates responsive, unique & interactive digital
            experiences with a user-focused approach. Currently, I'm focused on designing and building world-class applications with my team at{' '}
            <span className="text-blue-700 dark:text-blue-300">M&S Consulting.</span>
          </p>
        </Fade>

        <Fade clear delay={4000}>
          <button
            onClick={() => window.open('mailto:white.jacob.dev@gmail.com?subject=Hi%20Jacob%20👋')}
            className="self-start py-2 px-5 bg-blue-700 text-white rounded-lg shadow-lg text-lg font-bold tracking-tight"
          >
            Send me an email
          </button>
        </Fade>

        <Fade bottom delay={4400}>
          <div className="self-start text-left font-ooohbaby text-3xl text-slate-400">&lt;/intro&gt;</div>
        </Fade>
      </section>
    </>
  );
}

export default Intro;
