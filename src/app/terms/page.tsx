import TermsContent from '@/components/legal/TermsContent';

export const metadata = {
    title: 'Terms of Use and Conditions | Penkka University',
    description: 'The terms governing the use of Penkka University digital platforms and services.',
    alternates: {
        canonical: 'https://penkka.fi/terms/',
    },
};

export default function TermsOfUsePage() {
    return <TermsContent />;
}
