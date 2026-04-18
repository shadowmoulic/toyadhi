import { useState, useEffect, useRef } from 'react';

export const AnimateOnScroll = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
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
