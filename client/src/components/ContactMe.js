import React, { useState, useEffect } from 'react';

function ContactForm() {
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formIsValid) {
      // DO SOMETHING WITH THE FORM DATA
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
    }
  };

  const inputFields = [
    { name: "name", type: "text", label: "Name" },
    { name: "email", type: "email", label: "Email" },
    { name: "message", type: "textarea", label: "Message" },
  ];

  return (
    <div className="flex flex-col justify-center items-center z-0">
      <h2 className="text-4xl lg:text-5xl font-bold mb-5 self-center lg:self-start lg:ml-10">Contact Me</h2>
      <form className="flex flex-col self-center lg:self-start lg:ml-10 lg:w-1/2 md:w-7/12" onSubmit={handleFormSubmit}>
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
            {formErrors[name] && <span className="text-red-500 text-sm mb-5 ml-2">{formErrors[name]}</span>}
          </React.Fragment>
        ))}
        <button type="submit" className="border-bk border-2 rounded-md p-2 w-fit self-center lg:self-start" disabled={!formIsValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;