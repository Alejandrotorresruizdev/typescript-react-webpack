import React from 'react';
import Image2 from 'Images/image2.png';

const HelloWorld = () => {
  return (
    <div className="container">
      <p>Hello World</p>
      <img src={Image2} alt="Girl in a jacket" width="500" height="600" />
    </div>
  );
};

export default HelloWorld;
