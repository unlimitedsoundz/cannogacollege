import StudentLifeContent from '@/components/student-life/StudentLifeContent';

export const metadata = {
    title: 'Student Life | Cannoga College',
    description: 'Experience a supportive and vibrant campus environment. From coastal landscapes to modern academic facilities, discover how our community thrives in the heart of Ottawa.',
    alternates: {
        canonical: 'https://cannogacollege.ca/student-life/',
    },
};

export default function StudentLifePage() {
    return <StudentLifeContent />;
}
