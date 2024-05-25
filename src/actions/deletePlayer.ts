'use server';

import { db } from '@/db/db';
import { playersTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

// Action to delete a player from the database
export async function deletePlayerAction(playerId: number) {
  // Delete a player from the database
  await db.delete(playersTable).where(eq(playersTable.id, playerId));

  // Revalidate server cache for the home page
  revalidatePath('/');
}
