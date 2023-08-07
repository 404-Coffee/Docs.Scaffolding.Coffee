import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Footer from '@/components/layout/Footer'
import Navigation from '@/components/layout/Navigation'

import './globals.scss'

interface Props {
  children: React.ReactNode
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Docs.Scaffolding.Coffee',
  description:
    'Docs.Scaffolding.Coffee is a collection of documentation for Scaffolding.Coffee.',
  keywords: [
    'scaffolding',
    'coffee',
    'scaffolding.coffee',
    'docs',
    'documentation',
    'scaffolding.coffee docs',
    'docs.scaffolding.coffee',
  ].join(', '),
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://scaffolding.coffee',
    title: 'Scaffolding.Coffee',
    description:
      'Scaffolding.Coffee is a collection of documentation for Scaffolding.Coffee.',
    images: [
      {
        url: '/images/scaffolding.coffee.png',
        width: 1200,
        height: 630,
        alt: 'Scaffolding.Coffee Logo',
      },
    ],
  },
  authors: [
    {
      name: '404.Coffee',
      url: 'https://404.coffee',
    },
  ],
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      url: '/favicon/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      url: '/favicon/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon/favicon.ico',
    },
  ],
}

const Layout: React.FC<Props> = ({ children }): JSX.Element => (
  <html lang="en">
    <body className={roboto.className}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
)

export default Layout
