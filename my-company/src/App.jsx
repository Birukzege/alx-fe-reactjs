import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {
  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Form submitted!');
    };

    return (
      <div style={{ padding: '20px' }}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: 'block', margin: '10px 0', padding: '5px', width: '100%', fontSize: '16px' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: 'block', margin: '10px 0', padding: '5px', width: '100%', fontSize: '16px' }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ display: 'block', margin: '10px 0', padding: '5px', width: '100%', fontSize: '16px' }}
          />
          <button type="submit" style={{ display: 'block', margin: '10px 0', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Send Message</button>
        </form>
      </div>
    );
  }

  const Home = () => {
    return (
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f4f4f4', color: '#333', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '2em', margin: '10px 0', color: '#007bff' }}>Welcome to Our Company</h1>
        <p style={{ fontSize: '1.2em' }}>We are dedicated to delivering excellence in all our services.</p>
      </div>
    );
  }

  const About = () => {
    return (
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9', color: '#333', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '2em', margin: '10px 0', color: '#007bff' }}>About Us</h1>
        <p style={{ fontSize: '1.2em' }}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
      </div>
    );
  }

  const Services = () => {
    return (
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f6f6f6', color: '#333', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '2em', margin: '10px 0', color: '#007bff' }}>Our Services</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ fontSize: '1.2em', padding: '10px 0', borderBottom: '1px solid #ccc' }}>Technology Consulting</li>
          <li style={{ fontSize: '1.2em', padding: '10px 0', borderBottom: '1px solid #ccc' }}>Market Analysis</li>
          <li style={{ fontSize: '1.2em', padding: '10px 0' }}>Product Development</li>
        </ul>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
