/**
 * Provides injectable build-time data-access helpers for retrieving category records.
 */

import { asc } from 'drizzle-orm';
import { categories } from '../../db/schema';
import type { Category } from '../types/game';
import type { Database } from './db';

/**
 * Retrieves all category records in deterministic alphabetical name order.
 *
 * @param db - The injectable Drizzle database client used to query categories.
 * @returns A promise resolving to app-facing category records with identifiers and names.
 */
export async function getAllCategories(db: Database): Promise<Category[]> {
    return db
        .select({ id: categories.id, name: categories.name })
        .from(categories)
        .orderBy(asc(categories.name));
}
