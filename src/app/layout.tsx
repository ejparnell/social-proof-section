import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Frontend Mentor | Next.js Template',
    keywords: ['Frontend Mentor', 'Next.js', 'React', 'Web Development'],
    authors: [{ name: 'Elizabeth Parnell' }],
    creator: 'Elizabeth Parnell',
    icons: {
        icon: '/favicon-32x32.png',
        apple: '/favicon-32x32.png',
        shortcut: '/favicon-32x32.png',
    },
    description: 'A Next.js template for Frontend Mentor challenges',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={geistSans.variable}>{children}</body>
        </html>
    );
}
