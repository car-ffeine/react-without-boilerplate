import { setupWorker } from 'msw';
import { markerHandlers } from './markerHandlers';

export const worker = setupWorker(...markerHandlers);
