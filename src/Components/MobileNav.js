import React from 'react';

export function MobileNav({ showMenu }) {
  return (
    <div>
      {showMenu ? (
        <div className="flex flex-col bg-slate-300">
          <div>intro</div>
          <div>about</div>
          <div>work</div>
          <div>contact</div>
        </div>
      ) : null}
    </div>
  );
}

export default MobileNav;
