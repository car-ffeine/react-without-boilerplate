import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef, useState } from 'react';

interface MyMapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

const MyMap = ({ center, zoom }: MyMapProps) => {
  const ref = useRef(null);
  const [map, setMap] = useState<google.maps.Map>();

  const onClick = () => {
    map.panTo({ lat: 37.5152506538034, lng: 127.10315587642619 });
  };

  useEffect(() => {
    setMap(
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      })
    );
  }, [center, zoom]);

  return (
    <>
      <div ref={ref} id="map"></div>
      <button
        style={{ zIndex: 999, position: 'fixed', top: 100, left: 100 }}
        onClick={onClick}
      >
        ㅎㅇㅎㅇ
      </button>
    </>
  );
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
