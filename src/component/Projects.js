import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";



export const Projects = () => {
  return (
    <>
      <section className='project'>
       <div className='container-xxl'>
        <div className='project-title'>
          <h3 className='py-3'>Projects</h3>
        </div>
        <div className='project-section d-flex py-2'>
            <img className='Image-section img-fluid w-100' 
                 src='images/E-com.jpeg'/>
        <div className='m-5 project-layer'>
          <h3>E-Commerce App</h3>
          <p>I developed a fully functional e-commerce website utilizing cutting-edge frontend Technologies.I Crafted an efficient and visually appealing e-commerce website. </p>
          <div className='project-links'>
          
          <a href='https://ecom-shopify.netlify.app/' 
            className=''>
            <FaExternalLinkAlt /> 
          </a>
          <a href='https://github.com/Manishh05/E-Commerce-App.git' 
            className='m-5'>
              <FaGithub />
          </a>
          </div>
        </div>
       </div>
       <div className='d-flex py-3  project-section' >
        <img className=' Image-section img-fluid w-100' 
             src='images/gemini.jpeg'/>
        <div className=' m-5 project-layer'>
          <h3>Gemini-gpt Clone</h3>
          <p>"I've engineered a Gemini-GPT clone, pushing the boundaries of AI replication."
"Behold, my Gemini-GPT replica, a testament to innovation in artificial intelligence." </p>
        <div className='project-links'>
          <a href='https://gemini-clone-gpt.netlify.app/'
             className=''>
              <FaExternalLinkAlt /> 
          </a>
          <a href='https://github.com/Manishh05/gemini-clone.git' 
            className=' m-5'>
              <FaGithub />
          </a>
        </div>
        </div>
        </div>
        <div className='d-flex py-3  project-section' >
        <img className=' Image-section img-fluid w-100' 
             src='images/Netflix.jpeg'/>
        <div className=' m-5 project-layer'>
          <h3>Netflix Clone</h3>
          <p>I've Crafted a captitaving Netflix Landing page utilizing Frontend Technlogies from Sleek animation to Responsive layouts, it sets the stage engaging content discovery. </p>
        <div className='project-links'>
          <a href='https://netflixx-clone.netlify.app/'
             className=''>
              <FaExternalLinkAlt /> 
          </a>
          <a href='https://github.com/Manishh05/Netflix-clone.git' 
            className=' m-5'>
              <FaGithub />
          </a>
        </div>
        </div>
        </div>
        <div className='d-flex py-3 project-section'>
        <img className='img-fluid w-100' 
             src='images/weather.jpeg'/>
        <div className=' m-5 project-layer'>
          <h3>Weather App</h3>
          <p>That's Fantastic! By leveraging HTML for Structure, CSS for Styles & Javscript for functionality.I have design a responsive and interactive interface that Fetches weather data from an API and display it to the user in a user-friendly manner.</p>
        <div className='project-links'>
          <a href='https://weather-identifier.netlify.app/' 
            className=''>
              <FaExternalLinkAlt /> 
          </a>
          <a href='https://github.com/Manishh05/Weather-App.git' 
             className=' m-5'>
              <FaGithub />
          </a>
        </div>
        </div>
        </div>
        <div className='d-flex py-3 project-section'>
            <img className='Image-section img-fluid w-100' 
                 src='images/Calc.jpeg'/>
        <div className=' m-5 project-layer'>
          <h3>Currency Convertor</h3>
          <p>It's User-Friendly interface facilities effortless currency exchange, enhancing user experience.The convertor utilizes modern frontend framework to ensure responsiveness and smooth functionality. </p>
        <div className='project-links'>
          <a href='https://currencyy-convertor.netlify.app/' 
            className=''>
              <FaExternalLinkAlt /> 
          </a>
          <a href='https://github.com/Manishh05/Currency-Convertor.git' 
            className=' m-5'>
              <FaGithub />
          </a>
        </div>
        </div>
        </div>
        </div>
      </section>

    </>
  )
}
