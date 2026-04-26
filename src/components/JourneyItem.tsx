import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

export const JourneyItem = ({ badge, title, desc, image, cta, reverse, link }: any) => (
    <div className="visual-journey-item" style={{ direction: reverse ? 'rtl' : 'ltr' }}>
        <AnimateOnScroll className="journey-image-box"><img src={image} alt={`Toyadhi ${title} - Smart Farming Model`} title={`High-ROI Model: ${title}`} className="journey-image" /></AnimateOnScroll>
        <div className="journey-content" style={{ direction: 'ltr' }}>
            <AnimateOnScroll>
                <span className="journey-badge">{badge}</span><h3 className="journey-title">{title}</h3><p className="journey-desc">{desc}</p>
                <Link to={link || '#'} className="btn btn-outline">{cta || 'Learn More'} <ArrowRight size={18} /></Link>
            </AnimateOnScroll>
        </div>
    </div>
);
