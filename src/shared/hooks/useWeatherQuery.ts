import { useQuery } from '@tanstack/react-query';
import { getCurrentWeather, getHourlyWeather } from '@/shared/api/weatherApi';

// 현재 날씨
export const useCurrentWeatherQuery = (lat: number, lon: number, enabled: boolean = true) => {
    return useQuery({
        queryKey: ['weather', 'current', lat, lon],
        queryFn: () => getCurrentWeather(lat, lon),
        enabled,
        staleTime: 5 * 60 * 1000, // 5분
    });
};

// 시간별 날씨
export const useHourlyWeatherQuery = (lat: number, lon: number, enabled: boolean = true) => {
    return useQuery({
        queryKey: ['weather', 'hourly', lat, lon],
        queryFn: () => getHourlyWeather(lat, lon),
        enabled,
        staleTime: 5 * 60 * 1000, // 5분
    });
};
