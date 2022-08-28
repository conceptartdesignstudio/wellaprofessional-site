import styles from '../styles/Product.module.css'
import Image from 'next/image'

const ProductContent = ({
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
          <h4 style={{ color: colors.textColor }}>Ingredientes:</h4>
          <p style={{ color: colors.textColor }}>{productDescription}</p>
        </article>
      </section>
    </>
  )
}

export default ProductContent
