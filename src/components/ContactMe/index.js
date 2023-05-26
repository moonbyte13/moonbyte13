import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Dialog, Transition } from '@headlessui/react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid';

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
    { name: "name", type: "text", label: "Name..." },
    { name: "email", type: "email", label: "Email..." },
    { name: "message", type: "textarea", label: "Message..." },
  ];

  return (
    <div id='contactMeSection' className='mt-[15rem] z-10 bg-[#0F0F0F]/90'>
      <div className="flex flex-col justify-center items-center my-[5rem]">
        <h2 className="text-4xl lg:text-5xl font-bold mb-5 self-center text-[#b39ddb]">
          Contact Me
        </h2>
        <form
          action="?"
          method="POST"
          className="flex flex-col self-center w-5/6 md:w-2/3 lg:w-1/2"
          onSubmit={handleFormSubmit}
          data-size="invisible"
        >
          {inputFields.map(({ name, type, label }) => (
            <React.Fragment key={name}>
              <input
                placeholder={label}
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className={`caret-[#b39ddb] text-[#b39ddb] border-[#89c4a7] focus:outline-none focus:ring focus:ring-[#b39ddb] border-2 rounded-md p-2 mb-5 mt-2 bg-transparent placeholder:text-[#d6c07aaf] ${
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
            className="border-[#d6c17a] border-2 rounded-md p-2 w-fit self-center bg-transparent text-[#d6c17a] hover:bg-[#d6c17a] hover:text-[#0F0F0F] font-['Nunito'] font-normal hover:font-extrabold"
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
                <Dialog.Overlay className="fixed inset-0 bg-[#1a202c] opacity-30" />
    
                <div className="modal-box border-[#d6c17a] border-2 rounded-md bg-[#414141] shadow-xl p-8 w-11/12 lg:w-1/2">
                  <div className="flex justify-end">
                    <button onClick={closeModal} className='bg-transparent border-none'>
                      <XCircleIcon className="h-6 w-6 text-gray-100 hover:text-gray-800 border-full" />
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-900">
                      <CheckCircleIcon className="h-6 w-6 text-green-100" />
                    </div>
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 mt-4 text-gray-100">
                      {modalTitle}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-100">{modalMessage}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        )}
      </div>
    </div>
  );  
}

export default ContactForm;