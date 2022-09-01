import Head from 'next/head'
import styles from '../styles/Product.module.css'
import { getAllProductsWithSlug, getProduct } from '../lib/api'
import { Facebook } from '../components/Icons/Facebook'
import { Instagram } from '../components/Icons/Instagram'
import { ProductBrand } from '../components/SingleProduct/ProductBrand'
import { ProductContent } from '../components/SingleProduct/ProductContent'
import { ProductSection } from '../components/ProductSection'
import { Youtube } from '../components/Icons/Youtube'

const Product = (props) => {
  const {
    title,
    brandName,
    content,
    colors,
    displayRules,
    icons,
    productImg,
    slideImages,
    singleImage
  } = props

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
        <ProductContent
          productName={content.productName}
          productImage={productImg}
          productDescription={content.ingredients}
          colors={colors}
        />
        <ProductSection
          displayRules={displayRules}
          learnMore={content.learnMore}
          colors={colors}
          singleImage={singleImage}
          slideImages={slideImages}
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
                <Instagram
                  link={content.socialMedias.instagram}
                  selectedColor={colors.socialMediaColor}
                />
              ) : null}

              {displayRules.facebook ? (
                <Facebook
                  link={content.socialMedias.instagram}
                  selectedColor={colors.socialMediaColor}
                />
              ) : null}

              {displayRules.youtube ? (
                <Youtube
                  link={content.socialMedias.instagram}
                  selectedColor={colors.socialMediaColor}
                />
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const productsWithSlug = await getAllProductsWithSlug()

  return {
    paths: productsWithSlug.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: false
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { wellaProfessional } = await getProduct(params.slug)
  const container = 'max-w-5xl'
  const isProductPage = true

  return {
    props: {
      isProductPage,
      title: wellaProfessional.title,
      brandName: wellaProfessional.products.selectedProductBrand,
      container,
      content: {
        productName: wellaProfessional.products.productName,
        ingredients: wellaProfessional.products.ingredients,
        learnMore: {
          heading: wellaProfessional.products.moreHeading,
          link: wellaProfessional.products.moreInfos,
          text: wellaProfessional.products.moreText,
          video: wellaProfessional.products.moreVideo
        },
        socialMedias: {
          facebook: wellaProfessional.products.facebook,
          instagram: wellaProfessional.products.instagram,
          youtube: wellaProfessional.products.youtube
        }
      },
      colors: {
        backgroundColor: wellaProfessional.products.backgroundColor,
        informativeColor: wellaProfessional.products.informativeIconsColor,
        moreColor: wellaProfessional.products.moreColor,
        socialMediaColor: wellaProfessional.products.socialMediaColor,
        textColor: wellaProfessional.products.productInciColor,
        titleColor: wellaProfessional.products.productNameColor
      },
      displayRules: {
        facebook: wellaProfessional.products.displayFacebook,
        instagram: wellaProfessional.products.displayInstagram,
        youtube: wellaProfessional.products.displayYoutube,
        learnLink: wellaProfessional.products.displayLearnMoreLink,
        learnVideo: wellaProfessional.products.displayLearnMore,
        imageAsBlock: wellaProfessional.products.displayImageAsBlock,
        imageAsSlide: wellaProfessional.products.displaySlider,
        title: wellaProfessional.products.displayTitle,
        text: wellaProfessional.products.displayText,
        video: wellaProfessional.products.displayVideo,
        mediaPosition: wellaProfessional.products.slideDisplayPosition,
        videoPosition: wellaProfessional.products.videoDisplayPosition
      },
      icons: {
        eac: wellaProfessional.products.eac,
        reciclagem: wellaProfessional.products.reciclagem,
        retornavel: wellaProfessional.products.retornavel,
        book: wellaProfessional.products.book,
        dozeM: wellaProfessional.products.dozem,
        descartavel: wellaProfessional.products.descartavel,
        lixeira: wellaProfessional.products.lixeira,
        pp: wellaProfessional.products.pp,
        pead: wellaProfessional.products.pead
      },
      productImg: wellaProfessional.products.productImage.mediaItemUrl,
      slideImages: wellaProfessional.products.slideImages
    }
  }
}

export default Product
