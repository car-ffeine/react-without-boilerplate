import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef } from 'react';

interface MyMapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

const MyMap = ({ center, zoom }: MyMapProps) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  }, []);

  return <div ref={ref} id="map"></div>;
};

const render = (status: Status, { center, zoom }: MyMapProps) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return <MyMap center={center} zoom={zoom} />;
  }
};

const MapApp = ({ center, zoom }: MyMapProps) => (
  <Wrapper
    apiKey={process.env.GOOGLE_MAP_API_KEY}
    render={(status) => render(status, { center, zoom })}
  />
);

export default MapApp;
