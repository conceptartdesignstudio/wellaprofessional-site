import styles from '../styles/Product.module.css'
import Link from 'next/link'
import useCollapse from 'react-collapsed'
import ReactPlayer from 'react-player/lazy'
import { Icons } from './SingleProduct/Icons'
import { Plus } from './Icons/Plus'
import { LearnLink } from './LearnMore/LearnLink'

export const ProductSection = ({ displayRules, learnMore, colors, icons }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: false
  })

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
        {displayRules.video ? (
          <ReactPlayer
            className={styles.accordionVideo}
            url={learnMore.video}
            playing={isExpanded}
            controls={true}
            volume={0.2}
          />
        ) : null}

        {displayRules.title && (
          <h2
            className={styles.accordionHeading}
            style={{ color: colors.titleColor }}
          >
            {learnMore.heading}
          </h2>
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
