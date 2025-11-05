import { headlinersAPIResponse } from './data';
import { Headliner } from './types';

export function getHeadliners(): Headliner[] {
  return headlinersAPIResponse.headliners;
}
