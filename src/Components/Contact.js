import React, { Suspense } from 'react';
import Fade from 'react-reveal/Fade';
// import github from '../Assets/github.svg';
// import linkedin from '../Assets/linkedin.svg';
import netlifyblack from '../Assets/netlifyblack.svg';
import { ReactComponent as Linkedin } from '../Assets/linkedin.svg';
import { ReactComponent as Github } from '../Assets/github.svg';

export function Contact({}) {
  return (
    <>
      <div className="w-full flex flex-row justify-center">
        <section href="#contact" id="contact" className="h-screen md:h-fit lg:h-screen lg:w-2/5 flex flex-col justify-center items-center space-y-4">
          <Fade top delay={400}>
            <div className="text-left font-ooohbaby text-3xl text-slate-400">&lt;contact&gt;</div>
          </Fade>
          <div className="space-y-4 flex flex-col items-center w-full text-center">
            <Fade clear delay={800}>
              <div className="text-6xl font-bold tracking-tight text-blue-700">Get in touch.</div>
            </Fade>
            <div className="text-md md:text-xl font-light tracking-tight w-3/4">
              <Fade clear delay={1200}>
                <div className="text-blue-400 font-semibold tracking-tighter">Thanks for stopping by!</div>
              </Fade>
              <Fade clear delay={1600}>
                <div className="py-2 dark:text-slate-200">
                  If you want to get in contact with me, or simply just say hello, feel free to with the button below. I'll always do my best to get
                  back to you as soon as I can.
                </div>
              </Fade>
            </div>
            <Fade clear delay={2000}>
              <button
                onClick={() => window.open('mailto:white.jacob.dev@gmail.com?subject=Hi%20Jacob%20👋')}
                className="py-2 px-5 bg-blue-700 text-white rounded-lg text-lg font-bold tracking-tight"
              >
                Send me an email
              </button>
            </Fade>
          </div>
          <Fade bottom delay={2400}>
            <div className="text-left font-ooohbaby text-3xl text-slate-400">&lt;/contact&gt;</div>
          </Fade>
        </section>
      </div>
      <Fade bottom delay={0}>
        <div className="-mt-16 h-16 md:mt-32 lg:-mt-24 md:h-24 pb-16 md:pb-8 w-full lg:w-screen flex flex-row justify-center items-center space-x-4 font-light tracking-tight dark:text-slate-200">
          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="flex flex-col justify-center items-center">
              <div className="font-semibold text-xs md:text-base">Designed & Built by Jacob White</div>
              <div className="text-xs md:text-base">white.jacob.dev@gmail.com</div>
            </div>
            <div className="flex flex-row justfiy-center items-center space-x-3">
              <div>
                <div className="w-full h-full flex justify-center">
                  <a href="https://github.com/white-jacob-dev" target="_blank">
                    {/* <img src={github} className="max-h-6 md:max-h-12"></img> */}
                    <Github className="fill-black dark:fill-slate-200" />
                  </a>
                </div>
              </div>

              <div>
                <div className="w-full h-full flex justify-center">
                  <a href="https://www.linkedin.com/in/jacob-white-developer/" target="_blank">
                    <Linkedin className="fill-black dark:fill-slate-200" />
                    {/* <img src={linkedin} className="max-h-12"></img> */}
                  </a>
                </div>
              </div>
              <div>
                <div className="w-full h-full flex justify-center">
                  <a href="https://www.netlify.com">
                    <img
                      src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
                      target="_blank"
                      alt="Deploys by Netlify"
                      className="max-h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Contact;
