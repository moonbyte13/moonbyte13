import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

function ContactForm () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const recaptchaRef = useRef(null);

  useEffect(() => {
    const errors = Object.values(formErrors);
    setFormIsValid(errors.every(error => error === ''));
  }, [formErrors]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let error = '';

    switch (name) {
      case "name":
        error = value.trim() === '' ? 'Name is required' : '';
        break;
      case "email":
        error = value.trim() === '' ? 'Email is required' : !value.match(/^\S+@\S+\.\S+$/) ? 'Email is invalid' : '';
        break;
      case "message":
        error = value.trim() === '' ? 'Message is required' : '';
        break;
      default:
        break;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  const handleRecaptchaChange = async (token) => {
    console.log("reCAPTCHA token:", token);
    await handleFormSubmit(null, token);
  };
  

  const handleFormSubmit = async (event = null, token) => {
    event && event.preventDefault();
    if (formIsValid) {
      try {
        // Verify reCAPTCHA challenge
        const response = await fetch('/verify-recaptcha', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });
        const data = await response.json();
        if (!data.success) {
          throw new Error('reCAPTCHA challenge failed');
        }
        
        // Send email
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userId = process.env.REACT_APP_EMAILJS_USER_ID;
        emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
        emailjs.send(serviceId, templateId, {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }, userId);
    
        console.log('Email sent successfully.');
    
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setFormErrors({
          name: '',
          email: '',
          message: '',
        });
        setFormIsValid(false);
        recaptchaRef.current.reset();
      } catch (error) {
        console.log('Error occurred while sending email: ', error);
      }
    }
  };
  
  

  const inputFields = [
    { name: "name", type: "text", label: "Name" },
    { name: "email", type: "email", label: "Email" },
    { name: "message", type: "textarea", label: "Message" },
  ];

  return (
    <div className="flex flex-col justify-center items-center z-0">
      <h2 className="text-4xl lg:text-5xl font-bold mb-5 self-center lg:self-start lg:ml-10">
        Contact Me
      </h2>
      <form
        action="?"
        method="POST"
        className="flex flex-col self-center lg:self-start lg:ml-10 lg:w-1/2 md:w-7/12"
        onSubmit={handleFormSubmit}
        data-size="invisible"
      >
        {inputFields.map(({ name, type, label }) => (
          <React.Fragment key={name}>
            <label htmlFor={name}>{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              className={`border-bk border-2 rounded-md p-2 mb-5 mt-2 bg-transparent ${
                formErrors[name] && "border-red-500"
              }`}
              autoComplete="off"
              required={name === "name" || name === "email" || name === "message"}
            />
            {formErrors[name] && (
              <span className="text-red-500 text-sm mb-5 ml-2">
                {formErrors[name]}
              </span>
            )}
          </React.Fragment>
        ))}
        <button
          id="submit"
          type="submit"
          className="border-bk border-2 rounded-md p-2 w-fit self-center lg:self-start"
          disabled={!formIsValid}
        >
          Submit
        </button>
      </form>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey='6LfNjV0lAAAAAPlop3cJ_83sAL0IrvXgDwPx9M4G'
        size="invisible"
        onChange={handleRecaptchaChange}
      />
    </div>
  );
}

export default ContactForm;