import React, { useState } from 'react';
import "./Contact.css";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to a server or performing any required actions

    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });

  };
  

  
  

  return (
   <div className="contact">

<div className="contact-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
        />

         <input
          type="tel"
          name="name"
          placeholder="Contact No."
          value={formData.name}
          onChange={handleInputChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>


   </div>
  );
};
