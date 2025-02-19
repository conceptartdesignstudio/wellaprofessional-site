import Head from 'next/head'
import styles from '../styles/Product.module.css'
import { Facebook } from '../components/Icons/Facebook'
import { Instagram } from '../components/Icons/Instagram'
import { ProductBrand } from '../components/SingleProduct/ProductBrand'
import { ProductContent } from '../components/SingleProduct/ProductContent'
import { ProductSection } from '../components/ProductSection'
import { Youtube } from '../components/Icons/Youtube'

import { getProductPage } from '../lib/api'

function transformData(data) {
  const container = 'max-w-5xl'

  return {
    title: data?.title,
    brandName: data?.products?.selectedProductBrand,
    container,
    content: {
      productName: data?.products?.productName,
      ingredients: data?.products?.ingredients,
      learnMore: {
        heading: data?.products?.moreHeading,
        link: data?.products?.moreInfos,
        text: data?.products?.moreText,
        video: data?.products?.moreVideo
      },
      socialMedias: {
        facebook: data?.products?.facebook,
        instagram: data?.products?.instagram,
        youtube: data?.products?.youtube
      }
    },
    colors: {
      backgroundColor: data?.products?.backgroundColor,
      informativeColor: data?.products?.informativeIconsColor,
      moreColor: data?.products?.moreColor,
      socialMediaColor: data?.products?.socialMediaColor,
      textColor: data?.products?.productInciColor,
      titleColor: data?.products?.productNameColor
    },
    displayRules: {
      facebook: data?.products?.displayFacebook,
      instagram: data?.products?.displayInstagram,
      youtube: data?.products?.displayYoutube,
      learnLink: data?.products?.displayLearnMoreLink,
      learnVideo: data?.products?.displayLearnMore,
      imageAsBlock: data?.products?.displayImageAsBlock,
      imageAsSlide: data?.products?.displaySlider,
      title: data?.products?.displayTitle,
      text: data?.products?.displayText,
      video: data?.products?.displayVideo,
      mediaPosition: data?.products?.slideDisplayPosition,
      videoPosition: data?.products?.videoDisplayPosition
    },
    icons: {
      eac: data?.products?.eac,
      reciclagem: data?.products?.reciclagem,
      retornavel: data?.products?.retornavel,
      book: data?.products?.book,
      dozeM: data?.products?.dozem,
      descartavel: data?.products?.descartavel,
      lixeira: data?.products?.lixeira,
      ppTampa: data?.products?.pp,
      ppPote: data?.products?.ppPote,
      ppPoteTampa: data?.products?.ppPoteTampa,
      pead: data?.products?.pead,
      pebd: data?.products?.pebd,
      paper: data?.products?.paper,
      pet: data?.products?.pet,
      glass: data?.products?.glass,
      aluminum: data?.products?.aluminum,
      iron: data?.products?.iron,
      others: data?.products?.others
    },
    productImg: data?.products?.productImage.mediaItemUrl,
    slideImages: data?.products?.slideImages
  }
}

const SingleProduct = (props) => {
  const product = transformData(props.data)
  const isLoading = false

  return (
    <div>
      {isLoading ? (
        <div className={`flex justify-center items-center`}>
          <div className="w-[200px]">
            {/* <LottieView animationData={loadingData} /> */}
          </div>
        </div>
      ) : (
        <div
          className={styles.wrapper}
          style={{ backgroundColor: product.colors.backgroundColor }}
        >
          <Head>
            <title>
              {product.title ? product.title : 'Wella Professional'}
            </title>
            <link rel="icon" href="/wella.ico" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className={styles.content}>
            <ProductContent
              productName={product.content.productName}
              productImage={product.productImg}
              productDescription={product.content.ingredients}
              colors={product.colors}
            />
            <ProductSection
              displayRules={product.displayRules}
              learnMore={product.content.learnMore}
              colors={product.colors}
              singleImage={product.singleImage}
              slideImages={product.slideImages}
              icons={product.icons}
              key="ProductSection"
            />
            <section
              className={styles.footer}
              style={{ backgroundColor: product.colors.backgroundColor }}
            >
              <ProductBrand
                brandName={product.brandName}
                key={product.brandName}
              />
              <div className={styles.socialMedias}>
                <div className="wrapper">
                  {product.displayRules.instagram && (
                    <Instagram
                      link={product.content.socialMedias.instagram}
                      selectedColor={product.colors.socialMediaColor}
                    />
                  )}
                  {product.displayRules.facebook && (
                    <Facebook
                      link={product.content.socialMedias.instagram}
                      selectedColor={product.colors.socialMediaColor}
                    />
                  )}
                  {product.displayRules.youtube && (
                    <Youtube
                      link={product.content.socialMedias.instagram}
                      selectedColor={product.colors.socialMediaColor}
                    />
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { slug } = context.params
  const data = await getProductPage(slug)

  return {
    props: {
      data
    } // will be passed to the page component as props
  }
}

export default SingleProduct
