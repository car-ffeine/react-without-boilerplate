import { useEffect, useRef } from 'react';
import { usePosition } from '../../hooks/usePosition';
import { useExternalState, useExternalValue } from '../../utils/useExternalState';
import { mapStore } from '../../store/mapStore';
import MarkerContainer from '../marker/MarkerContainer';
import MarkerLoadListenerContainer from '../marker/MarkerLoadListenerContainer';
import { stationStore } from '../../store/stationStore';

function CarFfeineMap() {
  const ref = useRef<HTMLDivElement>(null);

  const [map, setMap] = useExternalState(mapStore);
  const stations = useExternalValue(stationStore);

  const initialCenterPosition = usePosition();

  useEffect(() => {
    if (ref.current && initialCenterPosition) {
      const map = new window.google.maps.Map(ref.current, {
        center: initialCenterPosition,
        zoom: 16,
        disableDefaultUI: true,
      });

      setMap(map);
    }
  }, [initialCenterPosition]);

  return (
    <>
      <div ref={ref} id="map"></div>
      {map && <MarkerLoadListenerContainer map={map} />}
      {stations && <MarkerContainer stations={stations} />}
    </>
  );
}

export default CarFfeineMap;
