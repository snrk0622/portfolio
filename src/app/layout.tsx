import cn from 'classnames'
import { Inter } from 'next/font/google'

import Footer from '@/app/_components/_layout/footer'
import Header from '@/app/_components/_layout/header'
import Main from '@/app/_components/_layout/main'

import 'zenn-content-css'
import GoogleAnalytics from './_components/_google-analytics/google-analytics'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const RootLayout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <script
          src="https://embed.zenn.studio/js/listen-embed-event.js"
          async
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css"
        />
        <GoogleAnalytics />
      </head>
      <body
        className={cn(inter.className, 'dark:bg-slate-900 dark:text-slate-400')}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
