import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello there! 👋</h1>
    <h2>
      Welcome to my website!!!!
    </h2> 
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
