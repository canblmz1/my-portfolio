import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import './Contact.scss';

const Contact = () => {
  // Form state'i
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Form durumu
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  // Input değişikliklerini işle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  // Form gönderimi
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form doğrulama
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Lütfen tüm gerekli alanları doldurun.'
      });
      return;
    }
    
    // Form gönderimi simülasyonu (gerçekte EmailJS veya başka bir servis kullanılabilir)
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.'
    });
    
    // Formu sıfırla
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // 5 saniye sonra durum mesajını sıfırla
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>İletişim</h1>
            <div className="contact-subtitle">Benimle İletişime Geçin</div>
          </motion.div>
        </div>
      </section>
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>İletişim Bilgileri</h2>
              <p>Aşağıdaki iletişim bilgilerimden bana ulaşabilir veya iletişim formunu doldurarak mesaj gönderebilirsiniz.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FiMapPin />
                  </div>
                  <div className="contact-text">
                    <h3>Konum</h3>
                    <p>Ondokuz Mayıs Üniversitesi, Samsun, Türkiye</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FiMail />
                  </div>
                  <div className="contact-text">
                    <h3>E-posta</h3>
                    <p><a href="mailto:canbilmez433@gmail.com">canbilmez433@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FiPhone />
                  </div>
                  <div className="contact-text">
                    <h3>Telefon</h3>
                    <p>İletişime geçin</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Sosyal Medya</h3>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/can-bilmez-82151a364" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FiLinkedin />
                  </a>
                  <a href="https://github.com/canblmz1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2>Mesaj Gönder</h2>
              
              {formStatus.message && (
                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Ad Soyad*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınız ve soyadınız"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-posta*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-posta adresiniz"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Konu</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Mesajınızın konusu"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mesaj*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınızı buraya yazın"
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-submit">
                  <FiSend className="icon" /> Mesaj Gönder
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.2844661210396!2d36.31525853967583!3d41.418015681140524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408888bc94e14b21%3A0xd6869b206632267b!2sOndokuz%20May%C4%B1s%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1656074900125!5m2!1str!2str"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ondokuz Mayıs Üniversitesi Konumu"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;