export interface ExternalStore<T> {
  subscribe: (listener: () => void) => () => void;
  emitChange: () => void;
  getState: () => T;
  setState: (newState: T) => void;
}
