import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-info'>
        <a href="https://github.com/enigmawoman"><FaGithub /></a>
        <a href="https://instagram.com/sarah_la_grue?igshid=YmMyMTA2M2Y="><FaInstagram /></a>

        <a href="https://www.linkedin.com/in/sarah-la-grue-8677311a/"><FaLinkedin /></a>
      </div>
      <div>
      <p>
        Made with love by Sarah <FaHeart />
        
      </p>
      </div>
      
    </div>
  );
}