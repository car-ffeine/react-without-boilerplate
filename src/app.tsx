import { Loader } from '@googlemaps/js-api-loader';
import { GlobalStyle } from './style/GlobalStyle';

let map: google.maps.Map;

const loader = new Loader({
  apiKey: process.env.GOOGLE_MAP_API_KEY,
  version: 'weekly',
});

loader.load().then(async () => {
  const { Map } = (await google.maps.importLibrary(
    'maps'
  )) as google.maps.MapsLibrary;

  const myLatLng = { lat: -34.397, lng: 150.644 };

  map = new Map(document.getElementById('map') as HTMLElement, {
    center: myLatLng,
    zoom: 8,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: 'Hello World!',
    icon: 'https://cdn-icons-png.flaticon.com/128/9421/9421782.png',
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: 'Hello World!',
  });
});

function App() {
  return (
    <>
      <GlobalStyle />
      <div id="map"></div>
    </>
  );
}

export default App;
