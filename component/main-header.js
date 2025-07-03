import logoImg from '@/assets/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="food" priority />
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
