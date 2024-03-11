import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
  <>
   <div className ='Menubar py-3'>
       <NavLink to="/" className='menulist text-decoration-none text-dark'>Home</NavLink>
       <NavLink to="about"  className='menulist text-decoration-none text-dark'>About</NavLink>
       <NavLink to="projects" className='menulist text-decoration-none text-dark'>Projects</NavLink>
       <NavLink to="contact" className='menulist text-decoration-none text-dark'>Contact</NavLink>
     </div>
  </>
  )
}

export default Header