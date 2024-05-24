import { AddPlayerForm } from '@/components/AddPlayerForm';
import { Players } from '@/components/Players';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center gap-10">
      <AddPlayerForm />
      <Suspense fallback={<div>Loading...</div>}>
        <Players />
      </Suspense>
    </main>
  );
}
