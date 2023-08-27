import { useEffect, useState } from 'react';

interface Position {
  lat: number;
  lng: number;
}

export const useCurrentPosition = () => {
  const [position, setPosition] = useState<Position>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
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
