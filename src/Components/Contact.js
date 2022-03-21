import React, { Suspense } from 'react';
import Fade from 'react-reveal/Fade';

export function Contact({}) {
  return (
    <>
      <Fade clear delay={500}>
        <div className="w-full flex flex-row justify-center">
          <section href="#contact" id="contact" className="h-screen md:w-2/5 flex flex-col justify-center items-center space-y-4">
            <div className="text-left font-ooohbaby text-3xl opacity-25">&lt;contact&gt;</div>
            <Fade clear delay={1500}>
              <div className="space-y-4 flex flex-col items-center w-full text-center">
                <div className="text-6xl font-bold tracking-tight text-blue-700">Get in touch.</div>
                <div className="text-md md:text-xl font-light tracking-tight w-3/4">
                  <div className="text-blue-400 font-semibold tracking-tighter">Thanks for checking out my portfolio!</div>
                  <div className="py-2">
                    If you want to get in contact with me, or simply just say hello, feel free to with the button below. I'll always do my best to get
                    back to you as soon as I can.
                  </div>
                </div>
                <button
                  onClick={() => window.open('mailto:white.jacob.dev@gmail.com?subject=Hi%20Jacob%20👋')}
                  className="py-2 px-5 bg-blue-700 text-white rounded-lg text-lg font-bold tracking-tight"
                >
                  Send me an email
                </button>
              </div>
            </Fade>
            <div className="text-left font-ooohbaby text-3xl opacity-25">&lt;/contact&gt;</div>
          </section>
        </div>
      </Fade>
    </>
  );
}

export default Contact;
