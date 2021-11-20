import Footer from '../components/Footer';
import axios from 'axios';
import parse from 'html-react-parser';
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_API_URL } from '../lib/constants';
import { getFeaturedImage, getBrandLogo } from "../lib/utils";
import styles from '../styles/Product.module.css';

export default function product({ title, brandLogo, productImg, content, colors }) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor: colors.backgroundColor }}
    >
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex items-center max-w-5xl">
        <article className={styles.productInfos}>
          <div>
            <Image
              src={productImg}
              alt="Picture of the author"
              width={150}
              height={150}
            />
            <h1 className="" style={{ color: colors.titleColor }}>
              {content.productName}
            </h1>
            <h4 style={{ color: colors.textColor }}>Ingredientes:</h4>
            <p style={{ color: colors.textColor }}>{content.ingredients}</p>
          </div>
        </article>
      </section>
      <section className={styles.productSection}>
        <div className={styles.productLinks}>
          <svg
            style={{ fill: colors.moreColor }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="25px"
            height="25uy,mtrnebvcpx"
          >
            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z" />
          </svg>
          <Link href={content.link}>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: colors.moreColor }}
            >
              Saiba mais
            </a>
          </Link>
        </div>
      </section>
      <section className={styles.footer}>
        <Image
          className="brand-logo"
          src={brandLogo}
          alt="Brand Logo"
          width={150}
          height={81}
        />
        <div className="social-medias">
          <Link href={content.socialMedias.instagram}>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: colors.moreColor }}
            >
              <svg
                style={{ fill: colors.moreColor }}
                version="1.1"
                width="30px"
                height="30px"
                viewBox="0 0 300 300"
              >
                <path
                  d="M38.52,0.012h222.978C282.682,0.012,300,17.336,300,38.52v222.978c0,21.178-17.318,38.49-38.502,38.49
		H38.52c-21.184,0-38.52-17.313-38.52-38.49V38.52C0,17.336,17.336,0.012,38.52,0.012z M218.546,33.329
		c-7.438,0-13.505,6.091-13.505,13.525v32.314c0,7.437,6.067,13.514,13.505,13.514h33.903c7.426,0,13.506-6.077,13.506-13.514
		V46.854c0-7.434-6.08-13.525-13.506-13.525H218.546z M266.084,126.868h-26.396c2.503,8.175,3.86,16.796,3.86,25.759
		c0,49.882-41.766,90.34-93.266,90.34c-51.487,0-93.254-40.458-93.254-90.34c0-8.963,1.37-17.584,3.861-25.759H33.35v126.732
		c0,6.563,5.359,11.902,11.916,11.902h208.907c6.563,0,11.911-5.339,11.911-11.902V126.868z M150.283,90.978
		c-33.26,0-60.24,26.128-60.24,58.388c0,32.227,26.98,58.375,60.24,58.375c33.278,0,60.259-26.148,60.259-58.375
		C210.542,117.105,183.561,90.978,150.283,90.978z"
                />
              </svg>
            </a>
          </Link>

          <Link href={content.socialMedias.facebook}>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: colors.moreColor }}
            >
              Facebook
            </a>
          </Link>

          <Link href={content.socialMedias.youtube}>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: colors.moreColor }}
            >
              Youtube
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await axios.get(PRODUCTS_API_URL);
  const products = res.data;

  // Get the paths we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { slug: product.slug.toString() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await axios.get(`${PRODUCTS_API_URL}?slug=${params.slug}`);
  const data = await res.data;
  const product = data[0];

  console.log(product);
  
  const brandLogo = await getBrandLogo(product.acf.brand_logo);
  const productImg = await getFeaturedImage(product.acf.product_image);

  return {
    props: {
      title: product.title.rendered,
      brandLogo,
      productImg,
      content: {
        productName: product.acf.product_name,
        ingredients: product.acf.ingredients,
        link: product.acf.more_infos,
        icons: product.acf.icons,
        socialMedias: {
          instagram: product.acf.instagram,
          facebook: product.acf.facebook,
          youtube: product.acf.youtube
        }
      },
      colors: {
        backgroundColor: product.acf.background_color,
        titleColor: product.acf.product_name_color,
        textColor: product.acf.product_inci_color,
        moreColor: product.acf.more_color,
        socialMediaColor: product.acf.social_media_color,
        informativeColor: product.acf.informative_icons_color,
      },
    },
  };
}
