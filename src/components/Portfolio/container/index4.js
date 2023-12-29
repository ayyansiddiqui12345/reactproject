import React, { useState } from "react";

import styles from "../container/container.module.css";
import { Modal } from "react-bootstrap";

export const ContainerComponent4 = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
     
      <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/* Portfolio Section Heading*/}
        <br />
        
           {/* img4 */}
          <div className="col-md-12 col-lg-12 mb-12" onClick={handleShow}>
            <div
              className="mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal"
              id="portfoliomodal3"

            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center">
                <div className="portfolio-item-caption-content text-center text-white"></div>
              </div>
              <div className={styles.image}>
                <img 
                  className="img-fluid image"
                  src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png"
                  alt="..."
                />
                <div className="middle">
              
                
                 
   
                </div>
              </div>
            </div>
          </div>
            {/* img5 */}

         
          </div>
          
       {/* modal 1 */}

   <Modal show={show} onHide={handleClose}>
      <div
      
      id="portfolioModal1"
      aria-labelledby="portfolioModal1"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
            onClick={handleClose}
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  {/* Portfolio Modal - Title */}
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                    Game
                  </h2>
                  
                  
                  {/* Portfolio Modal - Image */}
                  <img
                    className="img-fluid rounded mb-5"
                    src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png"
                    alt="..."
                  />

                  {/* Portfolio Modal - Text */}
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
                    neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
                    inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos
                    quod consequuntur itaque. Nam.
                  </p>

                 <button className="btn btn-primary " data-bs-dismiss="modal" onClick={handleClose}>
                    <i className="fas fa-xmark fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Modal>
    
    
   
   
     </section>
      
    </>
  );
};
