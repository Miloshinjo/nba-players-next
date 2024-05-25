import { getPlayers } from '@/cache/getPlayers';
import { DeletePlayerButton } from './DeletePlayerButton';

export async function Players() {
  // fetch players from the DB
  const players = await getPlayers();

  // Handle empty state
  if (players.length === 0) {
    return (
      <p className="text-center">
        No players in the database. <br /> Use the form to add some.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-2 text-center">
      {players.map((player) => (
        <li
          key={player.id}
          className="border bg-gray-50 p-2 flex justify-between gap-10"
        >
          {player.name}
          <DeletePlayerButton playerId={player.id} />
        </li>
      ))}
    </ul>
  );
}
