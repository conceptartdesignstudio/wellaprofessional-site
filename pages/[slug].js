import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedImage, getBrandLogo } from "../lib/utils";
import styles from "../styles/Product.module.css";
import ProductBrand from '../components/ProductBrand';
import ProductSection from "../components/ProductSection";

export default function product({
  title,
  brandName,
  content,
  colors,
  displayRules,
  icons,
  productImg,
}) {
  console.log(icons);
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: colors.backgroundColor }}
    >
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/wella.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.content}>
        <section
          className={styles.container}
          style={{ backgroundColor: colors.backgroundColor }}
        >
          <article className={styles.productInfos}>
            <Image
              src={productImg}
              alt="Product Image"
              width={150}
              height={150}
            />
            <h1
              className="productName"
              style={{ color: colors.titleColor }}
              dangerouslySetInnerHTML={{ __html: content.productName }}
            ></h1>
            <h4 style={{ color: colors.textColor }}>Ingredientes:</h4>
            <p style={{ color: colors.textColor }}>{content.ingredients}</p>
          </article>
        </section>
        <ProductSection
          displayRules={displayRules}
          learnMore={content.learnMore}
          colors={colors}
          icons={icons}
          key="ProductSection"
        />
        <section
          className={styles.footer}
          style={{ backgroundColor: colors.backgroundColor }}
        >
          <ProductBrand brandName={brandName} key={brandName} />

          <div className={styles.socialMedias}>
            <div className="wrapper">
              {displayRules.instagram ? (
                <Link href={content.socialMedias.instagram}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: colors.socialMediaColor }}
                  >
                    <svg
                      style={{ fill: colors.socialMediaColor }}
                      width="35px"
                      height="35px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="instagram-square"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              ) : null}

              {displayRules.facebook ? (
                <Link href={content.socialMedias.facebook}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: colors.socialMediaColor }}
                  >
                    <svg
                      style={{ fill: colors.socialMediaColor }}
                      width="35px"
                      height="35px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-square"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              ) : null}

              {displayRules.youtube ? (
                <Link href={content.socialMedias.youtube}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: colors.socialMediaColor }}
                  >
                    <svg
                      style={{ fill: colors.socialMediaColor }}
                      width="35px"
                      height="35px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="youtube-square"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await axios.get(process.env.NEXT_PUBLIC_WELLA_ENV_API);
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
  const res = await axios.get(`${process.env.NEXT_PUBLIC_WELLA_ENV_API}?slug=${params.slug}`);
  const data = await res.data;
  const product = data[0];
  console.log(product.acf);
  const productImg = await getFeaturedImage(product.acf.product_image);
  const container = "max-w-5xl";
  const isProductPage = true;

  return {
    props: {
      isProductPage,
      title: product.title.rendered,
      brandName: product.acf.selected_product_brand,
      container,
      content: {
        productName: product.acf.product_name,
        ingredients: product.acf.ingredients,
        learnMore: {
          link: product.acf.more_infos,
          heading: product.acf.more_heading,
          text: product.acf.more_text,
          video: product.acf.more_video,
        },
        socialMedias: {
          instagram: product.acf.instagram,
          facebook: product.acf.facebook,
          youtube: product.acf.youtube,
        },
      },
      colors: {
        backgroundColor: product.acf.background_color,
        titleColor: product.acf.product_name_color,
        textColor: product.acf.product_inci_color,
        moreColor: product.acf.more_color,
        socialMediaColor: product.acf.social_media_color,
        informativeColor: product.acf.informative_icons_color,
      },
      displayRules: {
        facebook: product.acf.display_facebook,
        instagram: product.acf.display_instagram,
        youtube: product.acf.display_youtube,
        learnLink: product.acf.display_learn_more_link,
        learnVideo: product.acf.display_learn_more,
      },
      icons: {
        eac: product.acf.eac,
        reciclagem: product.acf.reciclagem,
        retornavel: product.acf.retornavel,
        book: product.acf.book,
        dozeM: product.acf.dozeM,
        descartavel: product.acf.descartavel,
        lixeira: product.acf.lixeira,
        pp: product.acf.pp,
        pead: product.acf.pead,
      },
      productImg,
    },
  };
};