import React, { useState } from 'react';
import styles from "../contact/contact.module.css";

export const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
        
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can perform additional actions here, such as sending the data to a server.
  };

  return (
    <div>
         <div id="contact" className={styles.contact}>
        
      <br /><br />
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
        CONTACT
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







     
        {/* ... (your existing JSX code) */}
        <form id="contactForm" onSubmit={handleSubmit}>
          {/* Name input */}
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={handleChange}
              data-sb-validations="required"
            />
            <label htmlFor="name">name</label>
            {/* ... (your existing JSX code) */}
          </div>
          {/* Email address input */}
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              data-sb-validations="required,email"
            />
            <label htmlFor="email">email</label>
            {/* ... (your existing JSX code) */}
          </div>
          {/* Phone number input */}
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
              data-sb-validations="required"
            />
            <label htmlFor="tel">Phone</label>
            {/* ... (your existing JSX code) */}
          </div>
          {/* Message input */}
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="message"
              type="text"
              placeholder="Enter your message here..."
              style={{ height: '10rem' }}
              value={formData.message}
              onChange={handleChange}
              data-sb-validations="required"
            ></textarea>
            <label htmlFor="message">Message</label>
            {/* ... (your existing JSX code) */}
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
  );
};
