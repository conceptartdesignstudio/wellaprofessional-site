import Head from 'next/head';
import Product from '../components/Product';
import Footer from '../components/Footer';
import styles from "../styles/Main.module.css";

export default function Home({ products }) {
  console.log(products);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title className={styles.mainTitle}>Wella Professionals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center flex-1 px-20 py-10">
        <img src="/wella.png" alt="Wella Logo" className={styles.logo} />
        <h1 className={styles.mainTitle}>Bem-vindo ao mundo de Wella</h1>
        {products && (
          <div className="grid grid-cols-4 gap-5 mt-10">
            {products.map((product, slug) => {
              return (
                <div key={slug}>
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
