import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import './Projects.scss';

// Import images
import eticaretImage from '../assets/images/eticaret.png';
import canImage from '../assets/images/can.jpg';

const Projects = () => {
  // Proje kategorileri
  const categories = ["Tümü", "Web", "Mobil", "Backend", "UI/UX"];
  
  // Aktif kategori state'i
  const [activeCategory, setActiveCategory] = useState("Tümü");
  
  // Proje verileri
  const projectsData = [
    {
      id: 1,
      title: "E-Ticaret 2040",
      description: "React 18.2 ve Node.js ile geliştirilmiş modern e-ticaret platformu. Tailwind CSS ile responsive tasarım, Framer Motion ile akıcı animasyonlar ve Zustand ile state management içerir.",
      image: "eticaret.png",
      category: "Web",
      technologies: ["React 18.2", "Node.js", "Tailwind CSS", "Framer Motion", "Zustand", "Express.js", "Vite"],
      liveLink: "https://eticaret-2040-l4g8bx3o0-cuma-can-bilmezs-projects.vercel.app",
      githubLink: "https://github.com/canblmz1/e-ticaret-2040",
      featured: true
    },
    {
      id: 2,
      title: "Blog Platformu",
      description: "Kullanıcıların blog yazıları oluşturabildiği ve paylaşabildiği bir platform.",
      image: "can.jpg",
      category: "Web",
      technologies: ["Django", "PostgreSQL", "Bootstrap"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/username/project",
      featured: true
    },
    {
      id: 3,
      title: "Görev Yönetimi Uygulaması",
      description: "Günlük görevleri yönetmek için React Native ile geliştirilen mobil uygulama.",
      image: "can.jpg",
      category: "Mobil",
      technologies: ["React Native", "Firebase"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/username/project"
    },
    {
      id: 4,
      title: "Portföy Web Sitesi",
      description: "Kişisel portföy için tasarladığım modern ve duyarlı web sitesi.",
      image: "can.jpg",
      category: "UI/UX",
      technologies: ["React", "SCSS", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/username/project"
    },
    {
      id: 5,
      title: "RESTful API Servisi",
      description: "Node.js ve Express ile geliştirilen kapsamlı bir RESTful API.",
      image: "can.jpg",
      category: "Backend",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/username/project"
    }
  ];
  
  // Kategoriye göre filtreleme
  const filteredProjects = activeCategory === "Tümü" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);
  
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <motion.div
            className="projects-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Projelerim</h1>
            <div className="projects-subtitle">Geliştirdiğim Çalışmalar</div>
          </motion.div>
        </div>
      </section>
      
      <section className="projects-content">
        <div className="container">
          <div className="filter-container">
            <div className="filter-icon">
              <FiFilter />
              <span>Filtrele:</span>
            </div>
            <div className="category-filters">
              {categories.map(category => (
                <button 
                  key={category} 
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div 
                className="project-card"
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-image">
                  {/* Proje resmi eklenecek */}
                  <div className="placeholder-image">{project.title}</div>
                  {project.featured && <span className="featured-badge">Öne Çıkan</span>}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
                        <FiExternalLink /> Canlı
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <FiGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>Bu kategoride henüz proje bulunmamaktadır.</p>
            </div>
          )}
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
            <h2>Birlikte Çalışmak İster misiniz?</h2>
            <p>Projenizi hayata geçirmek için benimle iletişime geçin.</p>
            <Link to="/contact" className="btn btn-lg">
              İletişime Geç
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;