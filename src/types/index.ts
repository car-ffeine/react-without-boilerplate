export interface ExternalStore<T> {
  subscribe: (listener: () => void) => () => void;
  emitChange: () => void;
  getState: () => T;
  setState: (newState: T) => void;
}

export interface DisplayPosition {
  latitude: number;
  longitude: number;
  deltaLatitude: number;
  deltaLongitude: number;
}

export interface Station {
  stationId: string;
  stationName: string;
  companyName: string;
  chargers: [
    {
      type: string;
      price: number;
      capacity: number;
    }
  ];
  isParkingFree: boolean;
  operatingTime: string;
  detailLocation: string;
  latitude: number;
  longitude: number;
  isPrivate: boolean;
  totalCount: number;
  availableCount: number;
}
