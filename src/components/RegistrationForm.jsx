import React, { useState } from 'react';
import { registerUser } from '../services/api';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      setError('Full Name and Email are required.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await registerUser(formData);
      setSuccess(true);
      setFormData({ fullName: '', email: '', company: '', jobTitle: '' });
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registration" className="section">
      <div className="container">
        <h2>Register for the Event</h2>
        {success && <p className="success">Registration successful! Thank you for registering.</p>}
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;