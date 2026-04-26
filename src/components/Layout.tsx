import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Mail } from 'lucide-react';
import toyadhiLogo from '../assets/toyadhi-logo.png';

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
    return <div style={{ position: 'fixed', top: 0, left: 0, height: '3px', width: `${progress}%`, background: 'var(--secondary)', zIndex: 2000, transition: 'width 0.1s', boxShadow: '0 0 10px var(--secondary)' }} />;
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
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
                            <img src={toyadhiLogo} alt="Toyadhi - Integrated Agriculture Consulting & High-ROI Farming Models" title="Toyadhi: Smart Farming Solutions India" />
                        </Link>
                        <div className="nav-links">
                            <Link to="/farm-setup" className="nav-link">Setup</Link>
                            <Link to="/farm-optimization" className="nav-link">Optimization</Link>
                            <Link to="/case-studies" className="nav-link">Results</Link>
                            <Link to="/how-we-work" className="nav-link">Process</Link>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>Consultation</Link>
                        </div>
                        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="container">
                        <div className="mobile-menu glass" style={{
                            position: 'absolute',
                            top: '100%',
                            left: '0.5rem',
                            right: '0.5rem',
                            padding: '1.5rem',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            marginTop: '0.75rem',
                            backgroundColor: 'var(--bg-card)',
                            border: '1px solid var(--glass-border)',
                            boxShadow: 'var(--shadow-lg)',
                            zIndex: 1000
                        }}>
                            <Link to="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/farm-setup" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Farm Setup</Link>
                            <Link to="/farm-optimization" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Optimization</Link>
                            <Link to="/agri-business-consulting" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Consulting</Link>
                            <Link to="/case-studies" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
                            <Link to="/free-dpr" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Free DPR</Link>
                            <Link to="/contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Book Strategy Call</Link>
                        </div>
                    </div>
                )}
            </nav>
            {children}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid-extended">
                        <div className="footer-info">
                            <img src={toyadhiLogo} alt="Toyadhi - Modern Agriculture Consulting" title="Toyadhi Agriculture" style={{ height: '40px', borderRadius: '8px', background: 'white', padding: '2px', marginBottom: '2rem' }} />
                            <h3 className="footer-title">Turn your land into <span className="highlight">wealth.</span></h3>
                            <p className="footer-desc">Toyadhi helps Indian land owners unlock high profitability through smart farming models.</p>
                            <div className="footer-contact"><MessageCircle className="highlight" size={20} /> <span>+91 98XXX XXXXX</span></div>
                            <div className="footer-contact"><Mail className="highlight" size={20} /> <span>contact@toyadhi.com</span></div>
                        </div>
                        <div>
                            <h4 className="footer-column-title">Solutions</h4>
                            <nav className="footer-nav">
                                <Link to="/farm-setup" className="footer-link">Farm Setup</Link>
                                <Link to="/farm-optimization" className="footer-link">Yield Optimization</Link>
                                <Link to="/agri-business-consulting" className="footer-link">Consulting</Link>
                                <Link to="/free-dpr" className="footer-link">Free DPR Builder</Link>
                            </nav>
                        </div>
                        <div>
                            <h4 className="footer-column-title">Insights</h4>
                            <nav className="footer-nav">
                                <Link to="/case-studies" className="footer-link">Case Studies</Link>
                                <Link to="/hydroponics-cost-india" className="footer-link">Hydroponics Cost</Link>
                                <Link to="/polyhouse-farming-profit" className="footer-link">Polyhouse Profit</Link>
                                <Link to="/farming-business-ideas" className="footer-link">Business Ideas</Link>
                            </nav>
                        </div>
                        <div>
                            <h4 className="footer-column-title">Connect</h4>
                            <nav className="footer-nav">
                                <Link to="/about" className="footer-link">Our Mission</Link>
                                <Link to="/how-we-work" className="footer-link">Our Process</Link>
                                <Link to="/contact" className="footer-link">Contact Us</Link>
                                <a href="https://cal.com/sayak-moulic/15min" className="footer-link" target="_blank" rel="noopener noreferrer">Strategy Call</a>
                            </nav>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="copyright">
                            © {new Date().getFullYear()} Toyadhi. Built for High-Performance by <a href="https://kgphustlehouse.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Sayak - KGP Hustle House</a>.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
