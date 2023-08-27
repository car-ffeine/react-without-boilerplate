import { useEffect, useRef } from 'react';
import { useCurrentPosition } from '../../hooks/useCurrentPosition';
import { useExternalState, useExternalValue } from '../../utils/useExternalState';
import { mapStore } from '../../store/mapStore';
import MarkerContainer from '../marker/MarkerContainer';
import MarkerLoadListenerContainer from '../marker/MarkerLoadListenerContainer';

function CarFfeineMap() {
  const ref = useRef<HTMLDivElement>(null);

  const [map, setMap] = useExternalState(mapStore);

  const initialCenterPosition = useCurrentPosition();

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
      {map && (
        <>
          <MarkerLoadListenerContainer map={map} />
          <MarkerContainer map={map} />
        </>
      )}
    </>
  );
}

export default CarFfeineMap;
