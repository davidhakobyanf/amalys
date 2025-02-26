import type { Metadata } from 'next';
import './globals.css';
import Header from './_components/(header)/_headers/Header';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
