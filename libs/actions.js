'use server';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

function isInvalidText(text) {
  return !text || text.trim() === '';
}
export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.creator_email.includes('@') ||
    meal.image.size === 0
  ) {
    throw new Error('Invalid input');
  }
  await saveMeal(meal);
  redirect('/meals');
}
