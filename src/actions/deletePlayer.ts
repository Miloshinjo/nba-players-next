// We need to declare this at the top of the file so that we can use this action in client components as well.
'use server';

import { db } from '@/db/client';
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
