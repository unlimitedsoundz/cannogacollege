import TermsContent from '@/components/legal/TermsContent';

export const metadata = {
    title: 'Terms of Use and Conditions | Cannoga College',
    description: 'The terms governing the use of Cannoga College digital platforms and services.',
    alternates: {
        canonical: 'https://cannogacollege.ca/terms/',
    },
};

export default function TermsOfUsePage() {
    return <TermsContent />;
}
