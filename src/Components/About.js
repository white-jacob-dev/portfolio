import React from 'react';

export function About({ avatar }) {
  return (
    <div className="h-screen space-y-4 flex flex-col justify-center">
      <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;about&gt;</div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:items-center">
        <img src={avatar} className="max-h-48"></img>
        <div className="text-center text-md md:text-xl font-medium md:text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nunc, vel amet mauris non. Ut varius ultrices a, lacus in. Aliquam risus,
          tortor egestas dui ipsum tincidunt placerat.
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

      <div className="text-left font-ooohbaby text-4xl opacity-25">&lt;/about&gt;</div>
    </div>
  );
}

export default About;
