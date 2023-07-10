import { useSyncExternalStore } from 'react';
import { Store } from './store';
import { ExternalStore } from './types';

export const store = <T>(initialValue: T) => {
  const externalStore = new Store<T>(initialValue);

  return externalStore;
};

export const useExternalState = <T>(store: ExternalStore<T>): [T, (newState: T) => void] => {
  const state = useSyncExternalStore(store.subscribe, store.getState);

  return [state, store.setState.bind(store)];
};

export const useExternalValue = <T>(store: ExternalStore<T>): T => {
  const state = useSyncExternalStore(store.subscribe, store.getState);

  return state;
};

export const useSetExternalState = <T>(store: ExternalStore<T>): ((newState: T) => void) => {
  return store.setState.bind(store);
};
