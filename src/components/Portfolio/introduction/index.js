import React from "react";
 
import styles from "./introduction.module.css"

export const IntroductionComponent = () => {
  return (
  
  <div className={styles.avatar}>

<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-4 col-lg-6 mb-12">
      <div className="container text-center">
        <img
          className="img-fluid rounded-circle"
          src="https://adaptabiz.com/wp-content/uploads/2022/01/img_avatar.png"
          alt="Avatar"
          id="avatar"
        />
        <h1 id="heading">Ayyan Siddiqui</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
          style={{ color: 'aliceblue', marginBottom: '20px' }}
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>

        <h3 id="h3" style={{ marginBottom: '10px' }}>Front End Developer</h3>
      </div>
    </div>
  </div>
</div></div>
);
};
