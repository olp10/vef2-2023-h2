import Link from 'next/link';
import styles from './Footer.module.scss'; // Virkar ekki :(

export default function Footer() {
  return (
    <>
      <footer>
        <Link href="/users/login">Innskráning stjórnanda</Link>
        <p className={styles.copyright}>&copy; <em>Hópur #2</em></p>
      </footer>
    </>
  )
}
