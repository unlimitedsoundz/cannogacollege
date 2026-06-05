import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Master's Student Guide — Cannoga College | Thesis, Research & Career",
    description: "Guide for admitted Master's students at Cannoga College. Accept your offer, submit documents, plan your thesis, and prepare for graduate studies in Ottawa, Canada.",
};

export default function MasterGuideLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
