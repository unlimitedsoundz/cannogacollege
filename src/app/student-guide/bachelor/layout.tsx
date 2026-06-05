import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Bachelor's Student Guide — Cannoga College | Accept Offer, Tuition & Registration",
    description: "Step-by-step guide for admitted Bachelor's students at Cannoga College. Accept your offer, pay tuition, apply for housing, register for courses, and prepare for arrival in Ottawa.",
};

export default function BachelorGuideLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
