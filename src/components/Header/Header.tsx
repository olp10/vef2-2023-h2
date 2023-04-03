import Link from 'next/link';
import './Header.module.scss';

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Heim</Link>
            </li>
            <li>
              <Link href="/recipes">Allar uppskriftir</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
