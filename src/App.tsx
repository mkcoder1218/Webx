import { useState, FormEvent } from "react";
import "./App.css";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Your Telegram bot token (you should store this securely in a real app)
  const TELEGRAM_BOT_TOKEN = "7896894076:AAHvLnbz7WwomCskwN9_go9JvD5Cx-t_ATs";
  const TELEGRAM_CHAT_ID = "5589621167"; // Your personal Telegram chat ID

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const sendToTelegram = async () => {
    const message = `
📞 New Website Contact Request 📞

👤 Name: ${formData.name}
✉️ Email: ${formData.email}
📱 Phone: ${formData.phone || "Not provided"}
🛒 Service: ${formData.service || "Not specified"}

💬 Message:
${formData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      const data = await response.json();
      return data.ok;
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const success = await sendToTelegram();

      if (success) {
        setSubmitStatus({
          success: true,
          message:
            "Thank you! Your message has been sent. We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message:
            "Failed to send your message. Please try again or contact us directly.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app-container">
      <header>
        <div className="logo">
          <h1>WebExpress</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="#home"
                className={activeTab === "home" ? "active" : ""}
                onClick={() => handleTabClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeTab === "services" ? "active" : ""}
                onClick={() => handleTabClick("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={activeTab === "portfolio" ? "active" : ""}
                onClick={() => handleTabClick("portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#process"
                className={activeTab === "process" ? "active" : ""}
                onClick={() => handleTabClick("process")}
              >
                Our Process
              </a>
            </li>
            <li>
              <button
                onClick={() => setIsContactOpen(true)}
                className="contact-btn"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Professional Websites Delivered Fast</h1>
          <h2>Custom-designed, responsive websites in just 3 days</h2>
          <p>Affordable solutions starting at 4,000 ETB</p>
          <div className="hero-buttons">
            <button
              className="cta-button primary"
              onClick={() => setIsContactOpen(true)}
            >
              Get Started Today
            </button>
            <button
              className="cta-button secondary"
              onClick={() => handleTabClick("services")}
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">⚡</div>
          <h3>Fast Delivery</h3>
          <p>Get your website in just 3 days</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💼</div>
          <h3>Professional Design</h3>
          <p>Custom, modern aesthetics</p>
        </div>
        <div className="feature">
          <div className="feature-icon">📱</div>
          <h3>Mobile Responsive</h3>
          <p>Perfect on all devices</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🔍</div>
          <h3>SEO Optimized</h3>
          <p>Built to be found online</p>
        </div>
      </section>

      <section id="services" className="services">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>We provide tailored web solutions to meet your specific needs</p>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-header">
              <h3>Starter Website</h3>
              <p className="price">4,000 ETB</p>
            </div>
            <p>Perfect for small businesses and individuals</p>
            <ul>
              <li>3-5 Pages</li>
              <li>Mobile Responsive Design</li>
              <li>Contact Form</li>
              <li>Basic SEO Setup</li>
              <li>Social Media Integration</li>
              <li>Ready in 3 days</li>
            </ul>
            <button onClick={() => setIsContactOpen(true)}>Get Started</button>
          </div>
          <div className="service-card featured">
            <div className="service-badge">Most Popular</div>
            <div className="service-header">
              <h3>Business Website</h3>
              <p className="price">6,000 ETB</p>
            </div>
            <p>Ideal for growing businesses</p>
            <ul>
              <li>5-8 Pages</li>
              <li>Premium Responsive Design</li>
              <li>Advanced Contact Forms</li>
              <li>Enhanced SEO Setup</li>
              <li>Business Email Setup</li>
              <li>Google Maps Integration</li>
              <li>Social Media Integration</li>
              <li>Ready in 3 days</li>
            </ul>
            <button onClick={() => setIsContactOpen(true)}>Get Started</button>
          </div>
          <div className="service-card">
            <div className="service-header">
              <h3>E-commerce Store</h3>
              <p className="price">10,000 ETB</p>
            </div>
            <p>Start selling your products online</p>
            <ul>
              <li>Product Catalog (up to 20 products)</li>
              <li>Shopping Cart System</li>
              <li>Payment Gateway Integration</li>
              <li>Order Management</li>
              <li>Customer Accounts</li>
              <li>Mobile Responsive</li>
              <li>Ready in 5 days</li>
            </ul>
            <button onClick={() => setIsContactOpen(true)}>Get Started</button>
          </div>
        </div>
      </section>

      <section id="process" className="process">
        <div className="section-header">
          <h2>Our Process</h2>
          <p>Simple, efficient and transparent workflow</p>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Consultation</h3>
            <p>
              We discuss your needs, goals, and preferences to understand your
              vision
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Design</h3>
            <p>
              We create a custom design based on your requirements and brand
              identity
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Development</h3>
            <p>
              We build your website with clean code and optimized performance
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Review</h3>
            <p>You review the site and we make any necessary adjustments</p>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Launch</h3>
            <p>Your website goes live and starts working for your business</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <p>Recent projects we've delivered for our clients</p>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <div className="portfolio-img placeholder"></div>
            <div className="portfolio-content">
              <h3>Addis Restaurant</h3>
              <p>Full-featured restaurant website with online reservations</p>
              <span className="portfolio-tag">Business</span>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-img placeholder"></div>
            <div className="portfolio-content">
              <h3>EthioFit Studio</h3>
              <p>
                Fitness center website with class scheduling and member portal
              </p>
              <span className="portfolio-tag">Business</span>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-img placeholder"></div>
            <div className="portfolio-content">
              <h3>Habesha Boutique</h3>
              <p>E-commerce store featuring traditional Ethiopian clothing</p>
              <span className="portfolio-tag">E-commerce</span>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-img placeholder"></div>
            <div className="portfolio-content">
              <h3>Buna Coffee Shop</h3>
              <p>Coffee shop website with online ordering capabilities</p>
              <span className="portfolio-tag">Business</span>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Feedback from businesses we've helped succeed online</p>
        </div>
        <div className="testimonials-container">
          <div className="testimonial">
            <div className="testimonial-content">
              <p>
                "WebExpress delivered our restaurant website in just 3 days,
                exactly as promised. The design is beautiful and our customers
                love how easy it is to navigate."
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar placeholder-avatar"></div>
              <div className="author-info">
                <h4>Alem Kebede</h4>
                <p>Owner, Addis Restaurant</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>
                "The e-commerce store they built for our boutique has increased
                our sales by 40%. The process was smooth and the team was very
                responsive to our needs."
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar placeholder-avatar"></div>
              <div className="author-info">
                <h4>Tigist Haile</h4>
                <p>Founder, Habesha Boutique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to elevate your online presence?</h2>
        <p>Get your professional website in just 3 days</p>
        <button
          className="cta-button primary"
          onClick={() => setIsContactOpen(true)}
        >
          Contact Us Today
        </button>
      </section>

      {isContactOpen && (
        <div className="contact-modal">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setIsContactOpen(false)}
            >
              ×
            </button>
            <h2>Get in Touch</h2>
            <p className="modal-subtitle">
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            {submitStatus && (
              <div
                className={`submit-status ${
                  submitStatus.success ? "success" : "error"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+251 91 234 5678"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <option value="Starter Website - 4,000 ETB">
                    Starter Website - 4,000 ETB
                  </option>
                  <option value="Business Website - 6,000 ETB">
                    Business Website - 6,000 ETB
                  </option>
                  <option value="E-commerce Store - 10,000 ETB">
                    E-commerce Store - 10,000 ETB
                  </option>
                  <option value="Custom Project">Custom Project</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>WebExpress</h3>
            <p>
              Professional, fast, and affordable website development solutions
              for businesses in Ethiopia.
            </p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>
              <strong>Email:</strong> Kayo@startupagile.app
            </p>
            <p>Mimetechnology1218@gmail.com</p>
            <p>
              <strong>Phone:</strong> +251933894492 +251961145152
            </p>
            <p></p>
            <p>
              <strong>Address:</strong> Bole Road, Addis Ababa, Ethiopia
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#process">Our Process</a>
              </li>
              <li>
                <a href="#" onClick={() => setIsContactOpen(true)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} WebExpress. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
