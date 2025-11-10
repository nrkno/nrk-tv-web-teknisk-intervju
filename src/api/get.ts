import { headlinersAPIResponse } from './data';
import { HeadlinersAPIResponse } from './types';

/**
 * API endpoint: https://psapi.nrk.no/tv/headliners/default
 * API documentation: https://psapi.nrk.no/documentation/redoc/headliners/
 */
export function getHeadliners(): HeadlinersAPIResponse {
  return headlinersAPIResponse;
}
