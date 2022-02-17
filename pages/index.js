import Head from 'next/head';
import Header from "../components/Header";
import Products from '../components/Products';
import Footer from '../components/Footer';
import styles from "../styles/Main.module.css";

export default function Home({ products }) {
  return (
    <>
      <html lang="pt-BR">
        <Head>
          <title className={styles.mainTitle}>Wella Professionals</title>
          <link rel="icon" href="/wella.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <main className="px-20 py-10 mb-5">
          <Header />
          {products && (
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              {products.map((product, slug) => {
                return (
                  <div key={slug}>
                    <Products product={product} />
                  </div>
                );
              })}
            </div>
          )}
        </main>
        <Footer />
      </html>
    </>
  );
}
