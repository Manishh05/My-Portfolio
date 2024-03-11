import React from 'react'
import Marquee from "react-fast-marquee"

const Skils = () => {
  return (
  <>
   <section className='marquee-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
               <div className=''>
                <h3 className='skill-Section py-3'>Skills</h3>
               </div>
                <Marquee className='Marquee-section d-flex'>
                   <div className='skill-set mx-4 w-25'>
                    <img src='images/html.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25 '>
                    <img src='images/css.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25'>
                    <img src='images/javascript.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25'>
                    <img src='images/bootstrap.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25'>
                    <img src='images/react.png' alt='brand'/>
                    </div>
                    <div className=' redux-img mx-4 w-25 '>
                    <img src='images/redux.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25'>
                    <img src='images/npm.png' alt='brand'/>
                    </div>
                    <div className='mx-4 w-25 '>
                    <img src='images/git.png' alt='brand'/>
                    </div>
                    
                   
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
  )
}

export default Skils