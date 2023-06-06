import axios from 'axios'

export const getProductPage = async (pageName) => {
  const { data: response } = await axios.post(
    process.env.NEXT_PUBLIC_GRAPHQL_API,
    {
      query: `
        query ($pageName: ID!) {
          wellaProfessional(id: $pageName, idType: SLUG) {
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
              ppPote
              ppPoteTampa
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
      `,
      variables: {
        pageName: pageName
      }
    }
  )

  const { wellaProfessional } = response.data
  return wellaProfessional
}

export const getAllProducts = async () => {
  const { data: response } = await axios.post(
    process.env.NEXT_PUBLIC_GRAPHQL_API,
    {
      query: `
        query allProducts {
          wellaProfessionals(first: 1000, where: {orderby: {field: DATE, order: DESC}}) {
            edges {
              node {
                id
                title
                slug
                products {
                  productImage {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
      `
    }
  )

  const { wellaProfessionals } = response.data
  return wellaProfessionals
}
