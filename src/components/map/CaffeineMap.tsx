import { useEffect, useRef } from 'react';
import { usePosition } from '../../hooks/usePosition';
import { mapStore } from './mapStore';
import { useSetExternalState } from '../../utils/useExternalState';

function CaffeineMap() {
  const ref = useRef<HTMLDivElement>(null);
  const initialCenterPosition = usePosition();

  const setMap = useSetExternalState(mapStore);

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

  return <div ref={ref} id="map"></div>;
}

export default CaffeineMap;
