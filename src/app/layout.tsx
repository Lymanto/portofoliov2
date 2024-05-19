import Head from 'next/head';
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
  openGraph: {
    title: 'Lymanto Hadibrata',
    description: 'This my personal website and portofolio by Lymanto Hadibrata',
    type: 'website',
    url: 'lymanto.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={`${poppins.className} text-white bg-primary `}>
        {children}
      </body>
    </html>
  );
}
