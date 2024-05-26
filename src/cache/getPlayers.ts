'use server';

import { db } from '@/db/client';
import { playersTable } from '@/db/schema';

import { cache } from 'react';

// Fetch players from the database
// This function will be cached by react
export const getPlayers = cache(async () => {
  return db.select().from(playersTable);
});
