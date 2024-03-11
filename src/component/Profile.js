import React from 'react'
import { Link } from 'react-scroll'
import { RxResume } from "react-icons/rx";

const Profile = () => {
  return (
  <>
    <section className='profile'>
      <div className='profile-content'>
        <span className='Im'>Hey Buddy !</span><br/>
        <span className='introtxt'>I'm <span className='introname'>Manish</span><br/> Front End Developer</span>
        <p className='para'>Hello, I'm Manish Kumar, a dedicated and skilled frontend developer specializing in React.js.</p>
        <a className='resume' alt="resume" href=''><RxResume /></a>
        <Link><button  className='btn'>Download Resume</button></Link>
        
      </div>
      <img src='' alt='' className='bg'/>
    </section>
  </>
  )
}

export default Profile