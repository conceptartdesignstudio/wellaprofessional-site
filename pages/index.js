import Head from 'next/head';
import Product from '../components/Product';
import Footer from '../components/Footer';

export default function Home({ products }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Wella Retails</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center flex-1 px-20 py-10">
        <h1 className="text-6xl font-bold mt-5 mb-5">Wella Retails</h1>
        <p className="text-xl  mb-5">WordPress as a Headless CMS with React</p>
        {products && (
          <div className="grid grid-cols-2 gap-5">
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
