import Head from "next/head";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";
import styles from "../styles/Main.module.css";
import { getAllProducts } from "../lib/api";
import Link from "next/link";

const Blog = ({ edges }) => (
  <div className="">
    <Head>
      <title className={styles.mainTitle}>Wella Professionals</title>
      <link rel="icon" href="/wella.ico" />
      <link rel="preload" href="late_discovered_thing.js" as="script"></link>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>

    <main className="px-20 py-10 mb-5">
      <Header />
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {edges.map(({ node }) => (
          <div key={node.slug} >
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
);

export default Blog;

export async function getStaticProps() {
  const { edges } = await getAllProducts();

  return {
    props: {
      edges,
    },
  };
}
