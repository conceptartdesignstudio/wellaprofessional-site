import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="/wella.png" alt="Wella Logo" className={styles.logo} />
      <h1 className={styles.mainTitle}>Bem-vindo ao mundo de Wella</h1>
    </div>
  )
}
