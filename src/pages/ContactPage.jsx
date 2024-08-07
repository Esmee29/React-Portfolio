import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k8afule', 'template_dtwwshs', form.current, {
        publicKey: '9FikfvLLlgSO-2qxR',
      })
      .then(
        () => {
          toast.success('Thank you! Your message has been sent.');
          form.current.reset(); // Optionally reset the form after successful submission
        },
        (error) => {
          toast.error('Oops! Something went wrong. Please try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      {/* Contact Details Box */}
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Contact Details</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">LinkedIn:</span>{' '}
          <a href="https://www.linkedin.com/in/esmee-fulcher-261b3321a/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            linkedin.com/in/esmee-fulcher
          </a>
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">GitHub:</span>{' '}
          <a href="https://github.com/Esmee29" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            github.com/Esmee29
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-200 p-6 rounded-lg shadow-lg max-w-md w-full space-y-4"
      >
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-semibold" htmlFor="user_name">
            Name
          </label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-semibold" htmlFor="user_email">
            Email
          </label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <input
          type="submit"
          value="Send"
          className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-200"
        />
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactPage;