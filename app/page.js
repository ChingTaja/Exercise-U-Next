import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Time to get started!</h1>

      <Link href="/meals">share</Link>
      <Link href="/meals/share">community</Link>
      <Link href="/meals/slug1">slug</Link>
      <Link href="/community">community</Link>
    </main>
  );
}
