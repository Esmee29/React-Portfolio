import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
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
    <div className="bg-blue-600 text-white min-h-screen p-6">
      <div className="flex flex-col items-center p-6 space-y-6">
        {/* Contact Details Box */}
        <div className="bg-blue-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4 text-white">Contact Details</h2>
          <div className="flex items-center justify-center space-x-6">
            <a href="https://www.linkedin.com/in/esmee-fulcher-261b3321a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-5xl text-white hover:text-gray-400 transition duration-200" />
            </a>
            <a href="https://github.com/Esmee29" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-5xl text-white hover:text-gray-400 transition duration-200" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-blue-800 p-6 rounded-lg shadow-lg max-w-md w-full space-y-4"
        >
          <div className="flex flex-col space-y-2">
            <label className="text-white font-semibold" htmlFor="user_name">
              Name
            </label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              className="p-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-300 text-black"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-white font-semibold" htmlFor="user_email">
              Email
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              className="p-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-300 text-black"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-white font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="p-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-300 text-black"
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
    </div>
  );
};

export default ContactPage;
