import { Status, Wrapper } from '@googlemaps/react-wrapper';
import CaffeineMap from './CaffeineMap';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return <CaffeineMap />;
  }
};

function MapContainer() {
  return <Wrapper apiKey={process.env.GOOGLE_MAP_API_KEY} render={render} />;
}

export default MapContainer;
