import Link from 'next/link';
import { useState, useEffect } from "react";
import { getFeaturedImage } from "../lib/utils";
import styles from "../styles/Main.module.css";

export default function product({ product }) {
  const [productImg, setProductImg] = useState({
    featImgUrl: ""
  });

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const featuredImg = getFeaturedImage(product.acf.product_image);

      //   resolve the promises in getAuthor and getFeaturedImg async functions using Promise.all
      Promise.all([featuredImg]).then((res) => {
        setProductImg({
          featImgUrl: res[0],
        });
      });
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={styles.productCard}>
      <Link href={`/${product.slug}`}>
        <a className="text-4xl font-bold">
          <img
            className="mb-5"
            src={productImg ? productImg.featImgUrl : "/aeeiee-logo.png"}
          />
          <h2>{product.title.rendered}</h2>
        </a>
      </Link>
      <div className="mt-6 relative">
        <Link href={`/${product.slug}`}>
          <a className={styles.detailsBtn}>Detalhes</a>
        </Link>
      </div>
    </div>
  );
}
