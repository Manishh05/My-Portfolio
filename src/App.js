import { BrowserRouter ,Route, Router, Routes } from 'react-router-dom';
import Contact from "./component/Contact";
import Home from "./component/Home"
import About from "./component/About";
import Skils from "./component/Skils";
import { Projects } from './component/Projects';




function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='about' element={ <About />}/>
         <Route path='projects' element={ <Projects />}/>
         <Route path='skils' element={ <Skils />}/>
         <Route path='contact' element={ <Contact />}/>
      </Routes>


   </BrowserRouter>
  

 </>
        
   
  )
}

export default App;
