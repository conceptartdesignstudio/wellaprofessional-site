const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API

async function fetchAPI(query, { variables } = {}) {
  const headers = {
    'Content-Type': 'application/json'
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables
    })
  })

  const json = await res.json()
  if (json.errors) {
    console.log(json.errors)
    console.log('error details', query, variables)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllProducts(preview) {
  const data = await fetchAPI(
    `
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
  )

  return data?.wellaProfessionals
}

export async function getAllProductsWithSlug() {
  const data = await fetchAPI(
    `
    {
      wellaProfessionals(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `
  )
  return data?.wellaProfessionals
}

export async function getProduct(slug) {
  const data = await fetchAPI(
    `
    fragment ProductFields on WellaProfessional {
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
    query ProductBySlug($id: ID!, $idType: WellaProfessionalIdType!) {
      wellaProfessional(id: $id, idType: $idType) {
        ...ProductFields
        title
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: 'SLUG'
      }
    }
  )

  return data
}
