'use server';

import { db } from '@/db/db';
import { playersTable } from '@/db/schema';
import { cache } from 'react';

// Fetch players from the database
// This function will be cached by react
export const getPlayers = cache(async () => {
  const item = await db.select().from(playersTable);
  return item;
});
