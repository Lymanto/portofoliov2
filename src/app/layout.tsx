import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Lymanto Hadibrata',
  description: 'This my personal website and portofolio by Lymanto Hadibrata',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-white bg-primary `}>
        {children}
      </body>
    </html>
  );
}
