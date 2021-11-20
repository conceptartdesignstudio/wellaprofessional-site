import '../styles/globals.css'
import { getAllProductsFromServer } from '../lib/utils';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    let mounted = true;

    if (mounted) {
      const productsFromServer = await getAllProductsFromServer();
      setProducts(productsFromServer);
    }

    return () => (mounted = false);
  }, []);

  return <Component products={products} {...pageProps} />;
}

export default MyApp
