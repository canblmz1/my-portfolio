import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiClock, FiTag } from 'react-icons/fi';
import './Blog.scss';

const Blog = () => {
  // Blog yazıları verileri
  const blogsData = [
    {
      id: 1,
      title: "React Hooks ile Durum Yönetimi",
      excerpt: "React Hooks API'sinin state yönetimini nasıl kolaylaştırdığını inceleyelim.",
      image: "blog1.jpg",
      date: "15 Haziran 2024",
      category: "React",
      readTime: "5 dakika",
      author: "Cuma Can Bilmez"
    },
    {
      id: 2,
      title: "Modern CSS Teknikleri",
      excerpt: "CSS Grid, Flexbox ve diğer modern CSS özelliklerinin web tasarımına kattığı avantajlar.",
      image: "blog2.jpg",
      date: "2 Haziran 2024",
      category: "CSS",
      readTime: "4 dakika",
      author: "Cuma Can Bilmez"
    },
    {
      id: 3,
      title: "Node.js ile RESTful API Oluşturma",
      excerpt: "Express.js kullanarak kapsamlı bir RESTful API geliştirme adımları.",
      image: "blog3.jpg",
      date: "20 Mayıs 2024",
      category: "Node.js",
      readTime: "7 dakika",
      author: "Cuma Can Bilmez"
    },
    {
      id: 4,
      title: "Web Performans Optimizasyonu",
      excerpt: "Web sitelerinizin yükleme hızını artırmak için uygulayabileceğiniz etkili stratejiler.",
      image: "blog4.jpg",
      date: "5 Mayıs 2024",
      category: "Performans",
      readTime: "6 dakika",
      author: "Cuma Can Bilmez"
    }
  ];
  
  // Kategoriler
  const categories = ["Tümü", "React", "CSS", "Node.js", "Performans"];
  
  // State'ler
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tümü');
  
  // Blog yazılarını filtreleme
  const filteredBlogs = blogsData.filter(blog => {
    const matchesCategory = activeCategory === 'Tümü' || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <motion.div
            className="blog-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Blog</h1>
            <div className="blog-subtitle">Son Yazılarım ve Öğrendiklerim</div>
          </motion.div>
        </div>
      </section>
      
      <section className="blog-content">
        <div className="container">
          <div className="blog-tools">
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Blog yazılarında ara..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="categories-container">
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
          
          <div className="blogs-grid">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <motion.div 
                  className="blog-card"
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="blog-image">
                    {/* Blog resmi */}
                    <div className="placeholder-image">{blog.title.substring(0, 2)}</div>
                    <div className="blog-category">{blog.category}</div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-meta">
                      <span><FiClock /> {blog.readTime}</span>
                      <span><FiTag /> {blog.date}</span>
                    </div>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <Link to={`/blog/${blog.id}`} className="read-more">
                      Devamını Oku
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-blogs">
                <p>Aradığınız kriterlere uygun blog yazısı bulunamadı.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;