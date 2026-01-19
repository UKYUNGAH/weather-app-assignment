import { useQuery } from '@tanstack/react-query';

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
// API 호출 함수
const fetchWeather = async (nowLat: number, nowLon: number) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${nowLat}&lon=${nowLon}&appid=${apiKey}&units=metric&lang=kr`,
    );

    if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
    }

    return response.json();
};

// Hook으로 래핑
export const useWeather = (nowLat: number, nowLon: number) => {
    return useQuery({
        queryKey: ['weather'],
        // queryFn: fetchWeather,
        queryFn: () => fetchWeather(nowLat, nowLon),
        enabled: !!(nowLat && nowLon),
    });
};
