import { useEffect } from 'react';
import { getDisplayPosition } from '../../utils/google-map';
import axios from 'axios';
import { DisplayPosition, Station } from '../../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface Props {
  map: google.maps.Map;
}

const EVENT_NAMES = ['dragend', 'zoom_changed', 'bounds_changed'];

function MarkerLoadListenerContainer({ map }: Props) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(['stations'], {
    mutationFn: async (displayPosition: DisplayPosition) => {
      const stations = await axios
        .post<Station[]>('/stations', displayPosition)
        .then(({ data }) => data);

      return stations;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['stations'] });
    },
  });

  useEffect(() => {
    EVENT_NAMES.forEach((name) => {
      const markerLoadListener = map.addListener(name, () => {
        const displayPosition = getDisplayPosition(map);

        mutate(displayPosition);

        if (name === 'bounds_changed') {
          markerLoadListener.remove();
        }
      });
    });
  }, []);

  return <></>;
}

export default MarkerLoadListenerContainer;
