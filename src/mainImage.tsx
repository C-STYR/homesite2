import React from 'react';

import bench from '../public/images/bench.jpg'

const mainImage: JSX.Element = 
  <div className="imageContainer">
   <img 
        src={bench}
        height={440}
        width={300}
        alt="the author examines plans at his workbench"
        />
  </div>

  export default mainImage;