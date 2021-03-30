import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <img className="shadow-md" src="/images/hehe.svg" width="100px" height="100px"/>
      </div>
    </Layout>
  )
}