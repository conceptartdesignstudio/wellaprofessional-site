import Head from 'next/head'
import styles from '../styles/Product.module.css'
import { Facebook } from '../components/Icons/Facebook'
import { Instagram } from '../components/Icons/Instagram'
import { ProductBrand } from '../components/SingleProduct/ProductBrand'
import { ProductContent } from '../components/SingleProduct/ProductContent'
import { ProductSection } from '../components/ProductSection'
import { Youtube } from '../components/Icons/Youtube'
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

import LottieView from 'lottie-react'
import loadingData from '../assets/lf20_wdljjitv.json'

const QUERY_GET_PRODUCT = gql`
  query ($id: ID!) {
    wellaProfessional(id: $id, idType: SLUG) {
      id
      date
      title
      slug
      products {
        backgroundColor
        book
        descartavel
        displayFacebook
        displayImageAsBlock
        displayInstagram
        displayLearnMore
        displayLearnMoreLink
        displaySlider
        displayText
        displayTitle
        displayVideo
        displayYoutube
        videoDisplayPosition
        slideDisplayPosition
        dozem
        eac
        facebook
        fieldGroupName
        informativeIconsColor
        ingredients
        instagram
        lixeira
        moreColor
        moreHeading
        moreInfos
        moreText
        moreVideo
        pead
        pp
        pote
        productImage {
          mediaItemUrl
        }
        productInciColor
        productName
        productNameColor
        reciclagem
        retornavel
        selectedProductBrand
        slideImages {
          id
          altText
          mediaItemUrl
        }
        socialMediaColor
        youtube
        pebd
        paper
        pet
        glass
        aluminum
        iron
        others
      }
    }
  }
`

function transformData(data) {
  const { wellaProfessional } = data
  const container = 'max-w-5xl'

  return {
    title: wellaProfessional?.title,
    brandName: wellaProfessional?.products?.selectedProductBrand,
    container,
    content: {
      productName: wellaProfessional?.products?.productName,
      ingredients: wellaProfessional?.products?.ingredients,
      learnMore: {
        heading: wellaProfessional?.products?.moreHeading,
        link: wellaProfessional?.products?.moreInfos,
        text: wellaProfessional?.products?.moreText,
        video: wellaProfessional?.products?.moreVideo
      },
      socialMedias: {
        facebook: wellaProfessional?.products?.facebook,
        instagram: wellaProfessional?.products?.instagram,
        youtube: wellaProfessional?.products?.youtube
      }
    },
    colors: {
      backgroundColor: wellaProfessional?.products?.backgroundColor,
      informativeColor: wellaProfessional?.products?.informativeIconsColor,
      moreColor: wellaProfessional?.products?.moreColor,
      socialMediaColor: wellaProfessional?.products?.socialMediaColor,
      textColor: wellaProfessional?.products?.productInciColor,
      titleColor: wellaProfessional?.products?.productNameColor
    },
    displayRules: {
      facebook: wellaProfessional?.products?.displayFacebook,
      instagram: wellaProfessional?.products?.displayInstagram,
      youtube: wellaProfessional?.products?.displayYoutube,
      learnLink: wellaProfessional?.products?.displayLearnMoreLink,
      learnVideo: wellaProfessional?.products?.displayLearnMore,
      imageAsBlock: wellaProfessional?.products?.displayImageAsBlock,
      imageAsSlide: wellaProfessional?.products?.displaySlider,
      title: wellaProfessional?.products?.displayTitle,
      text: wellaProfessional?.products?.displayText,
      video: wellaProfessional?.products?.displayVideo,
      mediaPosition: wellaProfessional?.products?.slideDisplayPosition,
      videoPosition: wellaProfessional?.products?.videoDisplayPosition
    },
    icons: {
      eac: wellaProfessional?.products?.eac,
      reciclagem: wellaProfessional?.products?.reciclagem,
      retornavel: wellaProfessional?.products?.retornavel,
      book: wellaProfessional?.products?.book,
      dozeM: wellaProfessional?.products?.dozem,
      descartavel: wellaProfessional?.products?.descartavel,
      lixeira: wellaProfessional?.products?.lixeira,
      pp: wellaProfessional?.products?.pp,
      pote: wellaProfessional?.products?.pote,
      pead: wellaProfessional?.products?.pead,
      pebd: wellaProfessional?.products?.pebd,
      paper: wellaProfessional?.products?.paper,
      pet: wellaProfessional?.products?.pet,
      glass: wellaProfessional?.products?.glass,
      aluminum: wellaProfessional?.products?.aluminum,
      iron: wellaProfessional?.products?.iron,
      others: wellaProfessional?.products?.others
    },
    productImg: wellaProfessional?.products?.productImage.mediaItemUrl,
    slideImages: wellaProfessional?.products?.slideImages
  }
}

const SingleProduct = ({ isProductPage = true }) => {
  let isLoading = true
  let product = {}
  const router = useRouter()

  const { data } = useQuery(QUERY_GET_PRODUCT, {
    variables: {
      id: router.query.slug
    }
  })

  if (data) {
    product = transformData(data)
    isLoading = false
  }

  return (
    <div>
      {isLoading ? (
        <div className={`flex justify-center items-center`}>
          <div className="w-[200px]">
            <LottieView animationData={loadingData} />
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

export default SingleProduct
