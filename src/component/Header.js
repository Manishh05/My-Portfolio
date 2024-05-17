import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";

const Header = () => {

  const [menuOpen,setMenuOpen]=useState(false);
  return (
  <>
  <div className='menu' onClick={()=>{
    setMenuOpen(!menuOpen)
  }}>
    <TiThMenu />
   </div>
    <div className ='py-3'>
      <div className={menuOpen ? "Menubar" : ""}>
       <NavLink to="/" className='menulist text-decoration-none text-dark'>Home</NavLink>
       <NavLink to="/about"  className='menulist text-decoration-none text-dark'>About</NavLink>
       <NavLink to="/projects" className='menulist text-decoration-none text-dark'>Projects</NavLink>
       <NavLink to="/contact" className='menulist text-decoration-none text-dark'>Contact</NavLink>
      </div>
   </div>
  
  
  
   </>

   
  
       



   
 
  
  
  )
}

export default Header