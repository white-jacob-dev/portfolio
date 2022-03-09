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
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:items-center">
            <img src={avatar} className="max-h-48 md:max-h-96"></img>
            <div className="text-left text-md font-light tracking-tight space-y-2 md:space-y-8 md:text-2xl">
              <div className="font-bold">Hello! My name is Jacob and I love creating experiences on the web that excite people.</div>
              <div>
                After spending most of my hours coding for fun during my aerospace engineering undergraduate, I realized that pursuing a computer
                science degree was definitely the right move for me.
              </div>
              <div className="text-blue-600">
                Hundreds of thousands of lines of code later, I truly love what I do and always get excited for new projects and experiences.
              </div>
              <div>
                I've had the joy of working with a wide variety of clients covering many different industries, and as a result, have been exposed to a
                miriad of technologies.
              </div>

              <div className="font-bold">Here's some of them:</div>
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

          <Carousel>
            <div key="slide1" className="p-6 h-40">
              Text 01
            </div>
            <div key="slide2" className="p-6 h-40">
              Text 02
            </div>
          </Carousel>

          <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;/about&gt;</div>
        </div>
      </Fade>
    </>
  );
}

export default About;
