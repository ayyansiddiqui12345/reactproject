import React from 'react'
import styles from "../contact/contact.module.css";

export const ContactComponent = () => {
    return (
      <div>

<div id="contact">
      <br /><br />
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
        CONTACTS
      </h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-star-fill"
        viewBox="0 0 16 16"
        style={{
          marginLeft: '48%',
          color: '#2c3e50',
          marginBottom: '40px',
          marginTop: '40px',
        }}
      >
        <path
          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
        />
      </svg>
      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        {/* Name input */}
        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="Enter your name..."
            data-sb-validations="required"
          />
          <label htmlFor="name">Full name</label>
          <div className="invalid-feedback" data-sb-feedback="name:required">
            A name is required.
          </div>
        </div>
        <br />
        {/* Email address input */}
        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="email"
            type="email"
            placeholder="name@example.com"
            data-sb-validations="required,email"
          />
          <label htmlFor="email">Email address</label>
          <div className="invalid-feedback" data-sb-feedback="email:required">
            An email is required.
          </div>
          <div className="invalid-feedback" data-sb-feedback="email:email">
            Email is not valid.
          </div>
        </div>
        <br />
        {/* Phone number input */}
        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="phone"
            type="tel"
            placeholder="(123) 456-7890"
            data-sb-validations="required"
          />
          <label htmlFor="phone">Phone number</label>
          <div className="invalid-feedback" data-sb-feedback="phone:required">
            A phone number is required.
          </div>
        </div>
        <br />
        {/* Message input */}
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="message"
            type="text"
            placeholder="Enter your message here..."
            style={{ height: '10rem' }}
            data-sb-validations="required"
          ></textarea>
          <label htmlFor="message">Message</label>
          <div className="invalid-feedback" data-sb-feedback="message:required">
            A message is required.
          </div>
        </div>
        {/* Submit success message */}
        <div className="d-none" id="submitSuccessMessage">
          <div className="text-center mb-3">
            <div className="fw-bolder">Form submission successful!</div>
            To activate this form, sign up at <br />
            <a href="https://startbootstrap.com/solution/contact-forms"></a>
          </div>
        </div>
        {/* Submit error message */}
        <div className="d-none" id="submitErrorMessage">
          <div className="text-center text-danger mb-3">
            {/* Error sending message! */}
          </div>
        </div>
        {/* Submit Button */}
        <button
          className="btn btn-primary "
          id="submitButton"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
    
    </div>
    )
  }
  