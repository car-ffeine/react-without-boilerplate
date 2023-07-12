import { rest } from 'msw';
import { v4 } from 'uuid';
import { DisplayPosition } from '../types';

const stations = Array.from({ length: 3000 }).map((_, i) => {
  return {
    stationId: v4(),
    stationName: `충전소${i}`,
    companyName: '충전소 회사',
    chargers: [
      {
        type: '완속',
        price: 100,
        capacity: 20,
      },
    ],
    isParkingFree: true,
    operatingTime: '24시간',
    detailLocation: '더미데이터',
    latitude: 37 + 9999 * Math.random() * 0.0001,
    longitude: 127 + 9999 * Math.random() * 0.0001,
    isPrivate: false,
    totalCount: 10,
    availableCount: 1,
  };
});

export const markerHandlers = [
  rest.post('/stations', async (req, res, ctx) => {
    const { latitude, longitude, deltaLatitude, deltaLongitude } =
      (await req.json()) as DisplayPosition;

    const x1 = longitude - deltaLongitude;
    const x2 = longitude + deltaLongitude;
    const y1 = latitude - deltaLatitude;
    const y2 = latitude + deltaLatitude;

    const filteredStations = stations.filter((station) => {
      return (
        station.longitude > x1 &&
        station.longitude < x2 &&
        station.latitude > y1 &&
        station.latitude < y2
      );
    });

    return res(ctx.json(filteredStations), ctx.status(200));
  }),
];
