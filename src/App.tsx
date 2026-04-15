import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Zap,
  Coins,
  ChevronRight,
  MessageCircle,
  Mail,
  TrendingUp,
  Shield,
  Wind,
  Sun
} from 'lucide-react';

import heroBg from './assets/hero-bg.png';
import integratedFarming from './assets/integrated-farming.png';
import inhouseFarming from './assets/inhouse-farming.png';
import toyadhiLogo from './assets/toyadhi-logo.png';

// --- Components ---

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      setProgress((window.scrollY / scrollHeight) * 100);
    };
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
  return <div style={{ position: 'fixed', top: 0, left: 0, height: '3px', width: `${progress}%`, background: 'var(--secondary)', zIndex: 2000, transition: 'width 0.1s' }} />;
};

const AnimateOnScroll = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setIsVisible(true); });
    }, { threshold: 0.1 });
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  return <div ref={domRef} className={`${className} animate-up ${isVisible ? 'visible' : ''}`}>{children}</div>;
};

const EvolutionJourney = () => {
  const [stage, setStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollPercent = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
      setStage(Math.floor(scrollPercent * 3.99));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stages = [
    { title: "The Dormant Soil", desc: "An empty landscape full of potential. Right now, it's just dirt. We see the blueprint of a future yield engine.", img: heroBg, overlay: 'rgba(7, 9, 8, 0.7)' },
    { title: "Engineering Life", desc: "Precision irrigation and waste-to-nutrient cycles begin to revive the ecosystem.", img: integratedFarming, overlay: 'rgba(59, 130, 246, 0.2)' },
    { title: "The Green Revolution", desc: "Lush growth takes over. Integrated crops and livestock create a self-sustaining cycle.", img: inhouseFarming, overlay: 'rgba(5, 150, 105, 0.2)' },
    { title: "Smart Optimization", desc: "Automation and AI maximize the yield. You see the profit hit your dashboard.", img: heroBg, overlay: 'rgba(59, 130, 246, 0.3)' }
  ];

  return (
    <section id="evolution" className="story-scroll-container" ref={containerRef}>
      <div className="story-sticky">
        {stages.map((s, i) => (
          <div key={i} className="story-bg" style={{ opacity: stage === i ? 1 : 0, backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', inset: 0, transition: 'opacity 1s ease' }}>
            <div className="story-overlay" style={{ backgroundColor: s.overlay, position: 'absolute', inset: 0 }} />
          </div>
        ))}
        <div className="container story-content-wrapper">
          <div className="story-stage-text">
            <span className="journey-badge" style={{ color: 'var(--secondary)' }}>Stage 0{stage + 1}</span>
            <h2 className="journey-title" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}>{stages[stage].title}</h2>
            <p className="journey-desc" style={{ fontSize: '1.4rem', color: '#fff', maxWidth: '600px' }}>{stages[stage].desc}</p>
            <div className="funnel-step-indicator" style={{ width: '200px', marginTop: '3rem' }}>
              {[0, 1, 2, 3].map(i => <div key={i} className={`step-dot ${i <= stage ? 'active' : ''}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FunnelForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ landSize: '', location: '', interest: '', email: '', whatsapp: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleFormSubmit = () => {
    // Basic validation
    if (!formData.email.includes('@')) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!/^\d{10}$/.test(formData.whatsapp)) {
      alert("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    console.log(">>> LEAD DATA CAPTURED <<<");
    console.log(formData);

    // Simulate storage
    localStorage.setItem('toyadhi_funnel_lead', JSON.stringify({
      ...formData,
      timestamp: new Date().toISOString()
    }));

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="roi-card animate-up visible">
        <div className="hero-badge">Analysis Complete</div>
        <h2 className="journey-title">Estimated Annual ROI</h2>
        <div className="roi-value" style={{ fontSize: 'clamp(3rem, 10vw, 5rem)' }}>₹45L - ₹65L</div>
        <p className="journey-desc">Based on your {formData.landSize} acre land in {formData.location}, we recommend the <strong>Integrated Smart Node</strong> model.</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '1rem' }}>Data securely saved to lead engine.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          <a href="https://cal.com/sayak-moulic/15min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download Blueprint</a>
          <button onClick={() => setIsSubmitted(false)} className="btn btn-outline">Recalculate</button>
        </div>
      </div>
    );
  }

  return (
    <div className="funnel-container">
      <div className="funnel-step-indicator">
        {[1, 2, 3, 4].map(s => <div key={s} className={`step-dot ${s <= step ? 'active' : ''}`} />)}
      </div>

      {step === 1 && (
        <div className="animate-up visible">
          <h3 className="funnel-title">Land Area</h3>
          <div className="funnel-options">
            {['1-5 Acres', '5-20 Acres', '20-50 Acres', '50+ Acres'].map(size => (
              <div key={size} className={`option-card ${formData.landSize === size ? 'selected' : ''}`} onClick={() => { setFormData({ ...formData, landSize: size }); nextStep(); }}>
                <div className="option-title">{size}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-up visible">
          <h3 className="funnel-title">Location</h3>
          <select className="funnel-select" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })}>
            <option value="">Select State</option>
            {indianStates.map(state => <option key={state} value={state} style={{ color: '#000' }}>{state}</option>)}
          </select>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={prevStep} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
            <button onClick={nextStep} className="btn btn-primary" style={{ flex: 2 }} disabled={!formData.location}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-up visible">
          <h3 className="funnel-title">Primary Goal</h3>
          <div className="funnel-options">
            {['Maximize ROI', 'Sustainability', 'Turnkey Setup', 'Legacy'].map(goal => (
              <div key={goal} className={`option-card ${formData.interest === goal ? 'selected' : ''}`} onClick={() => { setFormData({ ...formData, interest: goal }); nextStep(); }}>
                <div className="option-title">{goal}</div>
              </div>
            ))}
          </div>
          <button onClick={prevStep} className="btn btn-outline" style={{ marginTop: '2rem', width: '100%' }}>Back</button>
        </div>
      )}

      {step === 4 && (
        <div className="animate-up visible">
          <h3 className="funnel-title">Final Step</h3>
          <input type="email" placeholder="Email Address" className="funnel-input" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
          <div style={{ position: 'relative' }}>
            <input
              type="tel"
              placeholder="10-digit WhatsApp Number"
              className="funnel-input"
              value={formData.whatsapp}
              onChange={e => setFormData({ ...formData, whatsapp: e.target.value.replace(/\D/g, '').slice(0, 10) })}
              required
              style={{ paddingLeft: '3.5rem' }}
            />
            <span style={{ position: 'absolute', left: '1rem', top: '1.25rem', color: 'var(--text-muted)' }}>+91</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button type="button" onClick={prevStep} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
            <button onClick={handleFormSubmit} className="btn btn-primary" style={{ flex: 2 }} disabled={!formData.email || formData.whatsapp.length < 10}>Get Estimate <ChevronRight /></button>
          </div>
        </div>
      )}
    </div>
  );
};

const JourneyItem = ({ badge, title, desc, image, cta, reverse, link }: any) => (
  <div className="visual-journey-item" style={{ direction: reverse ? 'rtl' : 'ltr' }}>
    <AnimateOnScroll className="journey-image-box"><img src={image} alt={title} className="journey-image" /></AnimateOnScroll>
    <div className="journey-content" style={{ direction: 'ltr' }}>
      <AnimateOnScroll>
        <span className="journey-badge">{badge}</span><h3 className="journey-title">{title}</h3><p className="journey-desc">{desc}</p>
        <Link to={link || '#'} className="btn btn-outline">{cta || 'Learn More'} <ArrowRight size={18} /></Link>
      </AnimateOnScroll>
    </div>
  </div>
);

// --- 3D Components ---

const ThreeDLayout = () => {
  return (
    <main className="td-container">
      <div className="td-scene">
        <div className="td-card">
          <div className="hero-badge">Future Blueprint</div>
          <h1 className="journey-title" style={{ fontSize: '3rem' }}>Smart Farm <span className="highlight">Node 01</span></h1>
          <p className="journey-desc">Interactive 3D visualization of your integrated farming ecosystem. Every layer optimized for profit.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
            <div className="roi-card" style={{ padding: '1rem', transform: 'translateZ(50px)' }}>
              <Sun className="highlight" />
              <h4>Solar Feed</h4>
            </div>
            <div className="roi-card" style={{ padding: '1rem', transform: 'translateZ(80px)' }}>
              <Wind className="highlight" />
              <h4>IoT Sensors</h4>
            </div>
          </div>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '3rem', width: '100%', transform: 'translateZ(100px)' }}>Back to Home</Link>
        </div>
      </div>
    </main>
  );
};

// --- Layout ---

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <ScrollProgress />
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-container glass">
            <Link to="/" className="nav-brand">
              <img src={toyadhiLogo} alt="Toyadhi Logo" />
            </Link>
            <div className="nav-links">
              <Link to="/farm-setup" className="nav-link">Build</Link>
              <Link to="/case-studies" className="nav-link">Results</Link>
              <Link to="/how-we-work" className="nav-link">Process</Link>
              <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>Consultation</a>
            </div>
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="container">
            <div className="mobile-menu glass" style={{ position: 'absolute', top: '100%', left: '1rem', right: '1rem', padding: '2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem', backgroundColor: 'rgba(7, 9, 8, 0.98)', border: '1px solid var(--glass-border)' }}>
              <Link to="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/farm-setup" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Strategic Setup</Link>
              <Link to="/case-studies" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
              <Link to="/how-we-work" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Our Process</Link>
              <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary">Book Strategy Call</a>
            </div>
          </div>
        )}
      </nav>
      {children}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid-extended">
            <div className="footer-info">
              <img src={toyadhiLogo} alt="Toyadhi" style={{ height: '40px', borderRadius: '8px', background: 'white', padding: '2px', marginBottom: '2rem' }} />
              <h3 className="footer-title">Turn your land into <span className="highlight">wealth.</span></h3>
              <p className="footer-desc">Toyadhi helps Indian land owners unlock high profitability through smart farming models.</p>
              <div className="footer-contact"><MessageCircle className="highlight" size={20} /> <span>+91 98XXX XXXXX</span></div>
              <div className="footer-contact"><Mail className="highlight" size={20} /> <span>hello@toyadhi.in</span></div>
            </div>
            <div>
              <h4 className="footer-column-title">Strategic Setup</h4>
              <nav className="footer-nav">
                <Link to="/farm-setup" className="footer-link">Farm Setup</Link>
                <Link to="/farm-optimization" className="footer-link">Optimization</Link>
                <Link to="/case-studies" className="footer-link">Case Studies</Link>
                <Link to="/free-dpr" className="footer-link">Free DPR</Link>
              </nav>
            </div>
            <div>
              <h4 className="footer-column-title">Profit Analysis</h4>
              <nav className="footer-nav">
                <Link to="/hydroponics-cost-india" className="footer-link">Hydroponics Cost</Link>
                <Link to="/polyhouse-farming-profit" className="footer-link">Polyhouse Profit</Link>
                <Link to="/farming-business-ideas" className="footer-link">Business Ideas</Link>
                <Link to="/how-we-work" className="footer-link">Profit Standards</Link>
              </nav>
            </div>
            <div>
              <h4 className="footer-column-title">Company</h4>
              <nav className="footer-nav">
                <Link to="/about" className="footer-link">About Us</Link>
                <Link to="/integrated-solutions" className="footer-link">Solutions</Link>
                <Link to="/training" className="footer-link">Training</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
              </nav>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} Toyadhi. Built for High-Performance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Main Page ---

const Home = () => {
  return (
    <>
      <header className="hero">
        <div className="hero-video-container"><img src={heroBg} className="hero-bg" alt="Farmland" /><div className="hero-overlay" /></div>
        <div className="container">
          <div className="hero-content">
            <AnimateOnScroll>
              <div className="hero-badge"><Zap size={14} /> India's #1 Smart Farm Consultancy</div>
              <h1 className="hero-title">Don't let your land <br /><span className="gradient-text">sit idle.</span></h1>
              <p className="hero-subtitle">We engineer high-yield agricultural ecosystems that generate ₹50L+ in annual profit. You own the land, we handle the future.</p>
              <div className="hero-actions">
                <a href="#analysis" className="btn btn-primary btn-large">Free Profit Estimate <ChevronRight /></a>
                <a href="#evolution" className="btn btn-outline btn-large">The Vision</a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </header>

      <section id="analysis" className="v-section" style={{ backgroundColor: '#000' }}>
        <div className="container">
          <div className="responsive-grid">
            <div className="analysis-text-column">
              <AnimateOnScroll>
                <span className="journey-badge">Step 01: Analysis</span>
                <h2 className="journey-title">Land <span className="highlight">Potential</span></h2>
                <p className="journey-desc">Use our proprietary engine to calculate expected returns based on real ground data.</p>
                <div className="analysis-features" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                  {["Soil-to-Market Analysis", "Integrated Crop Planning", "DPR Ready"].map((f, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><CheckCircle className="highlight" size={20} /><span>{f}</span></div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
            <div className="analysis-form-column">
              <FunnelForm />
            </div>
          </div>
        </div>
      </section>

      <EvolutionJourney />

      <section className="v-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '8rem' }}>
            <AnimateOnScroll><span className="journey-badge">Technology Nodes</span><h2 className="journey-title">Proven Models</h2></AnimateOnScroll>
          </div>
          <JourneyItem badge="01. Integrated" title="Integrated Farming Cluster" desc="Self-sustaining ecosystem combining horticulture and livestock." image={integratedFarming} link="/models/integrated-farming" />
          <JourneyItem badge="02. Decentralized" title="Production Nodes" desc="Modular village clusters with global export access." image={heroBg} reverse link="/models/decentralized-nodes" />
          <JourneyItem badge="03. Hydroponic" title="In-House Smart Farm" desc="Climate-controlled vertical farming for year-round harvesting." image={inhouseFarming} link="/models/in-house-farming" />
        </div>
      </section>

      <section className="v-section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(5, 150, 105, 0.1))' }}>
        <div className="container text-center">
          <AnimateOnScroll>
            <h2 className="journey-title">Ready for your <span className="highlight">Legacy?</span></h2>
            <div className="stats-grid" style={{ marginTop: '5rem' }}>
              <div className="roi-card"><Coins className="highlight" size={40} /><h3>₹12L/Acre</h3><p>Annual Profit</p></div>
              <div className="roi-card"><Shield className="highlight" size={40} /><h3>Risk-Free</h3><p>Yield Assurance</p></div>
              <div className="roi-card"><TrendingUp className="highlight" size={40} /><h3>3.5x</h3><p>Market Yield</p></div>
            </div>
            <div style={{ marginTop: '5rem' }}><a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary btn-large">Strategy Call <ArrowRight /></a></div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

// --- Other Pages ---

const GenericPage = ({ title }: { title: string }) => (
  <main className="v-section" style={{ paddingTop: '12rem' }}><div className="container"><h1>{title}</h1><p>Content coming soon.</p><Link to="/" className="btn btn-outline">Home</Link></div></main>
);

const ModelPage = ({ title, badge, desc, image, features }: any) => (
  <main className="v-section" style={{ paddingTop: '12rem' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <span className="journey-badge">{badge}</span><h1 className="journey-title">{title}</h1><p className="journey-desc">{desc}</p>
          <div style={{ margin: '2rem 0' }}>{features.map((f: string, i: number) => <div key={i} style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}><CheckCircle className="highlight" /><span>{f}</span></div>)}</div>
          <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary">Book Consultation</a>
        </div>
        <div className="journey-image-box"><img src={image} className="journey-image" alt={title} /></div>
      </div>
    </div>
  </main>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/3d" element={<ThreeDLayout />} />
          <Route path="/farm-setup" element={<GenericPage title="Farm Setup" />} />
          <Route path="/farm-optimization" element={<GenericPage title="Optimization" />} />
          <Route path="/agri-business-consulting" element={<GenericPage title="Consulting" />} />
          <Route path="/case-studies" element={<GenericPage title="Case Studies" />} />
          <Route path="/free-dpr" element={<GenericPage title="Free DPR" />} />
          <Route path="/contact" element={<GenericPage title="Contact" />} />
          <Route path="/about" element={<GenericPage title="About Us" />} />
          <Route path="/how-we-work" element={<GenericPage title="Our Process" />} />
          <Route path="/hydroponics-cost-india" element={<GenericPage title="Hydroponics Cost" />} />
          <Route path="/polyhouse-farming-profit" element={<GenericPage title="Polyhouse Profit" />} />
          <Route path="/farming-business-ideas" element={<GenericPage title="Business Ideas" />} />
          <Route path="/integrated-solutions" element={<GenericPage title="Integrated Solutions" />} />
          <Route path="/models/integrated-farming" element={<ModelPage title="Integrated Farming" badge="High ROI" desc="Holistic ecosystem." image={integratedFarming} features={["Multi-layered revenue", "Zero Waste"]} />} />
          <Route path="/models/decentralized-nodes" element={<ModelPage title="Decentralized Nodes" badge="Scalable" desc="Modular units." image={heroBg} features={["Low Capital", "Shared Logistics"]} />} />
          <Route path="/models/in-house-farming" element={<ModelPage title="In-House Farming" badge="High Tech" desc="Vertical hydroponics." image={inhouseFarming} features={["Water Efficient", "Year-round harvest"]} />} />
        </Routes>
      </Layout>
    </Router>
  );
}
