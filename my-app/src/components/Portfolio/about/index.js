import React from 'react'
import styles from "../about/about.module.css";

export const AboutComponent = () => {
  return (
    <div className="about">
    <br />
    <h1 id="text">ABOUT</h1>
    <hr style={{ width: '500px', height: '2px', backgroundColor: 'black', border: 'none', marginBottom: '70px' }} />
    <div>
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

    <div style={{ marginLeft: '750px', marginTop: '-125px' }}>
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

    <button id="button">
      <a href="https://startbootstrap.com/theme/freelancer">Free Download</a>
    </button>
  </div>
  )
}
