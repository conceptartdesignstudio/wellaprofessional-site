import Head from 'next/head'
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

import LottieView from 'lottie-react'
import loadingData from '../../assets/lf20_wdljjitv.json'
import styles from '../../styles/Product.module.css'
import { GroupHeader } from 'components/SingleGroup/GroupHeader'
import { GroupProduct } from 'components/SingleGroup/GroupProduct'

const QUERY_GET_GROUP = gql`
  query ($id: ID!) {
    wellaGroup(id: $id, idType: SLUG) {
      id
      date
      slug
      title
      group {
        groupBackgroundColor
        groupLinkColor
        groupTextColor
        groupTitleColor
        groupTitle
        groupImage {
          mediaItemUrl
        }
        groupRelatedProducts {
          __typename
          ... on WellaProfessional {
            title
            slug
            products {
              ingredients
              productGroupImage {
                mediaItemUrl
              }
              productImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`

function transformData(data) {
  const { wellaGroup } = data
  const container = 'max-w-5xl'

  return {
    container,
    title: wellaGroup.title,
    colors: {
      backgroundColor: wellaGroup?.group.groupBackgroundColor,
      linkColor: wellaGroup?.group?.groupLinkColor,
      textColor: wellaGroup?.group?.groupTextColor,
      titleColor: wellaGroup?.group?.groupTitleColor
    },
    image: wellaGroup?.group?.groupImage?.mediaItemUrl,
    pageTitle: wellaGroup?.group?.groupTitle,
    productImage: wellaGroup?.group?.productImage?.mediaItemUrl,
    productGroupImage: wellaGroup?.group?.productGroupImage?.mediaItemUrl,
    relatedProducts: wellaGroup?.group?.groupRelatedProducts
  }
}

const SingleGroup = ({ isProductPage = true }) => {
  let isLoading = true
  let group = {}
  const router = useRouter()
  let groupName = router?.query?.['group-name']

  const { data } = useQuery(QUERY_GET_GROUP, {
    variables: {
      id: router?.query?.['group-name']
    }
  })

  if (data) {
    group = transformData(data)
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
          style={{ backgroundColor: group.colors.backgroundColor }}
        >
          <Head>
            <title>{group.title ? group.title : 'Wella Professional'}</title>
            <link rel="icon" href="/wella.ico" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <main>
            <div className={styles.content}>
              <GroupHeader
                colors={group.colors}
                groupName={group.pageTitle}
                groupImage={group.image}
              />
              <div className="mb-8">
                {group.relatedProducts?.map((item) => (
                  <GroupProduct
                    key={item.slug}
                    colors={group.colors}
                    productImage={
                      item.products?.productGroupImage
                        ? item.products?.productGroupImage?.mediaItemUrl
                        : item.products?.productImage?.mediaItemUrl
                    }
                    productName={item.title}
                    productResume={item.products.ingredients}
                    productLink={`${groupName}/${item.slug}`}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  )
}

export default SingleGroup
