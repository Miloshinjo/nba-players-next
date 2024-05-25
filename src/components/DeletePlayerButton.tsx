'use client';

import { deletePlayerAction } from '@/actions/deletePlayer';

export function DeletePlayerButton({ playerId }: { playerId: number }) {
  return (
    <button
      type="button"
      className="text-red-400"
      title="Delete player"
      onClick={() => deletePlayerAction(playerId)}
    >
      <span role="img">❌</span>
    </button>
  );
}
