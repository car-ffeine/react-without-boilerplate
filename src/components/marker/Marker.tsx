import { useEffect } from 'react';
import { Station } from '../../types';
import { useExternalValue } from '../../utils/useExternalState';
import { mapStore } from '../../store/mapStore';

interface Props {
  station: Station;
}

function Marker({ station }: Props) {
  const map = useExternalValue(mapStore);

  useEffect(() => {
    const marker = new google.maps.Marker({
      map,
      position: { lat: station.latitude, lng: station.longitude },
      title: station.stationName,
    });

    return () => marker.setMap(null);
  }, []);

  return <></>;
}

export default Marker;
