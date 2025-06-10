import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import '@/styles/globals.css';

const leagueSpartan = League_Spartan({
    variable: '--font-league-spartan',
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
    title: 'Frontend Mentor | Social proof section',
    keywords: ['Frontend Mentor', 'Next.js', 'React', 'Web Development'],
    authors: [{ name: 'Elizabeth Parnell' }],
    creator: 'Elizabeth Parnell',
    icons: {
        icon: '/favicon-32x32.png',
        apple: '/favicon-32x32.png',
        shortcut: '/favicon-32x32.png',
    },
    description:
        'Frontend Mentor | Social proof section challenge solution using Next.js and React.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={leagueSpartan.variable}>{children}</body>
        </html>
    );
}
