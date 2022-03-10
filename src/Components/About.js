import React from 'react';
import Fade from 'react-reveal/Fade';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';

export function About({ avatar }) {
  return (
    <>
      <Fade clear>
        <div id="about" className="h-screen space-y-4 flex flex-col justify-center">
          <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;about&gt;</div>
          <div className="flex flex-col space-y-4 text-md font-light tracking-tight md:flex-row md:space-x-4 md:items-center">
            <img src={avatar} className="max-h-48 md:max-h-96"></img>
            <Carousel dynamicHeight={true} showStatus={false} className="-space-y-12">
              <div key="slide1" className="px-12 pb-12 pt-4 h-fit">
                Hello! My name is Jacob and I love creating experiences on the web that excite people.
              </div>
              <div key="slide2" className="px-12 pb-12 pt-4 h-fit">
                After spending most of my hours coding for fun during my aerospace engineering undergraduate, I realized that pursuing a computer
                science degree was definitely the right move for me.
              </div>
              <div key="slide1" className="px-12 pb-12 pt-4 h-fit">
                Hundreds of thousands of lines of code later, I truly love what I do and always get excited for new projects and experiences.
              </div>
              <div key="slide2" className="px-12 pb-12 pt-4 h-fit">
                I've had the joy of working with a wide variety of clients covering many different industries, and as a result, have been exposed to a
                miriad of technologies.
              </div>
            </Carousel>
            <div className="text-center">Here's some of the technologies I've used:</div>
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
          </div>
          <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;/about&gt;</div>
        </div>
      </Fade>
    </>
  );
}

export default About;
