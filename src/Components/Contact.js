import React from 'react';
import Fade from 'react-reveal/Fade';

export function Contact({}) {
  return (
    <>
      <Fade clear>
        <div id="contact" className="h-screen flex flex-col justify-center space-y-4">
          <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;contact&gt;</div>
          <div className="space-y-4 flex flex-col items-center w-full text-center">
            <div className="text-6xl font-bold tracking-tight">Get in touch.</div>
            <div className="text-md md:text-xl font-medium tracking-tight w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nisl, porttitor posuere mauris. Sapien gravida adipiscing fringilla
              turpis lectus sed amet tellus. Diam sollicitudin eu turpis nisi augue rutrum quis.
            </div>
            <button className="py-2 px-5 bg-blue-700 text-white rounded-lg text-lg font-bold tracking-tight">Send me an email</button>
          </div>
          <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;/contact&gt;</div>
        </div>
      </Fade>
    </>
  );
}

export default Contact;
