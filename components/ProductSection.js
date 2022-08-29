import styles from '../styles/Product.module.css'
import Link from 'next/link'
import useCollapse from 'react-collapsed'
import ReactPlayer from 'react-player/lazy'
import { Icons } from './SingleProduct/Icons'
import { Plus } from './Icons/Plus'

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
          <div className={styles.productLinks}>
            <Plus selectedColor={colors.moreColor} />
            <span>
              <Link href={learnMore.link}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: colors.moreColor }}
                >
                  Saiba mais
                </a>
              </Link>
            </span>
          </div>
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
        <section className="accordion">
          <ReactPlayer
            className={styles.accordionVideo}
            url={learnMore.video}
            playing={isExpanded}
            controls={true}
          />
          <h2
            className={styles.accordionHeading}
            style={{ color: colors.titleColor }}
          >
            {learnMore.heading}
          </h2>
          <div
            className={styles.accordionText}
            style={{ color: colors.textColor }}
          >
            {learnMore.text}
          </div>
        </section>
      </section>
    </>
  )
}
