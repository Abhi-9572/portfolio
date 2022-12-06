import React from 'react'
import Card from '../Card/Card'
import resume from './ResumeD.pdf'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills">
       <div className="awesome">
            <span>My </span>
            <span>Skills</span>
           <a href={resume} download>
           <button className="button s-button">
                Download CV
            </button>
           </a>
       </div>
       <div className="cards">
        <div style={{left:'30rem'}}>
            <Card
            heading={'Language'}
            details={"HTML, CSS, Javascript, Java"}
            />
        </div>
        <div style={{top:'8rem', left:"12rem"}}>
        <Card  
            heading={'FrameWork & Library'}
            details={"React, React-Redux, React-Router, MaterialUI, BootStrap, Styles, Componenet"}
            />
        </div >
        <div style={{top:'14rem', left:"30rem"}}>
        <Card 
            heading={'Tools'}
            details={"Git & GitHub , VS Code"}
            /> 
        </div>
              
             
        
       </div>
    </div>
  )
}

export default Skills