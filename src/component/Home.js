import React from 'react'
import { Link } from 'react-scroll'
import { RxResume } from "react-icons/rx"
import TypeWriterEffect from "react-typewriter-effect";
import About from './About';
import Skils from './Skils';
import { Projects } from './Projects';
import Contact from './Contact';
import Header from './Header';

const Home = () => {
  return (
  <>
   <div className='container-xxl'>
      <Header />
   </div>
    <div className='container-xxl'>
     <section className='profile d-flex '>
      <div className='profile-content '>
        <span className='Im'>Hey Buddy !</span><br/>  
        <h4 data-aos="fade-up" 
            data-aos-delay="800">
          <TypeWriterEffect
            startDelay={1000}
            cursorColor="rgb(255, 153, 0)"
            multiText={[ 
              "Proefficient in Reactjs"
            ]}
            multiTextDelay={1000}
            typeSpeed={40}
            deleteSpeed={20}
          />
        </h4> 
         <span className='introtxt'>I'm <span
               className='introname'>Manish</span><br/> Front End Developer</span>
          <p className='para'>Hello, I'm Manish Kumar, a dedicated and skilled frontend developer specializing in React.js.</p>
       <a 
              href='https://drive.google.com/file/d/1oh2GNS8_lqgAWdLyJYk6APx6tLoLy2oo/view?usp=drive_link'
              className='resume text-dark py-3'>
          
          <button className="button">
                <svg viewBox="0 0 448 512" 
                     className="svgIcon">
                    <RxResume />
                  <path 
                     d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z">
                  </path>
                </svg>
          </button>
      </a> 
       
    </div>
    
    </section>
    </div>
    <div className='container-xxl'>
      <div className='about-section '>
              <About />
          </div>
       </div>
    <div className='container-xxl'>
      <div className='col-12'>
        <div className='row'>
          <div className='skill-section'>
              <Skils />
          </div>
        </div>
      </div>
    </div>
    <div className='container-xxl'>
      <div className='col-12'>
        <div className='row'>
          <div className='project-section'>
              <Projects />
          </div>
        </div>
      </div>
    </div>
    <div className='container-xxl'>
      <div className='col-12'>
        <div className='row'>
          <div className='contact-section'>
              <Contact />
          </div>
        </div>
      </div>
    </div>
 



  </>
  )
}

export default Home