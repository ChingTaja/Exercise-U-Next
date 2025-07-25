'use client';

import logoImg from '@/assets/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {
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
              <NavLink href="/meals">Broswer Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community"> Foodie Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
