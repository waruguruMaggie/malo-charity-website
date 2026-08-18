import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Malo Foundation | Official Website',
  description: 'Official website of Malo Foundation. Dedicated to bringing positive impact, community development, and supporting local initiatives.',
  keywords: [
    'Malo Foundation',
    'malofoundation',
    'Malo Foundation Kenya',
    'Charity Kenya',
    'NGO Kenya',
  ],
  authors: [{ name: 'Malo Foundation' }],
  creator: 'Malo Foundation',
  metadataBase: new URL('https://www.malofoundation.or.ke'),
  alternates: {
    canonical: 'https://www.malofoundation.or.ke',
  },
  openGraph: {
    title: 'Malo Foundation | Official Website',
    description: 'Official website of Malo Foundation. Dedicated to bringing positive impact and supporting local community initiatives.',
    url: 'https://www.malofoundation.or.ke',
    siteName: 'Malo Foundation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // Place an image named og-image.png inside your /public folder
        width: 1200,
        height: 630,
        alt: 'Malo Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malo Foundation',
    description: 'Official website of Malo Foundation.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Replace with your Google Search Console verification string if using Meta Tag verification
    google: 'YOUR_GOOGLE_VERIFICATION_CODE_HERE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Malo Foundation',
    alternateName: ['malofoundation', 'Malo Foundation Kenya'],
    url: 'https://www.malofoundation.or.ke',
    logo: 'https://www.malofoundation.or.ke/logo.png', // Replace with your actual logo path
    sameAs: [
      // Add your social media profiles here when available
      'https://www.facebook.com/malofoundation',
      'https://twitter.com/malofoundation',
      'https://www.instagram.com/malofoundation',
      'https://www.linkedin.com/company/malofoundation',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}