import { headlinersAPIResponse } from './data';
import { Headliner } from './types';

/**
 * API endpoint: /api/tv/headliners/default
 * API documentation: https://psapi.nrk.no/documentation/redoc/headliners/
 */
export function getHeadliners(): Headliner[] {
  return headlinersAPIResponse.headliners;
}
