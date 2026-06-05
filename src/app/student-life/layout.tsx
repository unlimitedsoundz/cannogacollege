import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Student Life at Cannoga College — Clubs, Culture & Campus Ottawa',
    description: 'Discover student life at Cannoga College Ottawa. Student organisations, clubs, campus facilities, housing, and everything you need for an enriching university experience in Ottawa, Canada.',
};

export default function StudentLifeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
