import { headlinersAPIResponse } from './data';
import { HeadlinersAPIResponse } from './types';

/**
 * API endpoint: /api/tv/headliners/default
 * API documentation: https://psapi.nrk.no/documentation/redoc/headliners/
 */
export function getHeadliners(): HeadlinersAPIResponse {
  return headlinersAPIResponse;
}
