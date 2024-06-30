import React, { useEffect } from 'react';
import logo from '../img/logo.png';
import { useForm, ValidationError } from '@formspree/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Component() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [state, handleSubmit] = useForm("xnnaqqvj");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(e);
    
    if (result && result.data && result.data.ok) {
      toast.success('Message sent successfully!');
      setTimeout(() => {
        window.location.href = '/'; // Redirect to home page after 3 seconds
      }, 3000);
    } else {
      toast.success('Message sent successfully!');
      setTimeout(() => {
        window.location.href = '/'; // Redirect to home page after 3 seconds
      }, 3000);
    }
  };
  

  return (
    <div>
      <ToastContainer />
      <nav className="flex border items-center py-2 navglass sticky top-0 z-50">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-background">
          <a className="flex items-center justify-center cursor-pointer" href='/'>
            <img className='w-28 h-28 scale-125' src={logo} alt="logo" />
          </a>
        </header>
        <div className="ml-auto flex gap-4 sm:gap-6 mr-5">
          <a className="text-sm font-medium hover:underline cursor-pointer underline-offset-4" href='/team'>Team</a>
        </div>
      </nav>

      <div className="w-full max-w-5xl mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground mb-8">
              Have a question or need assistance? Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground">
                  Bengaluru
                  <br />
                  (Karnataka)
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">(+91) 9716661931</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">kianainteriors@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <div className='border py-5 px-7 rounded-xl shadow-lg'>
              <form className="grid gap-4" onSubmit={handleFormSubmit}>
                <div className="grid gap-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input data-aos='fade-up' data-aos-delay='0'
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input data-aos='fade-up' data-aos-delay='300'
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input data-aos='fade-up' data-aos-delay='700'
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter a subject"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea data-aos='fade-up' data-aos-delay='300'
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm min-h-[120px]"
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button data-aos='fade-up' data-aos-delay='500'
                  type="submit" disabled={state.submitting}
                  className=" mb-10 bg-red-400 w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
