import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const GenericPage = ({ title, h1, metaDesc }: { title: string, h1?: string, metaDesc?: string }) => (
    <main className="v-section" style={{ paddingTop: '12rem', minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
        {/* Background Aura */}
        <svg className="aura-blob" style={{ top: '0', right: '0', width: '600px', height: '600px', color: 'var(--primary)', opacity: 0.1 }} viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="currentColor" />
        </svg>

        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
            <span className="journey-badge" style={{ marginBottom: '1rem', display: 'block' }}>Strategy 2026</span>
            <h1 className="service-hero-title" style={{ marginBottom: '2rem' }}>{h1 || title}</h1>
            <p className="journey-desc" style={{ fontSize: '1.25rem', marginBottom: '4rem' }}>{metaDesc || "Discover how Toyadhi is reshaping the agricultural landscape in India with data-driven models and sustainable engineering."}</p>

            <div className="roi-card glass" style={{ textAlign: 'left', padding: '3rem' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Full Analysis Underway</h3>
                <p style={{ opacity: 0.8, marginBottom: '2rem' }}>We are currently updating this strategy page with the latest 2026 ground data, ROI breakdowns, and implementation guides. Stay tuned for the complete deep dive.</p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary">Notify Me</Link>
                    <Link to="/" className="btn btn-outline">Back to Home</Link>
                </div>
            </div>
        </div>
    </main>
);

export const ModelPage = ({ title, badge, desc, image, features }: any) => (
    <main className="v-section" style={{ paddingTop: '12rem' }}>
        <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <span className="journey-badge">{badge}</span><h1 className="journey-title">{title}</h1><p className="journey-desc">{desc}</p>
                    <div style={{ margin: '2rem 0' }}>{features.map((f: string, i: number) => <div key={i} style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}><CheckCircle className="highlight" /><span>{f}</span></div>)}</div>
                    <a href="https://cal.com/sayak-moulic/15min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Consultation</a>
                </div>
                <div className="journey-image-box"><img src={image} className="journey-image" alt={`Toyadhi ${title} - Full Stack Agri-Consulting`} title={`Explore ${title} with Toyadhi`} /></div>
            </div>
        </div>
    </main>
);
