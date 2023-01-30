import styles from '../../styles/Group.module.css'
import Image from 'next/image'
import { LearnLink } from 'components/LearnMore/LearnLink'

export const GroupProduct = ({
  productImage,
  productResume,
  productLink,
  colors
}) => {
  return (
    <>
      <div
        className={`${styles.container} pl-2 pr-4`}
        style={{ backgroundColor: colors.backgroundColor }}
      >
        <div className={`${styles.groupProduct} gap-2`}>
          {productImage && (
            <div className="h-full">
              <Image
                src={productImage}
                alt="Product Image"
                width={150}
                height={150}
                priority
              />
            </div>
          )}
          {productResume && (
            <div className="flex-1 flex justify-start flex-col">
              <h4 style={{ color: colors.textColor }}>
                Ingredientes (português):
              </h4>
              <p style={{ color: colors.textColor }}>{productResume}</p>

              <LearnLink
                isGroup={true}
                selectedColor={colors.linkColor}
                link={productLink}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
