import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ShowcasePanel from '../components/showcase_panel'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ShowcasePanel/>
    </Layout>
  )
}