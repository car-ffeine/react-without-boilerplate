import { DisplayPosition } from '../../types';

const EVENT_NAMES = ['dragend', 'zoom_changed'];

export const getDisplayPosition = (map: google.maps.Map): DisplayPosition => {
  const bounds = map.getBounds();
  const center = map.getCenter();

  return {
    latitude: center.lat(),
    longitude: center.lng(),
    deltaLatitude: (bounds.getNorthEast().lat() - bounds.getSouthWest().lat()) / 2,
    deltaLongitude: (bounds.getNorthEast().lng() - bounds.getSouthWest().lng()) / 2,
  };
};
