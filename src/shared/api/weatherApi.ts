import type { WeatherResponse, HourlyWeatherResponse } from '@/shared/types/weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// 현재 날씨
export const getCurrentWeather = async (lat: number, lon: number): Promise<WeatherResponse> => {
    const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`);

    if (!response.ok) {
        throw new Error('날씨 정보를 가져올 수 없습니다');
    }

    return response.json();
};

// 시간별 날씨
export const getHourlyWeather = async (lat: number, lon: number): Promise<HourlyWeatherResponse> => {
    const response = await fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`);

    if (!response.ok) {
        throw new Error('시간별 날씨 정보를 가져올 수 없습니다');
    }

    return response.json();
};
