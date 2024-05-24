import { db } from '@/db/db';
import { playersTable } from '@/db/schema';

export async function Players() {
  // fetch players from the DB
  const players = await db.select().from(playersTable);

  console.log({ players });

  if (players.length === 0) {
    return (
      <p className="text-center">
        No players in the database. <br /> Use the form to add some.
      </p>
    );
  }

  return (
    <ul>
      {players.map((player) => (
        <li key={player.id}>{player.name}</li>
      ))}
    </ul>
  );
}
