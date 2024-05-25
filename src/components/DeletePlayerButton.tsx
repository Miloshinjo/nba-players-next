// We want to use an "onClick" handler so we need to make this into a
// client component.
'use client';

// Server actions in client components must be imported, so that we don't leak them to the client.
import { deletePlayerAction } from '@/actions/deletePlayer';

/**
 * Button to delete a player from the database
 *
 * @param props Props passed to the component
 * @param props.playerId ID of the player to be deleted
 * @returns React component
 */
export function DeletePlayerButton({ playerId }: { playerId: number }) {
  return (
    <button
      type="button"
      className="text-red-400"
      title="Delete player"
      onClick={() => deletePlayerAction(playerId)}
    >
      <span role="img" aria-label="x emoji">
        ❌
      </span>
    </button>
  );
}
