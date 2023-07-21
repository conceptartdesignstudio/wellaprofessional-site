import styles from '../../styles/Product.module.css'
import Image from 'next/image'

export const ProductContent = ({
  productImage,
  productName,
  productDescription,
  colors
}) => {
  return (
    <>
      <section
        className={styles.container}
        style={{ backgroundColor: colors.backgroundColor }}
      >
        <article className={styles.productInfos}>
          <Image
            src={productImage}
            alt="Product Image"
            width={150}
            height={150}
            priority
          />
          <h1
            className="productName"
            style={{ color: colors.titleColor }}
            dangerouslySetInnerHTML={{ __html: productName }}
          ></h1>
          <h4 style={{ color: colors.textColor }}>Ingredientes (português):</h4>
          <div
            style={{ color: colors.textColor }}
            dangerouslySetInnerHTML={{ __html: productDescription }}
          />
        </article>
      </section>
    </>
  )
}
