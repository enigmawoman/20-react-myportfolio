import React from 'react';
import ProjectCard from '../ProjectCard';

import myData from '../data/MyData';

export default function Portfolio() {
  return (
    <div className='portfolio-page'>
      <h1>Portfolio</h1>
      <ProjectCard myData={myData} />
    </div>
  );
}
