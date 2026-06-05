import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers | Cannoga College',
    description: 'Join the Cannoga College team. Explore our open positions and learn about our multi-disciplinary institutional culture in Ottawa, Canada.',
    alternates: {
        canonical: 'https://www.cannogacollege.ca/careers',
    },
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
