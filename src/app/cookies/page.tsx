import CookiesContent from '@/components/legal/CookiesContent';

export const metadata = {
    title: 'Cookie Policy | Penkka University',
    description: 'How Penkka University uses cookies and similar technologies to ensure proper functionality and improve user experience.',
    alternates: {
        canonical: 'https://penkka.fi/cookies/',
    },
};

export default function CookiePolicyPage() {
    return <CookiesContent />;
}
