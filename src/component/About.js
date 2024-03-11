import React from 'react'


const About = () => {
  return (
   <>
   <section className='about-Section'>
    <div className='container-xxl py-5'>
      <div className='row'>
        <div  className=''>
          <h3 className='about-title'>About</h3>
          <div className='About-details d-flex'>
           <div className='img-box'>
              <img  className="img-fluid"
                    src='images/code.jpg'/>
            </div>
            <div className='d-flex justify-content-center m-4 gap-10 about-content'>
             <h5>I am a Passionate and creative
               <span 
                className='text-warning'> Front-End-Developer</span> with a Strong intrest in Web Development and User interface design.
                 I have Experience in developing responsive and interactive web application Using HTML , CSS  , JAVASCRIPT and REACT JS. 
                 I'm Proefficient in using modern tools frameworks such as Bootstrap,Material UI Redux and Axios I'm Looking for an opportunity to join a Dynamic and innovative team where I can apply my Skills and Contribute to the Development of High-Quality Web Applications
            </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
   </>
  )
}

export default About