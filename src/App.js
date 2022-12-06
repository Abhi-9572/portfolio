import Navbar from "./Navbar/Navbar";
import './App.css'
import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import { useContext } from "react";
import { themeContext } from "./Context";



function App() {
  const theme=useContext(themeContext);
  console.log(theme)
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={
      {background:darkMode?'black':' ',
      color:darkMode?'white':''
    }
    }
    >

  <Navbar/>
  <Intro/>
  <Skills/>
  <Portfolio/>
  <Contact/>
  {/* <Testimonial/> */}
    </div>
  );
}

export default App;
