import React from 'react'
import styles from "../about/about.module.css";


export const AboutComponent = () => {
  return (
    <div className={styles.about} id='about'>
    <br />
    <h1 style={{
      color: 'whitesmoke',}}>ABOUT</h1>
    <hr style={{ width: '500px', height: '2px', backgroundColor: 'black', border: 'none', marginBottom: '80px', marginLeft: '440px'  }} />
    <div style={{ marginRight: '500px', color: 'whitesmoke' }}>
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

    <div style={{ marginLeft: '200px', marginTop: '-125px',color: 'whitesmoke' }}>
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
    
    <a href="https://startbootstrap.com/theme/freelancer"> 
    <button id="button" className='btn btn-secondary'  style={{color: 'whitesmoke'}}>
     Free Download
    </button></a>
  </div>
  )
}
