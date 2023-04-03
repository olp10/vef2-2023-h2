import Link from 'next/link';
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <li>
            <Link href="/">Heim</Link>
          </li>
          <li>
            <Link href="/recipes">Allar uppskriftir</Link>
          </li>
        </nav>
      </header>
    </>
  )
}
