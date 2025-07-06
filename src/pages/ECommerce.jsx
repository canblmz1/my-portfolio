import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiStar, FiSearch, FiFilter, FiHeart, FiEye } from 'react-icons/fi';
import './ECommerce.scss';

const ECommerce = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState(['Tümü']);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showCart, setShowCart] = useState(false);

  // Örnek ürünler - 2040 futuristik temalı
  const sampleProducts = [
    {
      id: 1,
      name: "NeuroLink Akıllı Gözlük",
      price: 2999,
      image: "/api/placeholder/300/300",
      category: "Teknoloji",
      rating: 4.8,
      description: "Gelecekte beyin-bilgisayar arayüzü teknolojisi ile çalışan akıllı gözlük",
      features: ["Nöral bağlantı", "AR görüntü", "Holografik ekran"],
      stock: 15
    },
    {
      id: 2,
      name: "Quantum Işık Hızı Laptop",
      price: 4999,
      image: "/api/placeholder/300/300",
      category: "Teknoloji",
      rating: 4.9,
      description: "Kuantum işlemci teknolojisi ile çalışan ultra hızlı laptop",
      features: ["Kuantum işlemci", "Hologram klavye", "Anti-gravitasyon"],
      stock: 8
    },
    {
      id: 3,
      name: "Biyo-Organik Akıllı Saat",
      price: 1999,
      image: "/api/placeholder/300/300",
      category: "Giyilebilir",
      rating: 4.7,
      description: "Canlı organizma ile entegre olabilen akıllı saat",
      features: ["Biyo-sensör", "DNA analizi", "Sağlık taraması"],
      stock: 23
    },
    {
      id: 4,
      name: "Holo-Giyim Takımı",
      price: 3499,
      image: "/api/placeholder/300/300",
      category: "Moda",
      rating: 4.6,
      description: "İstediğiniz kıyafeti hologram ile oluşturan giyim teknolojisi",
      features: ["Hologram projeksiyon", "Değişken design", "Akıllı kumaş"],
      stock: 12
    },
    {
      id: 5,
      name: "Anti-Gravitasyon Ayakkabı",
      price: 2499,
      image: "/api/placeholder/300/300",
      category: "Moda",
      rating: 4.5,
      description: "Yerçekimini etkisiz hale getiren futuristik ayakkabı",
      features: ["Anti-gravity teknoloji", "Havada yürüme", "Enerji tasarrufu"],
      stock: 18
    },
    {
      id: 6,
      name: "Teleportasyon Cihazı Mini",
      price: 9999,
      image: "/api/placeholder/300/300",
      category: "Teknoloji",
      rating: 5.0,
      description: "Kısa mesafe teleportasyon imkanı sunan taşınabilir cihaz",
      features: ["Quantum teleportation", "5km menzil", "Güvenli transfer"],
      stock: 3
    },
    {
      id: 7,
      name: "Zaman Manipülasyon Saati",
      price: 7999,
      image: "/api/placeholder/300/300",
      category: "Giyilebilir",
      rating: 4.9,
      description: "Kişisel zaman dilimini kontrol edebilen özel saat",
      features: ["Zaman yavaşlatma", "Hızlandırma", "Durdurma"],
      stock: 6
    },
    {
      id: 8,
      name: "Düşünce Okuma Kulaklığı",
      price: 3999,
      image: "/api/placeholder/300/300",
      category: "Teknoloji",
      rating: 4.8,
      description: "Düşünceleri okuyabilen ve müziğe çeviren kulaklık",
      features: ["Nöral okuma", "Düşünce-müzik", "Telepati özelliği"],
      stock: 11
    }
  ];

  useEffect(() => {
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
    
    // Kategorileri otomatik oluştur
    const uniqueCategories = ['Tümü', ...new Set(sampleProducts.map(p => p.category))];
    setCategories(uniqueCategories);
  }, []);

  // Ürün filtreleme
  useEffect(() => {
    let filtered = products;

    // Kategori filtresi
    if (selectedCategory !== 'Tümü') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Arama filtresi
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sıralama
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm, sortBy]);

  // Sepete ekleme
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Sepetten çıkarma
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Toplam fiyat hesaplama
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="ecommerce-page">
      {/* Hero Section */}
      <section className="ecommerce-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>E-Ticaret 2040</h1>
            <p>Geleceğin teknolojisi bugün sizinle!</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">{products.length}</span>
                <span className="label">Futuristik Ürün</span>
              </div>
              <div className="stat">
                <span className="number">2040</span>
                <span className="label">Gelecek Yılı</span>
              </div>
              <div className="stat">
                <span className="number">∞</span>
                <span className="label">İmkan</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-controls">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Gelecekten ürün ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter-group">
              <FiFilter className="filter-icon" />
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="sort-group">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="name">İsme Göre</option>
                <option value="price-low">Fiyat: Düşükten Yükseğe</option>
                <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
                <option value="rating">Puana Göre</option>
              </select>
            </div>

            <button 
              className="cart-btn"
              onClick={() => setShowCart(!showCart)}
            >
              <FiShoppingCart />
              <span className="cart-count">{cart.length}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <button className="overlay-btn">
                      <FiEye />
                    </button>
                    <button className="overlay-btn">
                      <FiHeart />
                    </button>
                  </div>
                  {product.stock < 10 && (
                    <span className="stock-warning">Son {product.stock} adet!</span>
                  )}
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-features">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>

                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={i < Math.floor(product.rating) ? 'star filled' : 'star'}
                      />
                    ))}
                    <span className="rating-text">({product.rating})</span>
                  </div>

                  <div className="product-footer">
                    <div className="price">
                      <span className="currency">₺</span>
                      <span className="amount">{product.price.toLocaleString()}</span>
                    </div>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                      disabled={product.stock === 0}
                    >
                      <FiShoppingCart />
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <h3>Ürün bulunamadı</h3>
              <p>Arama kriterlerinizi değiştirmeyi deneyin.</p>
            </div>
          )}
        </div>
      </section>

      {/* Shopping Cart Modal */}
      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <div className="cart-header">
              <h3>Alışveriş Sepeti</h3>
              <button onClick={() => setShowCart(false)}>×</button>
            </div>
            
            <div className="cart-items">
              {cart.length === 0 ? (
                <p>Sepetiniz boş</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>Adet: {item.quantity}</p>
                      <p>₺{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}>
                      Sil
                    </button>
                  </div>
                ))
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="total-price">
                  <strong>Toplam: ₺{getTotalPrice().toLocaleString()}</strong>
                </div>
                <button className="checkout-btn">
                  Satın Al
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ECommerce;
