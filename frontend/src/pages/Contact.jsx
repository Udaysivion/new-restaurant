import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Thank you for your message! We will get back to you soon.");
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-bg min-h-screen pt-24 pb-20"
    >
      <Helmet>
        <title>Contact Us | Taste of Home</title>
        <meta name="description" content="Get in touch with us for reservations, bulk orders, and queries." />
      </Helmet>

      {/* Stunning Hero */}
      <div className="relative pt-32 pb-40 flex items-center justify-center min-h-[60vh] overflow-hidden border-b border-[#d4af37]/20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=2000" alt="Restaurant Interior" className="w-full h-full object-cover transform scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/30"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-12">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#d4af37] tracking-[0.3em] uppercase text-[10px] font-bold mb-6 block drop-shadow-md">
            ~ Connect ~
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-6xl md:text-8xl font-heading font-light mb-6 text-white drop-shadow-lg">
            Get in Touch
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-lg text-[#cccccc] font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            We'd love to hear from you. Whether it's a reservation, feedback, or planning a special event in our luxurious dining hall, our concierge is here to assist.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Form */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full lg:w-3/5 bg-transparent p-8 md:p-12 border border-luxury relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 transform translate-x-10 -translate-y-10"></div>
            <h2 className="text-3xl font-heading font-light text-white mb-2 relative z-10">Send us a Message</h2>
            <p className="text-text-muted font-light mb-10 relative z-10">Fill out the form below and our team will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-text-muted mb-3 font-semibold">Full Name</label>
                  <input 
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-0 py-3 bg-transparent border-b border-luxury text-white focus:outline-none focus:border-primary transition-colors placeholder-gray-700 font-light"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-primary text-xs mt-2">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-text-muted mb-3 font-semibold">Phone Number</label>
                  <input 
                    {...register("phone", { required: "Phone is required" })}
                    className="w-full px-0 py-3 bg-transparent border-b border-luxury text-white focus:outline-none focus:border-primary transition-colors placeholder-gray-700 font-light"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="text-primary text-xs mt-2">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-text-muted mb-3 font-semibold">Email Address</label>
                  <input 
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full px-0 py-3 bg-transparent border-b border-luxury text-white focus:outline-none focus:border-primary transition-colors placeholder-gray-700 font-light"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-primary text-xs mt-2">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-text-muted mb-3 font-semibold">Event Type</label>
                  <select 
                    {...register("event")}
                    className="w-full px-0 py-3 bg-transparent border-b border-luxury text-white focus:outline-none focus:border-primary transition-colors font-light appearance-none"
                  >
                    <option value="General Query" className="bg-bg text-white">General Query</option>
                    <option value="Table Reservation" className="bg-bg text-white">Table Reservation</option>
                    <option value="Private Dining" className="bg-bg text-white">Private Dining</option>
                    <option value="Corporate Order" className="bg-bg text-white">Corporate Order</option>
                    <option value="Outdoor Catering" className="bg-bg text-white">Outdoor Catering</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-text-muted mb-3 font-semibold">Message</label>
                <textarea 
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className="w-full px-0 py-3 bg-transparent border-b border-luxury text-white focus:outline-none focus:border-primary transition-colors placeholder-gray-700 font-light resize-none"
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="text-primary text-xs mt-2">{errors.message.message}</p>}
              </div>

              <button type="submit" className="w-full border border-primary text-primary py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-primary hover:text-bg transition-colors flex justify-center items-center gap-3">
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          {/* Info & Map */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="w-full lg:w-2/5 flex flex-col gap-8">
            
            <div className="bg-transparent p-8 md:p-12 border border-luxury relative">
              <h3 className="text-2xl font-heading font-light text-white mb-10 border-b border-luxury pb-4">Contact Information</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-6 group">
                  <div className="text-primary mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    <MapPin size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase text-white font-semibold mb-2">Location</h4>
                    <p className="text-text-muted font-light leading-relaxed">123 Luxury Avenue, Culinary District,<br/>New Delhi, India 110001</p>
                  </div>
                </li>
                <li className="flex items-start gap-6 group">
                  <div className="text-primary mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Phone size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase text-white font-semibold mb-2">Phone</h4>
                    <p className="text-text-muted font-light leading-relaxed">+91 98765 43210<br/>+91 11 2345 6789</p>
                  </div>
                </li>
                <li className="flex items-start gap-6 group">
                  <div className="text-primary mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Mail size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase text-white font-semibold mb-2">Email</h4>
                    <p className="text-text-muted font-light leading-relaxed">hello@tasteofhome.com<br/>events@tasteofhome.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-6 group">
                  <div className="text-primary mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Clock size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase text-white font-semibold mb-2">Working Hours</h4>
                    <p className="text-text-muted font-light leading-relaxed">Mon - Fri: 11:00 AM - 11:00 PM<br/>Sat - Sun: 11:00 AM - 12:00 AM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Maps Placeholder */}
            <div className="bg-bg w-full h-[300px] border border-luxury overflow-hidden relative">
               <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted font-light">
                  <MapPin size={32} strokeWidth={1} className="mb-4 opacity-50" />
                  <span className="text-xs tracking-widest uppercase">Map Loading...</span>
               </div>
               {/* Embed actual iframe here later */}
               <iframe 
                 title="Google Maps"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754720782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1683901234567!5m2!1sen!2sin" 
                 className="absolute inset-0 w-full h-full opacity-30 hover:opacity-80 filter grayscale transition-all duration-700" 
                 style={{border:0}} 
                 allowFullScreen="" 
                 loading="lazy">
               </iframe>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;