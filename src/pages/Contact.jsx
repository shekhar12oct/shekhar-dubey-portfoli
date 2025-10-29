import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Loader2,
} from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mjkpweak', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission failed:', err);
      setStatus('error');
    }
  };

  return (
    <section id='contact' className='py-20 px-4 md:px-8'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>
          Get in <span className='text-blue-500'>Touch</span>
        </h2>
        <p className='text-gray-600 dark:text-gray-400 mb-12'>
          Whether you have a question or just want to say hello — my inbox is
          always open!
        </p>
      </div>

      <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-12'>
        {/* Contact Info */}
        <div className='flex flex-col justify-center space-y-6 text-gray-700 dark:text-gray-300'>
          <div className='flex items-center gap-3'>
            <Mail className='text-blue-500' />
            <span>dubeyshekhar1997@gmail.com</span>
          </div>
          <div className='flex items-center gap-3'>
            <Phone className='text-blue-500' />
            <span>+91 7310300648</span>
          </div>
          <div className='flex items-center gap-3'>
            <MapPin className='text-blue-500' />
            <span>Gurugram, India</span>
          </div>

          {/* Social Icons */}
          <div className='flex gap-6 pt-4'>
            <a
              href='https://github.com/shekhar12oct?tab=repositories'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-500 transition-colors'
            >
              <Github size={24} />
            </a>
            <a
              href='https://linkedin.com/in/shekhar-dubey-690547143'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-500 transition-colors'
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className='bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6'
        >
          <div>
            <label htmlFor='name' className='block text-sm font-medium mb-2'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              required
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-900'
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium mb-2'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-900'
            />
          </div>

          <div>
            <label htmlFor='message' className='block text-sm font-medium mb-2'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              rows='4'
              required
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-900'
            ></textarea>
          </div>

          <button
            type='submit'
            disabled={status === 'loading'}
            className='w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-70 transition-all'
          >
            {status === 'loading' ? (
              <>
                <Loader2 className='animate-spin' size={18} />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>

          {status === 'success' && (
            <p className='text-green-500 text-center animate-fadeIn pt-2'>
              ✅ Thank you! Your message has been sent.
            </p>
          )}
          {status === 'error' && (
            <p className='text-red-500 text-center animate-fadeIn pt-2'>
              ❌ Oops! Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
