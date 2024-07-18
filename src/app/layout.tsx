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
    url: 'https://lymanto.vercel.app',
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
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content={metadata.title} />
        <meta name="twitter:site" content="@Lymanto_" />
        <meta name="twitter:creator" content="@Lymanto_" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta
          name="twitter:description"
          content={metadata.openGraph.description}
        />
        <meta name="twitter:image" content="/favicon.ico" />
      </Head>
      <body className={`${poppins.className} text-white bg-primary `}>
        {children}
      </body>
    </html>
  );
}
