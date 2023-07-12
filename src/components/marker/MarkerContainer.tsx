import { Station } from '../../types';
import Marker from './Marker';

interface Props {
  stations: Station[];
}

function MarkerContainer({ stations }: Props) {
  console.log(stations);

  return (
    <>
      {stations.map((station) => (
        <Marker key={station.stationId} station={station} />
      ))}
    </>
  );
}

export default MarkerContainer;
