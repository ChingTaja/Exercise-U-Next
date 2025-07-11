import Image from 'next/image';
import { getMeal } from '@/libs/meals';
import classes from './page.module.css';
import { notFound } from 'next/navigation';

export default async function MealDetailPage({ params }) {
  const { mealSlug } = await params;
  const meal = getMeal(mealSlug);

  if (!meal) {
    notFound()
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
