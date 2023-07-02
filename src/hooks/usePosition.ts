import { useEffect, useState } from 'react';

interface Position {
  latitude: number;
  longitude: number;
}

export const usePosition = () => {
  const [position, setPosition] = useState<Position>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        console.log('실패');
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return position;
};
