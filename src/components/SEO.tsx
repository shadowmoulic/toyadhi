import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    canonicalPath?: string;
}

export const SEO = ({ title, description, canonicalPath }: SEOProps) => {
    const { pathname } = useLocation();
    const domain = 'https://www.toyadhi.com';
    const currentPath = canonicalPath || pathname;
    const canonicalURL = `${domain}${currentPath}${currentPath.endsWith('/') ? '' : ''}`;

    useEffect(() => {
        // Title
        document.title = title;

        // Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', description);

        // Canonical
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.setAttribute('rel', 'canonical');
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute('href', canonicalURL);

        // Force favicon update
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            favicon.setAttribute('href', `/favicon.png?v=${Date.now()}`);
        }
    }, [title, description, canonicalURL]);

    return null;
};
