import React from 'react';
import ResponsiveImage from './ResponsiveImage';
import './Blog.css';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Complete Licensing Guide for Georgia',
      excerpt: 'Learn all the requirements and steps needed to get licensed as a luxury car rental business in Georgia.',
      image: '/blog-licensing-guide.jpg',
      date: 'December 5, 2025',
      category: 'Licensing',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Startup Success: From Idea to Launch',
      excerpt: 'Follow our proven framework for launching your luxury car rental business successfully in 90 days.',
      image: '/blog-startup-success.jpg',
      date: 'December 3, 2025',
      category: 'Business Planning',
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Mastering Customer Service Excellence',
      excerpt: 'Discover the customer service strategies that set luxury rental businesses apart from the competition.',
      image: '/blog-customer-service.jpg',
      date: 'November 28, 2025',
      category: 'Customer Service',
      readTime: '6 min read'
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h2>Latest Insights & Resources</h2>
          <p>Expert tips, guides, and success stories from the luxury car rental industry</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
                <ResponsiveImage
                  src={post.image}
                  alt={post.title}
                  className="blog-thumbnail"
                  width="100%"
                  height="250px"
                  objectFit="cover"
                  loading="lazy"
                />
                <div className="blog-category-badge">{post.category}</div>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>

                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <a href="#" className="blog-read-more">
                  Read Full Article →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <h3>Want More Business Tips?</h3>
          <p>Subscribe to our newsletter for weekly insights and exclusive resources</p>
          <button className="blog-subscribe-btn">Subscribe Now</button>
        </div>
      </div>
    </section>
  );
}
