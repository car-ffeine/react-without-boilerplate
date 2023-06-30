import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef, useState } from 'react';

const MyMap = () => {
  const ref = useRef(null);
  const [map, setMap] = useState<google.maps.Map>();

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
    // TODO: 현재 위치 잡아와서 넣기 MDN 문서 참조하기
    const initialCenter = {
      lat: 37.5056102333107,
      lng: 127.05081496722168,
    };

    const initialZoomSize = 14;

    const googleMap = new window.google.maps.Map(ref.current, {
      center: initialCenter,
      zoom: initialZoomSize,
    });

    setMap(googleMap);
  }, []);

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
