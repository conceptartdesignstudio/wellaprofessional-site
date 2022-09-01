import styles from '../styles/Product.module.css'
import useCollapse from 'react-collapsed'
import ReactPlayer from 'react-player/lazy'
import { Icons } from './SingleProduct/Icons'
import { Plus } from './Icons/Plus'
import { LearnLink } from './LearnMore/LearnLink'
import { Slider } from './SingleProduct/Slider'
import { ImageAsBlock } from './SingleProduct/ImageBlock'

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
        {displayRules.video &&
          displayRules.videoPosition === 'displayVideoAboveTitle' && (
            <ReactPlayer
              className={styles.accordionVideo}
              url={learnMore.video}
              playing={isExpanded}
              controls={true}
              volume={0.2}
            />
          )}

        {displayRules.imageAsSlide &&
          displayRules.mediaPosition === 'displayMediaAboveTitle' && (
            <Slider images={slideImages} />
          )}

        {displayRules.imageAsBlock &&
          displayRules.mediaPosition === 'displayMediaAboveTitle' && (
            <ImageAsBlock images={slideImages} />
          )}

        {displayRules.title && (
          <h2
            className={styles.accordionHeading}
            style={{ color: colors.titleColor }}
          >
            {learnMore.heading}
          </h2>
        )}

        {displayRules.video &&
          displayRules.videoPosition === 'displayVideoBelowTitle' && (
            <ReactPlayer
              className={styles.accordionVideo}
              url={learnMore.video}
              playing={isExpanded}
              controls={true}
              volume={0.2}
            />
          )}

        {displayRules.imageAsSlide &&
          displayRules.mediaPosition === 'displayMediaBelowTitle' && (
            <Slider images={slideImages} />
          )}

        {displayRules.imageAsBlock &&
          displayRules.mediaPosition === 'displayMediaBelowTitle' && (
            <ImageAsBlock images={slideImages} />
          )}

        {displayRules.text && (
          <div
            className={styles.accordionText}
            style={{ color: colors.textColor }}
            dangerouslySetInnerHTML={{ __html: learnMore.text }}
          ></div>
        )}

        {displayRules.video &&
          displayRules.videoPosition === 'displayVideoBelowText' && (
            <ReactPlayer
              className={styles.accordionVideo}
              url={learnMore.video}
              playing={isExpanded}
              controls={true}
              volume={0.2}
            />
          )}

        {displayRules.imageAsSlide &&
          displayRules.mediaPosition === 'displayMediaBelowText' && (
            <Slider images={slideImages} />
          )}

        {displayRules.imageAsBlock &&
          displayRules.mediaPosition === 'displayMediaBelowText' && (
            <ImageAsBlock images={slideImages} />
          )}
      </section>
    </>
  )
}
