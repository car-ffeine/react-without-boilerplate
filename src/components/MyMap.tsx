import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef, useState } from 'react';
import { usePosition } from '../hooks/usePosition';

const MyMap = () => {
  const ref = useRef(null);
  const [map, setMap] = useState<google.maps.Map>();

  const initialCenterPosition = usePosition();

  const onClick = () => {
    const bounds = map.getBounds();
    const center = map.getCenter();

    const deltaX =
      (bounds.getNorthEast().lng() - bounds.getSouthWest().lng()) / 2;
    const deltaY =
      (bounds.getNorthEast().lat() - bounds.getSouthWest().lat()) / 2;
    const centerX = center.lng();
    const centerY = center.lat();

    /* 지도의 델타값을 보내줄 수 있다.
     지도의 center 좌표를 보내줄 수 있다.*/
    console.log(deltaX, deltaY, centerX, centerY);
  };

  useEffect(() => {
    if (initialCenterPosition === undefined) return;

    const initialCenter = {
      lat: initialCenterPosition.latitude,
      lng: initialCenterPosition.longitude,
    };

    const initialZoomSize = 16;

    const googleMap = new window.google.maps.Map(ref.current, {
      center: initialCenter,
      zoom: initialZoomSize,
    });

    const centerMarker = new google.maps.Marker({
      position: initialCenter,
      title: 'center position',
      map: googleMap,
    });

    setMap(googleMap);
  }, [initialCenterPosition]);

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

const MapApp = () => (
  <Wrapper apiKey={process.env.GOOGLE_MAP_API_KEY} render={render} />
);

export default MapApp;
