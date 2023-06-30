import { Loader } from '@googlemaps/js-api-loader';
import { GlobalStyle } from './style/GlobalStyle';
import MapApp from './components/MyMap';
import { useState } from 'react';

// let map: google.maps.Map;

// const loader = new Loader({
//   apiKey: process.env.GOOGLE_MAP_API_KEY,
//   version: 'weekly',
// });

// loader.load().then(async () => {
//   const { Map } = (await google.maps.importLibrary(
//     'maps'
//   )) as google.maps.MapsLibrary;

//   const myLatLng = { lat: -34.397, lng: 150.644 };

//   const markerImage: google.maps.Icon = {
//     url: 'https://cdn-icons-png.flaticon.com/128/9421/9421782.png',
//   };

//   map = new Map(document.getElementById('map') as HTMLElement, {
//     center: myLatLng,
//     zoom: 8,
//   });

//   new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: 'Hello World!',
//     icon: markerImage,
//     draggable: true,
//   });

//   new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: 'Hello World!',
//   });
// });

function App() {
  const [latLng, setLatLng] = useState<google.maps.LatLngLiteral>({
    lat: 37.5056102333107,
    lng: 127.05081496722168,
  });
  const [zoom, setZoom] = useState(14);

  const addLat = () => {
    setLatLng((current) => ({ ...current, lat: current.lat + 1 }));
  };

  const addLng = () => {
    setLatLng((current) => ({ ...current, lng: current.lng + 1 }));
  };

  return (
    <>
      <GlobalStyle />
      {/* <div id="map"></div> */}
      <MapApp center={latLng} zoom={zoom} />
      {/* <button
        onClick={addLat}
        style={{ zIndex: 999, position: 'fixed', top: 100, left: 100 }}
      >
        위도 + 1
      </button>
      <button
        onClick={addLng}
        style={{ zIndex: 999, position: 'fixed', top: 100, left: 25 }}
      >
        경도 + 1
      </button> */}
    </>
  );
}

export default App;
