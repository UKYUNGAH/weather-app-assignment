import type { Favorite } from '@/shared/types/location';
import type { WeatherData, HourlyWeather } from '@/shared/types/weather';
//  가짜 즐겨찾기
export const dummyFavorites: Favorite[] = [
    {
        id: '1',
        name: '인천광역시-남동구-구월3동',
        displayName: '우리집',
        lat: 37.4563,
        lon: 126.7052,
    },
    {
        id: '2',
        name: '서울특별시-강남구-역삼동',
        displayName: '회사',
        lat: 37.5048,
        lon: 127.0489,
    },
    {
        id: '3',
        name: '부산광역시-해운대구',
        displayName: '부모님댁',
        lat: 35.1796,
        lon: 129.0756,
    },
];

// 가짜 현재 날씨
export const dummyWeather: WeatherData = {
    main: {
        temp: 20,
        temp_min: 15,
        temp_max: 28,
    },
    weather: [
        {
            description: '흐림',
            icon: '04d',
        },
    ],
};

// 가짜 시간별 날씨
export const dummyHourly: HourlyWeather[] = Array.from({ length: 12 }, (_, i) => ({
    dt: Date.now() / 1000 + i * 3600, // 현재 시간 + i시간
    main: { temp: 22 - i }, // 온도 점점 낮아짐
    weather: [{ description: '맑음', icon: '01d' }],
}));
