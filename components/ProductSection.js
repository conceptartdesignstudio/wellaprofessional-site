import styles from '../styles/Product.module.css'
import useCollapse from 'react-collapsed'
import ReactPlayer from 'react-player/lazy'
import { Icons } from './SingleProduct/Icons'
import { Plus } from './Icons/Plus'
import { LearnLink } from './LearnMore/LearnLink'
import Image from 'next/image'

export const ProductSection = ({
  displayRules,
  learnMore,
  colors,
  icons,
  slideImages,
  singleImage
}) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: false
  })

  console.log(slideImages)

  return (
    <>
      <section
        className={styles.productSection}
        style={{ backgroundColor: colors.backgroundColor }}
      >
        {displayRules.learnLink && (
          <LearnLink selectedColor={colors.moreColor} link={learnMore.link} />
        )}

        {displayRules.learnVideo && (
          <div className={styles.productLinks}>
            <Plus selectedColor={colors.moreColor} />
            <span>
              <button style={{ color: colors.moreColor }} {...getToggleProps()}>
                {isExpanded ? 'Fechar' : 'Saiba Mais'}
              </button>
            </span>
          </div>
        )}

        <Icons icons={icons} colors={colors} key="informative-icons" />
      </section>

      <section className={styles.accordionInfos} {...getCollapseProps()}>
        {displayRules.video && (
          <ReactPlayer
            className={styles.accordionVideo}
            url={learnMore.video}
            playing={isExpanded}
            controls={true}
            volume={0.2}
          />
        )}

        {displayRules.title && (
          <h2
            className={styles.accordionHeading}
            style={{ color: colors.titleColor }}
          >
            {learnMore.heading}
          </h2>
        )}

        {displayRules.imageAsBlock && (
          <>
            {slideImages.map(({ id, altText, mediaItemUrl }) => (
              <div key={id} className="relative w-56 h-30">
                <Image
                  src={mediaItemUrl}
                  alt={altText}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </>
        )}

        {displayRules.text && (
          <div
            className={styles.accordionText}
            style={{ color: colors.textColor }}
          >
            {learnMore.text}
          </div>
        )}
      </section>
    </>
  )
}
