import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Student Life at Penkka University — Clubs, Culture & Campus Helsinki',
    description: 'Discover student life at Penkka University Helsinki. Student organisations, clubs, campus facilities, housing, and everything you need for an enriching university experience in Finland.',
};

export default function StudentLifeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
