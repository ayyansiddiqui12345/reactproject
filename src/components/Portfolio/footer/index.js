import React from 'react';
import styles from "../footer/footer.module.css";

export const FooterComponent = () => {
 

  return (
   <div className='col-lg-12 col-md-12 col-sm-6'>
         <div className={styles.footer}>
      <div className={styles.footerSection}>
        <h3>Location</h3>
        <p>
          2215 John Daniel Drive
          <br />
          Clark, MO 65243
        </p>
      </div>

      <div className={styles.footerSection}>
        <h3>AROUND THE WEB</h3>
        <a href="https://github.com/ayyansiddiqui12345" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            id="profile-link"
            alt="github"
            className={styles.githubIcon} // Add your custom class for sizing
          />
        </a>
      &nbsp;
        <a href="https://facebook.com" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
            id="profile-link"
            alt="github"
            className={styles.githubIcon} // Add your custom class for sizing
          />
        </a>
     
        &nbsp;
        
        <a href="https://www.linkedin.com/in/ayyan-siddiqui-956847231/" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
            id="profile-link"
            alt="github"
            className={styles.githubIcon} // Add your custom class for sizing
          />
        </a>
        <br />
        <br />
        <br />
      </div>

      <div className={styles.footerSection}>
        <h3>ABOUT FREELANCER</h3>
        <p >
          Freelance is a free to use, MIT licensed
          <br />
          Bootstrap theme created by Start
          <br />
          Bootstrap.
        </p>
      </div>
    </div>

      <div className={styles.last}>
        <p>
          <br />
          Copyright © Your Website 2022
        </p>
      </div>
    </div>
      
    // </div>
  );
};
