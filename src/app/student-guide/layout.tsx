import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Student Guide — Cannoga College Ottawa, Canada | Campus Life & Academic Resources',
    description: 'Your complete guide to studying at Cannoga College. Academic resources, campus services, housing, registration, and support for new and continuing students.',
};

export default function StudentGuideLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
