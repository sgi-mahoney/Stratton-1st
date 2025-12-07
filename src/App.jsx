import { useState } from 'react'
import Header from './components/Header'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'
import Blog from './components/Blog'
import ResponsiveImage from './components/ResponsiveImage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-background">
            <ResponsiveImage
              src="/hero-luxury-cars.jpg"
              alt="Luxury car rental showroom"
              width="100%"
              height="100%"
              objectFit="cover"
              loading="eager"
            />
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Start Your Luxury Car Rental Business</h1>
            <p>Complete guide to launching and operating a successful luxury car rental business in Georgia</p>
            <button className="cta-button">Get Started Today</button>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2>What You'll Learn</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-image-wrapper">
                <ResponsiveImage
                  src="/business-planning-thumb.jpg"
                  alt="Business Planning"
                  width="100%"
                  height="200px"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <h3>📋 Business Planning</h3>
              <p>Comprehensive business plan templates and strategies</p>
            </div>
            <div className="feature-card">
              <div className="feature-image-wrapper">
                <ResponsiveImage
                  src="/fleet-management-thumb.jpg"
                  alt="Fleet Management"
                  width="100%"
                  height="200px"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <h3>🚗 Fleet Management</h3>
              <p>Vehicle selection, maintenance, and insurance</p>
            </div>
            <div className="feature-card">
              <div className="feature-image-wrapper">
                <ResponsiveImage
                  src="/financial-planning-thumb.jpg"
                  alt="Financial Planning"
                  width="100%"
                  height="200px"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <h3>💰 Financial Planning</h3>
              <p>Pricing strategies and profitability analysis</p>
            </div>
            <div className="feature-card">
              <div className="feature-image-wrapper">
                <ResponsiveImage
                  src="/marketing-growth-thumb.jpg"
                  alt="Marketing & Growth"
                  width="100%"
                  height="200px"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <h3>📱 Marketing & Growth</h3>
              <p>Digital marketing and customer acquisition</p>
            </div>
            <div className="feature-card">
              <h3>📜 Licensing & Permits</h3>
              <p>Complete guide to Georgia licensing requirements</p>
            </div>
            <div className="feature-card">
              <h3>⚖️ Legal Compliance</h3>
              <p>Insurance, contracts, and liability protection</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing">
          <h2>Choose Your Package</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <p className="price">$97</p>
              <ul>
                <li>✓ Business Planning Guide</li>
                <li>✓ Licensing Checklist</li>
                <li>✓ Email Support</li>
              </ul>
              <button>Get Started</button>
            </div>
            <div className="pricing-card featured">
              <h3>Professional</h3>
              <p className="price">$297</p>
              <ul>
                <li>✓ Everything in Starter</li>
                <li>✓ Fleet Management Templates</li>
                <li>✓ Financial Calculators</li>
                <li>✓ Priority Email Support</li>
              </ul>
              <button>Get Started</button>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <p className="price">$997</p>
              <ul>
                <li>✓ Everything in Professional</li>
                <li>✓ 1-on-1 Consultation</li>
                <li>✓ Marketing Templates</li>
                <li>✓ Lifetime Updates</li>
                <li>✓ Phone Support</li>
              </ul>
              <button>Get Started</button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <Blog />

        {/* Contact Section */}
        <section className="contact-section">
          <ContactPage />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
