import { Loader } from '@googlemaps/js-api-loader';
import { GlobalStyle } from './style/GlobalStyle';
import MapApp from './components/MyMap';

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
  const myLatLng = { lat: -34.397, lng: 150.644 };
  const zoom = 8;

  return (
    <>
      <GlobalStyle />
      {/* <div id="map"></div> */}
      <MapApp center={myLatLng} zoom={zoom} />
    </>
  );
}

export default App;
