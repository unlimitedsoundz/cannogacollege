import CookiesContent from '@/components/legal/CookiesContent';

export const metadata = {
    title: 'Cookie Policy | Cannoga College',
    description: 'How Cannoga College uses cookies and similar technologies to ensure proper functionality and improve user experience.',
    alternates: {
        canonical: 'https://cannogacollege.ca/cookies/',
    },
};

export default function CookiePolicyPage() {
    return <CookiesContent />;
}
