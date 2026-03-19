import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Loader2, MessageSquare } from 'lucide-react';
import { useSelector } from 'react-redux';

const Contact = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [status, setStatus] = useState('idle');

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

  const inputCls = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 ${
    darkMode
      ? 'bg-white/5 text-white placeholder-gray-500 border border-white/10 focus:border-violet-500/60 focus:bg-violet-500/5'
      : 'bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100'
  }`;

  return (
    <section className={`py-24 px-6 ${darkMode ? '' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>
            Let&apos;s Talk
          </p>
          <h2 className={`text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get in{' '}
            <span className={darkMode ? 'gradient-text' : 'gradient-text-light'}>Touch</span>
          </h2>
          <p className={`mt-4 text-lg max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Whether you have a question, project idea, or just want to say hello &mdash; my inbox is always open!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div
              className={`p-6 rounded-2xl ${
                darkMode ? 'glass' : 'bg-white border border-gray-100 shadow-lg'
              }`}
            >
              <h3 className={`font-bold text-lg mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Info
              </h3>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'dubeyshekhar1997@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+91 73103 00648' },
                  { icon: MapPin, label: 'Location', value: 'Gurugram, India' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-white" />
                    </div>
                    <div>
                      <p className={`text-xs mb-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
                      <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`mt-8 pt-6 border-t ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                <p className={`text-xs mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Find me on</p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: 'https://github.com/shekhar12oct?tab=repositories', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/shekhar-dubey-690547143', label: 'LinkedIn' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all hover:scale-110 ${
                        darkMode
                          ? 'bg-white/5 text-gray-400 hover:text-violet-300 hover:bg-violet-500/10 border border-white/10'
                          : 'bg-gray-100 text-gray-600 hover:text-violet-600 hover:bg-violet-50'
                      }`}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? 'glass' : 'bg-white border border-gray-100 shadow-xl'
              }`}
            >
              <h3
                className={`font-bold text-lg mb-6 flex items-center gap-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                <MessageSquare
                  size={20}
                  className={darkMode ? 'text-violet-400' : 'text-violet-600'}
                />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Your Name
                    </label>
                    <input type="text" name="name" id="name" required placeholder="John Doe" className={inputCls} />
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Email Address
                    </label>
                    <input type="email" name="email" id="email" required placeholder="john@example.com" className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project..."
                    className={inputCls}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-emerald-400 font-medium py-1"
                  >
                    Your message has been sent successfully!
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-red-400 font-medium py-1"
                  >
                    Something went wrong. Please try again later.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
