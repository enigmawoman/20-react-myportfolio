import React from 'react';
import ProjectCard from '../ProjectCard';

import myData from '../data/MyData';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <ProjectCard myData={myData} />
      <p>
        my cool stuff - say Hello World
        
      </p>
    </div>
  );
}
