import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef, useState } from 'react';

const MyMap = () => {
  const ref = useRef(null);
  const [map, setMap] = useState<google.maps.Map>();

  const onClick = () => {
    map.setZoom(13);
    map.panTo({ lat: 38.5152506538034, lng: 127.10315587642619 });
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
