import React from 'react';
//importing the carousel component from react bootstrap
import MyCarousel from '../Carousel';
// importing image
import me from '../../assets/images/SLG_300x.jpg'

export default function AboutMe() {
  return (
    <>
    <div className='about-me'>
      <img alt='developer' src={me}/>
      <p>
       Sarah La Grue is currently undertaking a Full Stack Web Development course with the University of Birmingham - she has a passion for all things tech and wanted to develop and expand on her existing skills in engineering, IT and marketing, by combining them into a career she can fully immerse herself in - web development & design!
      </p>
    </div>
    <div className='pre-ex'>
    <h2>Previous experience</h2>
    <p>I have a background in Engineering and IT - but over the last few years i have been putting my creative skills and passion for photography & videography to good use - working with Engineering based companies to produce content for their online marketing and social media distribution, some examples of my work: promotional videos / website design, layout & photography.  </p>
    {/* bringing in the carousel component - which is configured in the carousel.js file*/}
    <MyCarousel />
    </div>
    
    </>
  );
}
