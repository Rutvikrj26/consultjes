import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { productsByCategory, categoryGroups, getAllProducts } from '../utils/productData';
import './Products.css';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState(searchParams.get('subcategory') || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, [selectedCategory, selectedSubcategory, searchQuery]);

  const loadProducts = () => {
    let products = [];

    if (selectedCategory === 'all') {
      // Get all products
      Object.entries(productsByCategory).forEach(([categoryName, categoryData]) => {
        if (categoryData.subcategories) {
          categoryData.subcategories.forEach(subcategory => {
            if (subcategory.products) {
              subcategory.products.forEach(product => {
                products.push({
                  ...product,
                  category: categoryName,
                  subcategory: subcategory.name
                });
              });
            }
          });
        }
      });
    } else {
      // Get products from selected category
      const categoryData = productsByCategory[selectedCategory];
      if (categoryData && categoryData.subcategories) {
        categoryData.subcategories.forEach(subcategory => {
          if (selectedSubcategory === 'all' || subcategory.name === selectedSubcategory) {
            if (subcategory.products) {
              subcategory.products.forEach(product => {
                products.push({
                  ...product,
                  category: selectedCategory,
                  subcategory: subcategory.name
                });
              });
            }
          }
        });
      }
    }

    // Apply search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      products = products.filter(product =>
        product.name?.toLowerCase().includes(lowerQuery) ||
        product.design?.toLowerCase().includes(lowerQuery) ||
        product.applications?.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredProducts(products);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('all');
    setSearchParams({ category });
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSearchParams({ category: selectedCategory, subcategory });
  };

  const getAvailableSubcategories = () => {
    if (selectedCategory === 'all') return [];
    const categoryData = productsByCategory[selectedCategory];
    return categoryData?.subcategories || [];
  };

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="products-header">
        <div className="container">
          <div className="products-header__content">
            <h1 className="products-header__title">Product Catalog</h1>
            <p className="products-header__description">
              Browse our comprehensive selection of industrial components for procurement and installation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="products-content section">
        <div className="container">
          <div className="products-layout">
            {/* Sidebar Filters */}
            <aside className="products-sidebar">
              <div className="sidebar-section">
                <h3 className="sidebar-title">Search Products</h3>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by name or application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="sidebar-section">
                <h3 className="sidebar-title">Categories</h3>
                <div className="filter-list">
                  <button
                    className={`filter-item ${selectedCategory === 'all' ? 'filter-item--active' : ''}`}
                    onClick={() => handleCategoryChange('all')}
                  >
                    All Products
                  </button>
                  {Object.keys(productsByCategory).map((category) => (
                    <button
                      key={category}
                      className={`filter-item ${selectedCategory === category ? 'filter-item--active' : ''}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {selectedCategory !== 'all' && getAvailableSubcategories().length > 0 && (
                <div className="sidebar-section">
                  <h3 className="sidebar-title">Subcategories</h3>
                  <div className="filter-list">
                    <button
                      className={`filter-item ${selectedSubcategory === 'all' ? 'filter-item--active' : ''}`}
                      onClick={() => handleSubcategoryChange('all')}
                    >
                      All
                    </button>
                    {getAvailableSubcategories().map((subcategory) => (
                      <button
                        key={subcategory.name}
                        className={`filter-item ${selectedSubcategory === subcategory.name ? 'filter-item--active' : ''}`}
                        onClick={() => handleSubcategoryChange(subcategory.name)}
                      >
                        {subcategory.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </aside>

            {/* Products Grid */}
            <div className="products-main">
              <div className="products-toolbar">
                <p className="products-count">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="products-grid">
                  {filteredProducts.map((product, index) => (
                    <Card key={index} variant="elevated" hover padding="lg" className="product-card">
                      <div className="product-card__header">
                        <div className="product-card__category">
                          {product.category}
                        </div>
                        {product.tech_tier && (
                          <div className="product-card__badge">
                            {product.tech_tier}
                          </div>
                        )}
                      </div>

                      <h3 className="product-card__title">{product.name}</h3>

                      {product.design && (
                        <p className="product-card__design">{product.design}</p>
                      )}

                      {product.applications && (
                        <p className="product-card__description">{product.applications}</p>
                      )}

                      {product.differentiator && (
                        <div className="product-card__differentiator">
                          <strong>Key Feature:</strong> {product.differentiator}
                        </div>
                      )}

                      {product.specifications && Object.keys(product.specifications).length > 0 && (
                        <div className="product-card__specs">
                          {Object.entries(product.specifications)
                            .filter(([key, value]) => typeof value !== 'object' || value === null)
                            .slice(0, 3)
                            .map(([key, value]) => (
                              <div key={key} className="spec-item">
                                <span className="spec-label">{key.replace(/_/g, ' ')}:</span>
                                <span className="spec-value">{value}</span>
                              </div>
                            ))}
                        </div>
                      )}

                      <div className="product-card__actions">
                        <Button variant="primary" size="sm" fullWidth>
                          Request Quote
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="products-empty">
                  <div className="empty-icon">🔍</div>
                  <h3>No products found</h3>
                  <p>Try adjusting your filters or search query</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
