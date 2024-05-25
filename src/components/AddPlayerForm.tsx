// 'use client';

import { db } from '@/db/db';
import { playersTable } from '@/db/schema';
import { revalidatePath } from 'next/cache';

export function AddPlayerForm() {
  async function action(formData: FormData) {
    'use server';

    const name = formData.get('playerName') as string;

    if (!name) {
      // do some server validation
    }

    const player = await db
      .insert(playersTable)
      .values({ name })
      .returning()
      .catch((error) => {
        console.log({ error });
      });

    console.log({ player });

    revalidatePath('/');
    // This function will be called when the form is submitted.
  }

  return (
    <article className="flex flex-col gap-5">
      <h2 className="font-medium text-lg">Add new player to database</h2>
      <form
        action={action}
        className="border p-4 bg-gray-50 flex flex-col gap-2"
      >
        <p className="flex flex-col">
          <label htmlFor="playerName">Player name</label>
          <input
            id="playerName"
            name="playerName"
            type="text"
            required
            className="border px-2 py-1"
            placeholder="Michael Jordan"
          />
        </p>
        <button
          type="submit"
          className="bg-gray-200 self-end px-2 py-1 font-medium rounded border"
        >
          Add player
        </button>
      </form>
    </article>
  );
}
