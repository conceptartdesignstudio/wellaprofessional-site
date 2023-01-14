import styles from '../styles/Main.module.css'
import Head from 'next/head'
import { getAllProducts } from '../lib/api'
import { Header } from '../components/Header'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'

const HomePage = ({ edges }) => (
  <div className="">
    <Head>
      <title className={styles.mainTitle}>Wella Professionals</title>
      <link rel="icon" href="/wella.ico" />
      <link rel="preload" href="late_discovered_thing.js" as="script"></link>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main className="md:px-20 py-10 mb-5">
      <Header />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
        {edges.map(({ node }) => (
          <div key={node.slug}>
            <Products
              product={node.products.productName}
              slug={node.slug}
              image={node.products.productImage.mediaItemUrl}
            />
          </div>
        ))}
      </div>
      <Footer />
    </main>
  </div>
)

export async function getStaticProps() {
  const { edges } = await getAllProducts()

  return {
    props: {
      edges
    }
  }
}

export default HomePage
