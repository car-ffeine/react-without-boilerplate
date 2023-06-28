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
  map = new Map(document.getElementById('map') as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
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
