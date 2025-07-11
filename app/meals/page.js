import MealsGrid from '@/component/meals/meals-grid';
import classes from './page.module.css';
import Link from 'next/link';
import { getMeals } from '@/libs/meals';
import { Suspense } from 'react';

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself, It's easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals ...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
