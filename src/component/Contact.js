import React from "react";




function Contact() {
    return (
      <div className="container">
        <div className="contact-title title" 
             id="contact" 
             data-aos="fade-left">
          <h3 className="py-3">Contact</h3>
        </div>
        <div className="contact-content ">
          <div className="contact-details-wrapper">
            <p>
              Feel free to
                get in touch
              for projects, opportunities, or just to say hello.
            </p>
            <div className=" py-3 contact-icons d-flex">
            <a
                href="https://www.linkedin.com/in/manishh05"
                target="_blank"
                rel="noreferrer"
              >
        
                 <img className="py-4 linked"
                      src="images/linkedin (1).svg"/>
              </a>
              <a className=""
                href="https://github.com/Manishh05"
                target="_blank"
                rel="noreferrer"
              >
               <img className="github"
               src="images/github (2).svg"/>
              </a>
              <a
                href="mailto:manish:marcmaniix05@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img className="gmail"
                src="images/gmail.svg"/>
              </a>
            </div>
          </div>
         </div>
      </div>
    );
  }

  export default Contact ;
  