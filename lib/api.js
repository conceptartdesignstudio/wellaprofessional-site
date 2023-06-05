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
              ppTampa
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
