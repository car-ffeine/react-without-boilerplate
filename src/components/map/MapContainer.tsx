import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef } from 'react';
import { usePosition } from '../../hooks/usePosition';
import { useSetExternalState } from '../../utils/useExternalState';
import { mapStore } from './mapStore';

const MyMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const initialCenterPosition = usePosition();

  const setMap = useSetExternalState(mapStore);

  useEffect(() => {
    if (initialCenterPosition === undefined) return;

    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: initialCenterPosition,
        zoom: 16,
        disableDefaultUI: true,
      });

      setMap(map);
    }
  }, [initialCenterPosition]);

  return <div ref={ref} id="map"></div>;
};

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return <MyMap />;
  }
};

const MapContainer = () => <Wrapper apiKey={process.env.GOOGLE_MAP_API_KEY} render={render} />;

export default MapContainer;
