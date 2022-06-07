const API_URL = process.env.NEXT_PUBLIC_WELLA_ENV_API;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log("error details", query, variables);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllProducts(preview) {
  const data = await fetchAPI(
    `
    query allProducts {
      wellaProfessionals(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            id
            date
            title
            slug
            products {
              backgroundColor
              facebook
              fieldGroupName
              ingredients
              instagram
              moreColor
              moreInfos
              productInciColor
              productName
              productNameColor
              youtube
            }
          }
        }
      }
    }
    `
  );

  return data?.wellaProfessionals;
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
  );
  return data?.wellaProfessionals;
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
        brandLogo {
          mediaItemUrl
        }
        facebook
        fieldGroupName
        icons
        informativeIconsColor
        ingredients
        instagram
        moreColor
        moreInfos
        productInciColor
        productImage {
          mediaItemUrl
        }
        productName
        productNameColor
        socialMediaColor
        youtube
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
        idType: "SLUG",
      },
    }
  );

  return data;
}