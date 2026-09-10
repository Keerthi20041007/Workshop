/**
 * Provides injectable build-time data-access helpers for retrieving publisher records.
 */

import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';
import type { Database } from './db';

/**
 * Retrieves all publisher records in deterministic alphabetical name order.
 *
 * @param db - The injectable Drizzle database client used to query publishers.
 * @returns A promise resolving to app-facing publisher records with identifiers and names.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
