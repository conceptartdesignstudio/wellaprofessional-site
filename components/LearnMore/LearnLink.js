import styles from '../../styles/Product.module.css'
import Link from 'next/link'
import { Plus } from '../Icons/Plus'

export const LearnLink = ({ selectedColor, link }) => {
  return (
    <>
      <div className={styles.productLinks}>
        <Plus selectedColor={selectedColor} />
        <span>
          <Link href={link}>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: selectedColor }}
            >
              Saiba mais
            </a>
          </Link>
        </span>
      </div>
    </>
  )
}
