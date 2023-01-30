import styles from '../../styles/Product.module.css'
import Link from 'next/link'
import { Plus } from '../Icons/Plus'

export const LearnLink = ({ isGroup, selectedColor, link }) => {
  return (
    <>
      <div className={isGroup ? styles.groupLinks : styles.productLinks}>
        <Plus selectedColor={selectedColor} />
        <span>
          <Link href={link}>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: selectedColor }}
            >
              {isGroup ? 'Lista completa' : 'Saiba mais'}
            </a>
          </Link>
        </span>
      </div>
    </>
  )
}
