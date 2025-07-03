import logoImg from '@/assets/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="food" />
        Nextlevel food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals"></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
