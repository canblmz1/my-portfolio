import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <h3>Cuma Can Bilmez</h3>
            </Link>
            <p>Bilgisayar Programcılığı Öğrencisi</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Sayfalar</h4>
              <ul>
                <li><Link to="/">Ana Sayfa</Link></li>
                <li><Link to="/about">Hakkımda</Link></li>
                <li><Link to="/projects">Projelerim</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">İletişim</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>İletişim</h4>
              <ul>
                <li><a href="mailto:canbilmez433@gmail.com">canbilmez433@gmail.com</a></li>
                <li>Ondokuz Mayıs Üniversitesi</li>
                <li>Samsun, Türkiye</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Cuma Can Bilmez. Tüm hakları saklıdır.</p>
          
          <div className="social-links">
            <a href="https://github.com/canblmz1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/can-bilmez-82151a364" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:canbilmez433@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;