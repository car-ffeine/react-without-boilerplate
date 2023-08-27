import { useQuery } from '@tanstack/react-query';
import Marker from './Marker';
import axios from 'axios';
import { useDisplayPosition } from '../../hooks/useDisplayPosition';
import { Station } from '../../types';

interface Props {
  map: google.maps.Map;
}

function MarkerContainer({ map }: Props) {
  const displayPosition = useDisplayPosition(map);

  const { data: stations } = useQuery({
    queryKey: ['stations'],
    queryFn: () => axios.post<Station[]>('/stations', displayPosition).then(({ data }) => data),
  });

  if (stations === undefined) {
    return <></>;
  }

  return (
    <>
      {stations.map((station) => (
        <Marker key={station.stationId} station={station} />
      ))}
    </>
  );
}

export default MarkerContainer;
