import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Dialog, Transition } from '@headlessui/react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid';

function ContactForm () {

  // const successIcon = <CheckCircleIcon className="h-8 w-8 text-green-500" />;
  // const errorIcon = <XCircleIcon className="h-8 w-8 text-red-500" />;

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');


  useEffect(() => {
    const errors = Object.values(formErrors);
    const isValid = errors.every((error) => error === '');
    setFormIsValid(isValid);
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (formIsValid) {
      try {
        // Send email
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = 'template_p9v543f';
        const userId = process.env.REACT_APP_EMAILJS_USER_ID;
        emailjs.init(userId);
        await emailjs.send(serviceId, templateId, {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        });
  
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
        openModal('Email sent', 'Your email has been sent successfully.');
        
        return true; // fix
      } catch (error) {
        console.log('Error occurred while sending email: ', error);
        openModal('Error', 'An error occurred while sending your email. Please try again later.');
      }
    }
    
    return false; // fix
  };
  
  
  function openModal(title, message) {
    setModalTitle(title);
    setModalMessage(message);
    setIsModalOpen(true);
  }
  
  function closeModal() {
    setModalTitle('');
    setModalMessage('');
    setIsModalOpen(false);
  }
  

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
      {isModalOpen && (
        <Transition.Root show={isModalOpen} as={React.Fragment}>
          <Dialog
            onClose={closeModal}
            className="fixed z-10 inset-0 overflow-y-auto"
          >
            <div className="flex items-center justify-center min-h-screen">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
  
              <div className="modal-box bg-white rounded-md shadow-xl p-8 w-11/12 lg:w-1/2">
                <div className="flex justify-end">
                  <button onClick={closeModal}>
                    <XCircleIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
                  </button>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 mt-4">
                    {modalTitle}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{modalMessage}</p>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </div>
  );  
}

export default ContactForm;