import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiBookOpen, FiCode, FiAward } from 'react-icons/fi';
import { personalData } from '../data/personalData';
import './About.scss';

const About = () => {
  // Kişisel veri dosyasından bilgileri al
  const { education, skills, aboutMe, name } = personalData;
  
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Hakkımda</h1>
            <div className="about-subtitle">Web Geliştirme Tutkusuyla</div>
          </motion.div>
        </div>
      </section>
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="image-container">
                {/* Profil resmi */}
                <div className="placeholder-image">CB</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2>{name} Kimdir?</h2>
              {aboutMe.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              
              <a href="/resume.pdf" className="btn" download>
                <FiDownload className="icon" /> CV'mi İndir
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Yeteneklerim</h2>
          
          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div 
                className="skill-item" 
                key={index}
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress" 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="education-section">
        <div className="container">
          <h2 className="section-title">Eğitim Geçmişi</h2>
          
          <div className="timeline">
            {education.map((item) => (
              <motion.div 
                className="timeline-item" 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-icon">
                  <FiBookOpen />
                </div>
                <div className="timeline-content">
                  <h3>{item.degree}</h3>
                  <h4>{item.institution}</h4>
                  <div className="timeline-period">{item.period}</div>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="highlights-section">
        <div className="container">
          <h2 className="section-title">Neler Yapıyorum?</h2>
          
          <div className="highlights-grid">
            <motion.div 
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="highlight-icon">
                <FiCode />
              </div>
              <h3>Web Geliştirme</h3>
              <p>Modern ve kullanıcı dostu web uygulamaları geliştiriyorum. SEO dostu ve performanslı siteler tasarlamak önceliğim.</p>
            </motion.div>
            
            <motion.div 
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="highlight-icon">
                <FiAward />
              </div>
              <h3>Sürekli Öğrenme</h3>
              <p>Teknoloji dünyasındaki gelişmeleri takip ediyor, yeni araçları ve yaklaşımları projelerime entegre ediyorum.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;