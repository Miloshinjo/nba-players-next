import { AddPlayerForm } from '@/components/AddPlayerForm';
import { Players } from '@/components/Players';
import { Suspense } from 'react';

/**
 * Home page component
 *
 * @returns NextJS page component
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col justify-center items-center gap-10">
      <h1 className="text-xl font-medium underline">
        NBA Players Database (NextJS){' '}
        <span role="img" aria-label="basketball emoji">
          🏀
        </span>
      </h1>
      <section className="flex gap-5 items-center">
        <AddPlayerForm />
        <Suspense fallback={<div>Loading...</div>}>
          <Players />
        </Suspense>
      </section>
    </main>
  );
}
