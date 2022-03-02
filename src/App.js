import React, { useState } from 'react';
import avatar from './Avatar.svg';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  function handleMenu() {
    setShowMenu(!showMenu);
    console.log('showing menu: ' + showMenu);
  }

  return (
    <div>
      <nav className="w-full h-14 flex justify-between items-center">
        <div className="flex flex-row ">
          <svg className="w-8 h-8 fill-black" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.88596 0.126797C3.84238 0.196551 4.22188 0.948394 4.7293 1.79756L5.65203 3.34162H9.03114C10.8897 3.34162 12.41 3.38854 12.4097 3.44604C12.4094 3.50354 12.2932 3.73842 12.1516 3.96815C12.0099 4.19788 11.7338 4.66778 11.538 5.01238C10.2981 7.19537 7.40794 12.0743 7.26338 12.2283C7.09556 12.407 6.58265 11.6454 5.07565 8.98043C4.90247 8.67413 4.53285 8.032 4.25418 7.55333L3.74762 6.68314H1.87381C0.829372 6.68314 0 6.7398 0 6.81109C0 6.8814 0.380769 7.5756 0.846154 8.3539C1.31154 9.13219 1.69231 9.79396 1.69231 9.82473C1.69231 9.85536 1.93445 10.2732 2.23046 10.7531C2.52647 11.2332 3.71067 13.2548 4.862 15.2458C6.01333 17.2368 7.00108 18.9177 7.05678 18.9812C7.16368 19.1029 7.41301 18.7128 9.30967 15.4546C9.95613 14.3443 10.9073 12.7153 11.4236 11.8346C12.5083 9.98456 13.9153 7.58075 16.4205 3.29748C17.3976 1.62672 18.1606 0.201285 18.1159 0.129999C18.0087 -0.0412536 3.99314 -0.0443165 3.88596 0.126797ZM16.9936 8.86515C16.2955 10.0631 15.5429 11.3624 15.321 11.7522C15.0992 12.1422 14.4805 13.1933 13.946 14.0881C13.4117 14.9829 12.9744 15.7575 12.9744 15.8094C12.9744 15.9195 14.6409 18.8129 14.7988 18.9769C14.8578 19.038 15.243 18.5054 15.6553 17.7934C16.0675 17.0814 16.8276 15.7783 17.3445 14.8977C17.8613 14.0171 18.8132 12.3881 19.4598 11.2777C20.1065 10.1674 20.9424 8.74903 21.3177 8.1257C21.693 7.50251 22 6.92289 22 6.83782C22 6.73215 21.4088 6.6837 20.1314 6.68509L18.2628 6.6869L16.9936 8.86515Z" />
          </svg>
        </div>
        <div className="flex flex-row md:hidden">
          <svg
            onClick={handleMenu}
            className="w-8 h-8 fill-black"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.40002 5.59999C2.29401 5.5985 2.18876 5.61808 2.09038 5.65761C1.99201 5.69714 1.90247 5.75583 1.82698 5.83027C1.75148 5.9047 1.69153 5.9934 1.65061 6.09121C1.60969 6.18901 1.58862 6.29397 1.58862 6.39999C1.58862 6.50601 1.60969 6.61098 1.65061 6.70878C1.69153 6.80659 1.75148 6.89529 1.82698 6.96972C1.90247 7.04416 1.99201 7.10285 2.09038 7.14238C2.18876 7.18191 2.29401 7.20149 2.40002 7.19999H21.6C21.706 7.20149 21.8113 7.18191 21.9097 7.14238C22.008 7.10285 22.0976 7.04416 22.1731 6.96972C22.2486 6.89529 22.3085 6.80659 22.3494 6.70878C22.3903 6.61098 22.4114 6.50601 22.4114 6.39999C22.4114 6.29397 22.3903 6.18901 22.3494 6.09121C22.3085 5.9934 22.2486 5.9047 22.1731 5.83027C22.0976 5.75583 22.008 5.69714 21.9097 5.65761C21.8113 5.61808 21.706 5.5985 21.6 5.59999H2.40002ZM2.40002 11.2C2.29401 11.1985 2.18876 11.2181 2.09038 11.2576C1.99201 11.2971 1.90247 11.3558 1.82698 11.4303C1.75148 11.5047 1.69153 11.5934 1.65061 11.6912C1.60969 11.789 1.58862 11.894 1.58862 12C1.58862 12.106 1.60969 12.211 1.65061 12.3088C1.69153 12.4066 1.75148 12.4953 1.82698 12.5697C1.90247 12.6442 1.99201 12.7028 2.09038 12.7424C2.18876 12.7819 2.29401 12.8015 2.40002 12.8H21.6C21.706 12.8015 21.8113 12.7819 21.9097 12.7424C22.008 12.7028 22.0976 12.6442 22.1731 12.5697C22.2486 12.4953 22.3085 12.4066 22.3494 12.3088C22.3903 12.211 22.4114 12.106 22.4114 12C22.4114 11.894 22.3903 11.789 22.3494 11.6912C22.3085 11.5934 22.2486 11.5047 22.1731 11.4303C22.0976 11.3558 22.008 11.2971 21.9097 11.2576C21.8113 11.2181 21.706 11.1985 21.6 11.2H2.40002ZM2.40002 16.8C2.29401 16.7985 2.18876 16.8181 2.09038 16.8576C1.99201 16.8971 1.90247 16.9558 1.82698 17.0303C1.75148 17.1047 1.69153 17.1934 1.65061 17.2912C1.60969 17.389 1.58862 17.494 1.58862 17.6C1.58862 17.706 1.60969 17.811 1.65061 17.9088C1.69153 18.0066 1.75148 18.0953 1.82698 18.1697C1.90247 18.2442 1.99201 18.3028 2.09038 18.3424C2.18876 18.3819 2.29401 18.4015 2.40002 18.4H21.6C21.706 18.4015 21.8113 18.3819 21.9097 18.3424C22.008 18.3028 22.0976 18.2442 22.1731 18.1697C22.2486 18.0953 22.3085 18.0066 22.3494 17.9088C22.3903 17.811 22.4114 17.706 22.4114 17.6C22.4114 17.494 22.3903 17.389 22.3494 17.2912C22.3085 17.1934 22.2486 17.1047 22.1731 17.0303C22.0976 16.9558 22.008 16.8971 21.9097 16.8576C21.8113 16.8181 21.706 16.7985 21.6 16.8H2.40002Z" />
          </svg>
        </div>
        <div className="hidden md:flex flex-row space-x-6">
          <div>intro</div>
          <div>about</div>
          <div>work</div>
          <div>contact</div>
        </div>
      </nav>
      {showMenu ? (
        <div className="flex flex-col bg-slate-300">
          <div>intro</div>
          <div>about</div>
          <div>work</div>
          <div>contact</div>
        </div>
      ) : null}
      <div className="text-center space-y-4 md:text-left ">
        <div className="text-left">&lt;intro&gt;</div>
        <div>Hi, my name is Jacob White.</div>
        <div>I design and build for the web.</div>
        <div>
          I'm a ui/ux designer and front-end developer who creates unique & interactive digital experiences with a human-centered approach. Currently,
          I'm focused on designing and building world-class applications with my team at M&S Consulting.
        </div>
        <button className="py-2 px-4 bg-blue-600 text-white rounded-lg">Send me an email</button>
        <div className="text-left">&lt;/intro&gt;</div>
      </div>
      <div className="space-y-4">
        <div className="text-left">&lt;about&gt;</div>
        <div className="flex flex-col space-y-4 md:flex-row md:items-center">
          <img src={avatar} className="max-h-48"></img>
          <div className="text-center md:text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nunc, vel amet mauris non. Ut varius ultrices a, lacus in. Aliquam
            risus, tortor egestas dui ipsum tincidunt placerat.
          </div>
        </div>
        <div className="grid grid-cols-5 grid-rows-4 text-center border-4 rounded-lg">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
        </div>

        <div className="text-left">&lt;/about&gt;</div>
      </div>
    </div>
  );
}

export default App;
