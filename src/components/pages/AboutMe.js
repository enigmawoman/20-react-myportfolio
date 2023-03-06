import React from 'react';
import MyCarousel from '../Carousel';
import me from '../../assets/images/SLG_300x.jpg'

export default function AboutMe() {
  return (
    <>
    <div className='about-me'>
      <img src={me}/>
      <p>
       Sarah La Grue is currently undertaking a Full Stack Web Development course with the University of Birmingham
      </p>
    </div>
    <h2>Previous experience</h2>
    <p>I have a background in Engineering and IT - but over the last few years i have been putting my creative skills and passion for photography & videography to good use - working with Engineering based companies to produce content for their online marketing and social media distribution, some examples of my work: promotional videos / website design, layout & photography.  </p>
    <MyCarousel />
    </>
  );
}
