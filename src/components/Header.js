import React from 'react';
import unicorn from '../assets/images/unicorn.jpg'
import me from '../assets/images/SLG_300x.jpg'


export default function Header() {
  return (
    <div className='header'>
      <div className='sarah'>
        <img  alt='developer' src={me}/>
      </div>
      <div className='header-title'>
      <h1>Sarah La Grue</h1>
      <p>
        Welcome to my Portfolio
      </p>
      </div>
      <div>
        <img  alt='avatar of developer' src={unicorn}/>
      </div>
    </div>
  );
}