import { ExternalStore } from './types';

export class Store<T> implements ExternalStore<T> {
  public state: T;
  private listeners: (() => void)[] = [];

  constructor(initialState: T) {
    this.state = initialState;
  }

  setState(newState: T) {
    this.state = newState;
    this.emitChange();
  }

  getState() {
    return this.state;
  }

  subscribe(listener: () => void) {
    this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  emitChange() {
    for (let listener of this.listeners) {
      listener();
    }
  }
}
