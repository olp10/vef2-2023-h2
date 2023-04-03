import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer>
        <Link href="/login">Innskráning stjórnanda</Link>
        <p className={styles.copyright}>&copy; <em>Hópur #2</em></p>
      </footer>
    </>
  )
}
