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
        <meta
          property="og:image"
          content="https://lymanto.vercel.app/logo.png"
        />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content={metadata.openGraph.url} />
        <meta property="twitter:site" content="@Lymanto_" />
        <meta property="twitter:creator" content="@Lymanto_" />
        <meta property="twitter:title" content={metadata.openGraph.title} />
        <meta
          property="twitter:description"
          content={metadata.openGraph.description}
        />
        <meta
          property="twitter:image"
          content="https://lymanto.vercel.app/logo.png"
        />
        <meta property="twitter:image:width" content="256" />
        <meta property="twitter:image:height" content="256" />
      </Head>
      <body className={`${poppins.className} text-white bg-primary `}>
        {children}
      </body>
    </html>
  );
}
