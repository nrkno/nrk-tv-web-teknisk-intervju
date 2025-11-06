import { headlinersAPIResponse } from './data';
import { Headliner } from './types';

/**
 * API endpoint: https://psapi.nrk.no/tv/headliners/default
 * API documentation: https://psapi.nrk.no/documentation/redoc/headliners/
 */
export function getHeadliners(): Headliner[] {
  return headlinersAPIResponse.headliners;
}
