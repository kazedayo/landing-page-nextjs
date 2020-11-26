import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Mobile Developer(Swift & Flutter) and an avid Hololive simp. Code for fun since 2015, code for food since 2020.</p>
      </section>
    </Layout>
  )
}