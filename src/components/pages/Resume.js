import React from 'react';
// import button component from bootstrap
import Button from 'react-bootstrap/Button';
// importing the frameowrk icons from react-icons
import { 
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiDatabase
 } from "react-icons/di";

 import { 
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiSequelize,
  SiHandlebarsdotjs,
  SiMongodb,
  SiReact,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiVisualstudio
 } from "react-icons/si";

 import { BsFilm } from "react-icons/bs";
 


export default function Resume() {
  return (
    <div className='resume-page'>
      <h2>Proficiencies</h2>
      <ul className='pro-list'>
        <div>
          {/* this is where the icon components are brought into the list elements */}
        <li><DiHtml5/> - HTML</li>
        <li><DiCss3/> - CSS</li>
        <li><DiJsBadge/> - JavaScript</li>
        <li><SiNodedotjs/> - Node.js</li>
        <li>< SiExpress/> - Express.js</li>
        </div>
        <div>
        <li><SiMysql/> - MySQL</li>
        <li><SiSequelize/> - Sequelize</li>
        <li><SiHandlebarsdotjs/> - Handlebars.js</li>
        <li><SiMongodb/> - MongoDB</li>
        <li><DiDatabase/> - Mongoose</li>
        </div>
        <div>
        <li><SiReact/> - React</li>
        <li><SiVisualstudio/> - Visual Studio</li>
        <li><SiAdobelightroom/> - Adobe Lightroom</li>
        <li><SiAdobeillustrator/> - Adobe Illustrator</li>
        <li><BsFilm/> - Final Cut Pro</li>
        </div>


        
      </ul>
      {/* button component for the link to my resume */}
      <p><a href="https://drive.google.com/file/d/12phDnRx-whj7oGUTyaY8L-jzzsksoWIO/view?usp=sharing"><Button className="myButton" variant="primary">View my Resume</Button></a></p>
      
    </div>
  );
}
