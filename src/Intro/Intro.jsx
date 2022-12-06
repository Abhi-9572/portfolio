import React from 'react'
import './Intro.css'
import github from '../img/github.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import glassesimoji from '../img/glassesimoji.png'
import boy from '../img/boy.png'
import crown from '../img/crown.png'
import thumbup from '../img/thumbup.png'
import FloatinDiv from '../FloatingDiv/FloatingDiv'


const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I am </span>
                <span>Abhishek Raj</span>
                <span><b>Fronted developer, completed training from Acciojob.</b>
                <br/>Passionate about Developing Websites and seeking a career that is chalanging<br/> and interesting,and lets me work on the leading areas of technology</span>
            </div>
            <button className="i-button button">
                    Hire me
            </button>
            <div className="i-icons">
                <a href=''><img src={linkedin} alt="" /></a>
                <a href=''><img src={instagram} alt="" /></a>
                <a href='https://github.com/Abhi-9572'><img src={github} alt="" /></a>
            </div>
        </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{top:"-4%",left:"68%"}}>
                    <FloatinDiv image={crown} txt1="web" txt2="Developer"/>
                </div> 
                <div style={{top:"18rem",left:"0rem"}}>
                <FloatinDiv image={thumbup} txt1="Fronted" txt2="Developer"/>
                </div>
                {/* blur div */}
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
       
                            <div
                        className="blur"
                        style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                    ></div>
            </div>
            </div>
        
  
  )
}

export default Intro