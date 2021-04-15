import Head from 'next/head'
import Footer from './footer'
import AboutCard from './about_card'
import React from 'react'

const name = 'Winson Lam'
const aboutText = `
  Mobile Developer(Swift & Flutter) and an avid Hololive simp.
  Code for fun since 2015, code for food since 2020.
`
export const siteTitle = 'Landing Page'

export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <div className="py-4 mx-12 md:mx-24 my-6 md:my-12 flex flex-wrap overflow-hidden">
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="My Landing Page"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      <div className="w-full overflow-hidden md:w-1/3">
        <AboutCard name={name} aboutText={aboutText}/>
      </div>
      <div className="w-full md:w-2/3 py-6 md:py-0 overflow-hidden md:px-6">
      {children}
      </div>
      <Footer>
        Powered by <a href="https://nextjs.org">Next.js</a> & <a href="https://tailwindcss.com">Tailwind CSS</a>
      </Footer>
    </div>
  )
}