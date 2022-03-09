import React from 'react';

export function MobileNav({ showMenu }) {
  return (
    <div>
      {showMenu ? (
        <div className="flex flex-col space-y-2 w-fit px-4 pb-2 rounded-b-lg text-left font-ooohbaby font-semibold text-2xl  bg-white/95 fixed mx-6 top-20 -right-6 z-10">
          <div className="opacity-60">&lt;intro&gt;</div>
          <div className="opacity-60">&lt;about&gt;</div>
          <div className="opacity-60">&lt;work&gt;</div>
          <div className="opacity-60">&lt;contact&gt;</div>
        </div>
      ) : null}
    </div>
  );
}

export default MobileNav;
