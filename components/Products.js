import Link from 'next/link'
import styles from '../styles/Main.module.css'

export default function product({ product, slug, image }) {
  return (
    <div className={styles.productCard}>
      <Link href={`/${slug}`}>
        <a className="text-4xl font-bold">
          <img
            className="mb-5"
            src={image ? image : '/aeeiee-logo.png'}
            alt="Product Image"
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
