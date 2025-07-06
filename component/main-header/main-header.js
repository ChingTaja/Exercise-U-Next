'use client';

import logoImg from '@/assets/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import { usePathname } from 'next/navigation';

export default function MainHeader() {
  const path = usePathname();
  console.log(path);
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="food" priority />
          Nextlevel food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>
                Broswer Meals
              </Link>
            </li>
            <li>
              <Link href="/community" className={path.startsWith('/community') ? classes.active : undefined}>
                Foodie Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
