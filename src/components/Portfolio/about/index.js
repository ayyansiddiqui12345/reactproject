import React from 'react'
import styles from "../about/about.module.css";


export const AboutComponent = () => {
  return (
    <div>
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className={styles.about} id='about'>
          <h1 style={{ color: 'whitesmoke', textAlign: 'center' }}>ABOUT</h1>
  
          <div className="text-center" style={{ color: 'whitesmoke' }}>
            <p id="free">
              Freelancer is a free bootstrap theme
              <br />
              created by Start Bootstrap. The
              <br />
              download includes the complete
              <br />
              source files including HTML, CSS,
              <br />
              and JavaScript as well as optional SASS
              <br />
              stylesheets for easy customization.
            </p>
          </div>
  
          <div className="text-center" style={{ color: 'whitesmoke' }}>
            <p>
              You can create your own custom avatar
              <br />
              for the masthead, change the icon in the
              <br />
              dividers, and add your email address to
              <br />
              the contact form to make it fully
              <br />
              functional!
            </p>
          </div>
  
          <div className="text-center">
            <br />
            <a href="https://startbootstrap.com/theme/freelancer">
              <button id="button" className='btn btn-secondary' style={{ color: 'whitesmoke' }}>
                Free Download
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
