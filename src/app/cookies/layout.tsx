import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy — Cannoga College',
    description: 'How Cannoga College uses cookies and similar technologies to ensure proper functionality, improve user experience, and analyse website usage.',
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
