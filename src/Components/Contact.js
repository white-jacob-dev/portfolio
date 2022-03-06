import React from 'react';

export function Contact({}) {
  return (
    <div className=" flex flex-col space-y-4">
      <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;contact&gt;</div>
      <div className="space-y-4 flex flex-col items-center w-full text-center">
        <div>Get in touch.</div>
        <div className="w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nisl, porttitor posuere mauris. Sapien gravida adipiscing fringilla turpis
          lectus sed amet tellus. Diam sollicitudin eu turpis nisi augue rutrum quis.
        </div>
        <button className="py-2 px-4 bg-blue-600 text-white rounded-lg">Send me an email</button>
      </div>
      <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;/contact&gt;</div>
    </div>
  );
}

export default Contact;
