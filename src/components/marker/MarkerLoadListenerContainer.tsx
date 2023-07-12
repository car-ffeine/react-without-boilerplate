import { useEffect } from 'react';
import { getDisplayPosition } from '../../utils/google-map';
import axios from 'axios';
import { useSetExternalState } from '../../utils/useExternalState';
import { stationStore } from '../../store/stationStore';
import { Station } from '../../types';

interface Props {
  map: google.maps.Map;
}

const EVENT_NAMES = ['dragend', 'zoom_changed', 'bounds_changed'];

function MarkerLoadListenerContainer({ map }: Props) {
  const setStations = useSetExternalState(stationStore);

  useEffect(() => {
    EVENT_NAMES.forEach((name) => {
      const markerLoadListener = map.addListener(name, () => {
        const displayPosition = getDisplayPosition(map);

        axios
          .post<Station[]>('/stations', displayPosition)
          .then((response) => setStations(response.data));

        if (name === 'bounds_changed') {
          markerLoadListener.remove();
        }
      });
    });
  }, []);

  return <></>;
}

export default MarkerLoadListenerContainer;
