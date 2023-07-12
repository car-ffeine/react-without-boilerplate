import { Station } from '../types';
import { Store } from '../utils/useExternalState/store';

export const stationStore = new Store<Station[]>(null);
