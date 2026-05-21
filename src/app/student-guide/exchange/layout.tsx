import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Exchange Students — Study Abroad at Penkka University Helsinki, Finland',
    description: 'Information for exchange students at Penkka University. Orientation, courses, student housing, and support for Erasmus+ and bilateral exchange programmes in Helsinki.',
};

export default function ExchangeGuideLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
