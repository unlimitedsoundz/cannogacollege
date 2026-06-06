import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@aalto-dx/react-components";
import { Hero } from '@/components/layout/Hero';
import GuideSidebarLayout from '@/components/layout/StudentGuideLayout';
import { Card } from '@/components/ui/Card';
import { ContentBox } from '@/components/ui/ContentBox';
import { Highlight } from '@/components/ui/Highlight';

export const metadata = {
    title: 'Housing for Students | Cannoga College',
    description: 'Find information about student housing, apartments, and rental options for students studying at Cannoga College in Ottawa, Canada.',
    alternates: {
        canonical: 'https://cannogacollege.ca/student-guide/housing-for-students/',
    },
};

const sections = [
    { id: 'overview', title: 'Housing Overview', content: '' },
    { id: 'providers', title: 'Housing Providers', content: '' },
    { id: 'applying', title: 'How to Apply', content: '' },
    { id: 'private-market', title: 'Private Market', content: '' },
    { id: 'settling-in', title: 'Settling In', content: '' },
];

export default function HousingGuidePage() {
    return (
        <GuideSidebarLayout sections={sections}>
            <div className="min-h-screen bg-white text-black font-sans pb-20">
                <Hero
                    title="Housing for Students"
                    body="Finding a comfortable place to live is essential for your academic success. This guide covers student housing options and the Ottawa rental market."
                    backgroundColor="#ffc341"
                    tinted
                    lightText={false}
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Student Guide', href: '/student-guide' },
                        { label: 'Housing' }
                    ]}
                    image={{
                        src: "/images/student-housing-hero.png",
                        alt: "Student Housing in Ottawa"
                    }}
                />

                <div className="cc-container py-12 md:py-20">
                    <div className="space-y-16 md:space-y-24">

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <div className="cc-section-divider mb-10">
                                <h2 className="cc-h2">Your New Home in Ottawa</h2>
                            </div>
                            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl">
                                Ottawa's student housing market is competitive — especially for September intake. We strongly recommend starting your search as soon as you receive your admission offer. Options range from on-campus residences and student-specific buildings to private rentals.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card
                                    title="Shared Apartments"
                                    body="A cost-effective option where you have your own private bedroom but share the kitchen and common areas with 2–4 other students. Typical rent: CAD $800–$1,100/month."
                                />
                                <Card
                                    title="Studio & Bachelor Apartments"
                                    body="A self-contained private apartment with your own kitchen and bathroom. Highly popular — expect a competitive rental market. Typical rent: CAD $1,200–$1,800/month."
                                />
                                <Card
                                    title="On-Campus Residence"
                                    body="Limited on-campus rooms are available through the college. Priority given to first-year and international students. Apply early through your student portal."
                                />
                                <Card
                                    title="Homestay"
                                    body="Live with a Canadian host family for a fully immersive cultural experience. Meals are typically included. Coordinated by agencies like Canada Homestay International."
                                    cta={{ label: "Canada Homestay", linkComponentProps: { href: "https://www.canadahomestay.com", target: "_blank" } }}
                                />
                            </div>
                        </section>

                        <Highlight
                            body="Moving to Ottawa was a big step, but the college's housing guide made it so much easier. I found a great shared apartment in Centretown within two weeks of my acceptance."
                            source="Sarah Johnson, MSc Student"
                            alignment="left"
                        />

                        {/* Providers */}
                        <section id="providers" className="scroll-mt-32">
                            <div className="cc-section-divider mb-10">
                                <h2 className="cc-h2">Ottawa Student Housing Providers</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="cc-card cc-card-body space-y-3">
                                    <h4 className="font-bold text-[#2e1150] text-lg">Campus Living Centres</h4>
                                    <p className="text-sm text-neutral-600 leading-relaxed">Canada's largest student residence operator, with properties near major Ottawa institutions. Fully furnished, all-inclusive suites available.</p>
                                    <Link href="https://www.campuslivingcentres.com" target="_blank" className="font-bold underline text-xs uppercase tracking-widest hover:text-[#5c2d91] transition-colors block">campuslivingcentres.com →</Link>
                                </div>
                                <div className="cc-card cc-card-body space-y-3">
                                    <h4 className="font-bold text-[#2e1150] text-lg">Minto Apartments</h4>
                                    <p className="text-sm text-neutral-600 leading-relaxed">Ottawa-based developer with a large portfolio of modern rental apartments across Sandy Hill, Centretown, and Westboro — all close to public transit.</p>
                                    <Link href="https://www.mintoapartments.com/ottawa" target="_blank" className="font-bold underline text-xs uppercase tracking-widest hover:text-[#5c2d91] transition-colors block">mintoapartments.com/ottawa →</Link>
                                </div>
                                <div className="cc-card cc-card-body space-y-3">
                                    <h4 className="font-bold text-[#2e1150] text-lg">University of Ottawa Residences</h4>
                                    <p className="text-sm text-neutral-600 leading-relaxed">uOttawa offers off-campus housing listings open to all post-secondary students in Ottawa, including many options in the Sandy Hill and Lowertown areas.</p>
                                    <Link href="https://www.uottawa.ca/current-students/housing" target="_blank" className="font-bold underline text-xs uppercase tracking-widest hover:text-[#5c2d91] transition-colors block">uottawa.ca/housing →</Link>
                                </div>
                                <div className="cc-card cc-card-body space-y-3">
                                    <h4 className="font-bold text-[#2e1150] text-lg">Canada Homestay International</h4>
                                    <p className="text-sm text-neutral-600 leading-relaxed">Live with a local Canadian family — the most culturally immersive option. Great for first-semester students adjusting to life in Canada.</p>
                                    <Link href="https://www.canadahomestay.com" target="_blank" className="font-bold underline text-xs uppercase tracking-widest hover:text-[#5c2d91] transition-colors block">canadahomestay.com →</Link>
                                </div>
                            </div>
                        </section>

                        {/* How to Apply */}
                        <section id="applying" className="scroll-mt-32">
                            <ContentBox
                                size="large"
                                icon="listChecks"
                                title="How to Secure Housing"
                                body={
                                    <div className="space-y-8 text-left">
                                        {[
                                            {
                                                step: 1,
                                                title: "Accept Your Study Offer",
                                                desc: "Begin your housing search immediately after accepting your admission offer. The Ottawa market moves fast, especially for September starts."
                                            },
                                            {
                                                step: 2,
                                                title: "Choose Your Area",
                                                desc: "Popular student neighbourhoods include Sandy Hill, Centretown, Westboro, and Hintonburg — all well-connected by OC Transpo bus and O-Train."
                                            },
                                            {
                                                step: 3,
                                                title: "Submit Your Application",
                                                desc: "Apply directly through provider websites or via rental platforms. Be ready to provide proof of enrolment, a reference letter, and first+last month's rent deposit."
                                            },
                                            {
                                                step: 4,
                                                title: "Sign Your Lease",
                                                desc: "Review the Ontario Standard Lease carefully before signing. Tenants' rights are protected under the Residential Tenancies Act."
                                            },
                                        ].map(({ step, title, desc }) => (
                                            <div key={step} className="flex gap-5 items-start">
                                                <div className="w-10 h-10 bg-[#5c2d91] text-white flex items-center justify-center font-bold shrink-0 rounded-full">{step}</div>
                                                <div>
                                                    <h4 className="font-bold text-black mb-1">{title}</h4>
                                                    <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                }
                            />
                        </section>

                        {/* Private Market */}
                        <section id="private-market" className="scroll-mt-32">
                            <div className="cc-section-divider mb-10">
                                <h2 className="cc-h2">Private Rental Market</h2>
                            </div>
                            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl">
                                The Ottawa private market has many options. Use these trusted Canadian platforms to search listings. Always visit (or video-tour) a property before paying any deposit.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <Card
                                    title="Zumper"
                                    body="Canada's leading rental search platform. Filter by Ottawa neighbourhood, price, and bedroom count. Updated daily with new listings."
                                    cta={{ label: "Search on Zumper", linkComponentProps: { href: "https://www.zumper.com/apartments-for-rent/ottawa-on", target: "_blank" } }}
                                />
                                <Card
                                    title="Kijiji Rentals"
                                    body="Canada's largest classifieds platform — widely used for Ottawa apartment listings. Great for finding private landlord listings and shared accommodations."
                                    cta={{ label: "Ottawa Rentals on Kijiji", linkComponentProps: { href: "https://www.kijiji.ca/b-apartments-condos/ottawa/c37l1700185", target: "_blank" } }}
                                />
                                <Card
                                    title="Rentals.ca"
                                    body="Dedicated Canadian rental listings aggregator. Strong selection of Ottawa apartments, condos, and student housing in all major neighbourhoods."
                                    cta={{ label: "Search Ottawa Rentals", linkComponentProps: { href: "https://rentals.ca/ottawa", target: "_blank" } }}
                                />
                            </div>
                            <div className="mt-6 cc-section-tinted p-6">
                                <p className="text-sm font-semibold text-[#2e1150]">⚠️ Tenant Rights in Ontario</p>
                                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">All rentals in Ontario are protected by the <strong>Residential Tenancies Act</strong>. Landlords cannot collect more than first and last month's rent as a deposit. Learn more at <Link href="https://tribunalsontario.ca/ltb/" target="_blank" className="underline font-bold hover:text-[#5c2d91]">Landlord and Tenant Board →</Link></p>
                            </div>
                        </section>

                        {/* Settling In */}
                        <section id="settling-in" className="scroll-mt-32">
                            <ContentBox
                                backgroundColor="#2e1150"
                                title={<span className="text-white">Settling Into Ottawa Life</span>}
                                body={
                                    <div className="space-y-6">
                                        <p className="text-neutral-300 leading-relaxed">
                                            Ottawa is a welcoming, walkable city with four distinct seasons. Winters are cold (bring warm layers!) but beautiful, and summers are warm and festival-filled. Most apartment buildings include in-suite or shared laundry, and many are pet-friendly.
                                        </p>
                                        <ul className="space-y-3 text-sm text-neutral-300">
                                            {[
                                                "Ottawa's Byward Market area has groceries, restaurants, and services all within walking distance",
                                                "Costco, FreshCo, and No Frills are popular for affordable grocery shopping",
                                                "The O-Train Confederation Line connects major neighbourhoods to downtown",
                                                "Most landlords accept e-transfers — set up a Canadian bank account (TD, RBC, or Scotiabank) early",
                                            ].map((tip, i) => (
                                                <li key={i} className="flex gap-3 items-start">
                                                    <ArrowRight size={14} weight="bold" className="mt-0.5 shrink-0 text-white/60" />
                                                    {tip}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href="/student-guide/arrival"
                                            className="inline-flex items-center gap-2 bg-white text-[#2e1150] px-6 py-3 font-bold hover:bg-neutral-100 transition-all text-sm"
                                        >
                                            Read the Full Arrival Guide <ArrowRight size={16} weight="bold" />
                                        </Link>
                                    </div>
                                }
                            />
                        </section>

                    </div>
                </div>
            </div>
        </GuideSidebarLayout>
    );
}
