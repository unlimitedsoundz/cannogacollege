import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Exchange Students — Study Abroad at Cannoga College Ottawa, Canada',
    description: 'Information for exchange students at Cannoga College. Orientation, courses, student housing, and support for Erasmus+ and bilateral exchange programmes in Ottawa.',
};

export default function ExchangeGuideLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
