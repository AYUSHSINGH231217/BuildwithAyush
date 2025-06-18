import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // success or error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null); 

    try {
      const response = await fetch("https://formspree.io/f/mldbybpk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          navigate("/thank-you");
        }, 1500); // Redirect after 1.5s
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h6 className="text-center">
          <span className="btn btn-sm theme-button theme-text">What's next!</span>
        </h6>
        <h2 className="section-heading text-center">Get In Touch</h2>
        <p className="text-center muted-text mt-3 mb-4">
          Interested in working together? We should schedule a time to chat. I'll bring the coffee.
        </p>
        <div className="row justify-content-center" data-aos="fade-down" data-aos-delay="500">
          <div className="col-lg-8">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row g-2">
                  <div className="col-md-6">
                    <input type="text" className="form-control" name="name" placeholder="Name *" required onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" name="email" placeholder="Email *" required onChange={handleChange} />
                  </div>
                  <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject *" required onChange={handleChange} />
                  </div>
                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="5" placeholder="Your message *" required onChange={handleChange}></textarea>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn primary-bg-btn mt-2">
                      Send Message <i className="bi bi-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
              </form>

              {/* On-Screen Feedback Message */}
              {status === 'success' && (
                <div className="alert alert-success mt-3" role="alert">
                  ✅ Your message was sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="alert alert-danger mt-3" role="alert">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
