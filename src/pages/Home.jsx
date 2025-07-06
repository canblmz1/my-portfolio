import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiCode, FiDatabase, FiLayout } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Home.scss';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Merhaba, ben <span className="highlight">Cuma Can Bilmez</span></h1>
            <h2>Bilgisayar Programcısı & Web Geliştirici</h2>
            <p>Ondokuz Mayıs Üniversitesi'nde bilgisayar programcılığı okuyorum. Web geliştirme, veritabanları ve yazılım tasarımı konularında tutkulu bir öğrenciyim.</p>
            
            <div className="hero-buttons">
              <Link to="/projects" className="btn">
                Projelerimi İncele <FiArrowRight className="icon" />
              </Link>
              <a href="/resume.pdf" className="btn btn-outline" download>
                CV'mi İndir <FiDownload className="icon" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="profile-image">
              <img src="./assets/images/can.jpg" alt="Cuma Can Bilmez" />
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="skills">
        <div className="container">
          <h2 className="section-title">Yeteneklerim</h2>
          
          <div className="skills-container">
            <motion.div 
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="skill-icon">
                <FiCode />
              </div>
              <h3>Frontend Geliştirme</h3>
              <p>HTML, CSS, JavaScript, React</p>
            </motion.div>
            
            <motion.div 
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="skill-icon">
                <FiDatabase />
              </div>
              <h3>Backend Geliştirme</h3>
              <p>Node.js, Python, SQL, NoSQL</p>
            </motion.div>
            
            <motion.div 
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="skill-icon">
                <FiLayout />
              </div>
              <h3>UI/UX Tasarımı</h3>
              <p>Figma, Responsive Design</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Öne Çıkan Projeler</h2>
          
          <div className="projects-grid">
            <motion.div 
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="project-image">
                {/* Proje görsel alanı */}
                <div className="placeholder-image">Proje 1</div>
              </div>
              <div className="project-content">
                <h3>E-Ticaret Sitesi</h3>
                <p>React ve Node.js kullanarak geliştirdiğim kapsamlı bir e-ticaret platformu.</p>
                <div className="project-technologies">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <Link to="/projects/1" className="btn btn-sm">Detaylar</Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="project-image">
                {/* Proje görsel alanı */}
                <div className="placeholder-image">Proje 2</div>
              </div>
              <div className="project-content">
                <h3>Blog Platformu</h3>
                <p>Kullanıcıların blog oluşturabildiği ve paylaşabildiği bir platform.</p>
                <div className="project-technologies">
                  <span>Django</span>
                  <span>PostgreSQL</span>
                  <span>Bootstrap</span>
                </div>
                <Link to="/projects/2" className="btn btn-sm">Detaylar</Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-lg">
            <Link to="/projects" className="btn">
              Tüm Projeler <FiArrowRight className="icon" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="contact-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Bir projeniz mi var?</h2>
            <p>Projeleriniz için işbirliği yapmak ister misiniz? Bana ulaşın ve konuşalım.</p>
            <Link to="/contact" className="btn btn-lg">
              İletişime Geç
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;