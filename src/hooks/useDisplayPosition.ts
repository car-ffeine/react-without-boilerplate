import { DisplayPosition } from '../types';

export const useDisplayPosition = (map: google.maps.Map): DisplayPosition => {
  const bounds = map.getBounds();
  const center = map.getCenter();

  return {
    latitude: center.lat(),
    longitude: center.lng(),
    deltaLatitude: bounds ? (bounds.getNorthEast().lat() - bounds.getSouthWest().lat()) / 2 : 0,
    deltaLongitude: bounds ? (bounds.getNorthEast().lng() - bounds.getSouthWest().lng()) / 2 : 0,
  };
};
