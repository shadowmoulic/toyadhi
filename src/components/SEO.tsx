import { useEffect } from 'react';

export const SEO = ({ title, description }: { title: string; description: string }) => {
    useEffect(() => {
        document.title = title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", description);
        } else {
            const newMeta = document.createElement('meta');
            newMeta.name = "description";
            newMeta.content = description;
            document.head.appendChild(newMeta);
        }

        // Force favicon update
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            favicon.setAttribute('href', `/favicon.png?v=${Date.now()}`);
        }
    }, [title, description]);
    return null;
};
