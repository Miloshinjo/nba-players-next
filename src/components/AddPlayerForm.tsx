import { db } from '@/db/db';
import { playersTable } from '@/db/schema';
import { revalidatePath } from 'next/cache';

/**
 * Form to add a new player to the database
 *
 * @returns React component
 */
export function AddPlayerForm() {
  async function action(formData: FormData) {
    // We need to use 'use server' to be able to use this function
    // as a server action
    'use server';

    const name = formData.get('playerName') as string;

    // We can do some server validation here and
    // return an error message
    if (!name) {
      // do some server validation
    }

    // Insert the player into the database
    const player = await db
      .insert(playersTable)
      .values({ name })
      .returning()
      .catch((error) => {
        // Handle errors in any way you want
        console.log({ error });
      });

    // Revalidate server cache for the home page
    revalidatePath('/');
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
          title="Add player"
        >
          Add player
        </button>
      </form>
    </article>
  );
}
