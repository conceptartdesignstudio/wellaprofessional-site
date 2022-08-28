import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Main.module.css'

export const Products = ({ product, slug, image }) => {
  return (
    <div className={styles.productCard}>
      <Link href={`/${slug}`}>
        <a className="text-4xl font-bold">
          <Image
            className="mb-5"
            src={image ? image : '/aeeiee-logo.png'}
            alt="Product Image"
            height={300}
            width={300}
          />
          <h2 dangerouslySetInnerHTML={{ __html: product }} />
        </a>
      </Link>
      <div className="mt-6 relative">
        <Link href={`/${slug}`}>
          <a className={styles.detailsBtn}>Detalhes</a>
        </Link>
      </div>
    </div>
  )
}
