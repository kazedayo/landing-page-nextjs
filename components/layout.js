import Head from 'next/head'
import Footer from './footer'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

const name = 'Winson Lam'
export const siteTitle = 'Landing Page'

export default function Layout({ children, home }) {
  return (
    <div className="max-w-xl py-4 mx-24 my-12">
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
      <header className="flex-initial flex-col items-center">
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className="w-32 h-32 rounded-full"
              alt={name}
            />
            <h1 className="text-4xl leading-5 font-extrabold tracking-tight my-6">{name}</h1>
            <div className="flex flex-row">
              <SocialIcon className="mx-1" fgColor="#fff" bgColor="#333" url="https://github.com/kazedayo"/>
              <SocialIcon className="mx-1" fgColor="#fff" url="https://twitter.com/kaze_hayashi97"/>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className="w-32 h-32 rounded-full"
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-2xl leading-6 my-4">
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer>
        Powered by <a href="https://nextjs.org">Next.js</a> & <a href="https://tailwindcss.com">Tailwind CSS</a>
      </Footer>
    </div>
  )
}