import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl font-medium leading-normal py-7">
        <p>
          Mobile Developer(Swift & Flutter) and an avid Hololive simp. 
          Code for fun since 2015, code for food since 2020.
        </p>
      </section>
    </Layout>
  )
}