import { headlinersAPIResponse } from './data';
import { HeadlinersAPIResponse } from './types';

/**
 * API endpoint: /api/tv/headliners/default
 * API documentation: https://psapi.nrk.no/documentation/redoc/headliners/
 */
export function getHeadliners(): HeadlinersAPIResponse {
  return headlinersAPIResponse;
}

/**
 * Backup in case API is not reachable.
 * Simulates with a small timeout for async behavior.
 */
export function simulateHeadlinersAPIEndpoint(): Promise<{
  ok: boolean;
  status: number;
  json: () => Promise<HeadlinersAPIResponse>;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        json: async () => headlinersAPIResponse,
      });
    }, 250);
  });
}
