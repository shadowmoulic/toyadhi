import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const GenericPage = ({ title }: { title: string }) => (
    <main className="v-section" style={{ paddingTop: '12rem' }}><div className="container"><h1>{title}</h1><p>Content coming soon.</p><Link to="/" className="btn btn-outline">Home</Link></div></main>
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
                <div className="journey-image-box"><img src={image} className="journey-image" alt={title} /></div>
            </div>
        </div>
    </main>
);
