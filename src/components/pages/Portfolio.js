import React from 'react';
// importing the projectcard component 
import ProjectCard from '../ProjectCard';
// importing the the data for my projects
import myData from '../data/MyData';

export default function Portfolio() {
  return (
    <div className='portfolio-page'>
      <h1>Portfolio</h1>
      {/* this is where the project card component is brought into the Contact page and my data is passed through as a prop to the project card */}
      <ProjectCard myData={myData} />
    </div>
  );
}
