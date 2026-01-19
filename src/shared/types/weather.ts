// src/shared/types/weather.ts

export interface WeatherResponse {
    // ✅ export 추가!
    coord: {
        lon: number;
        lat: number;
    };
    weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
    }>;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    dt: number;
    name: string;
}

export interface HourlyWeatherResponse {
    // ✅ export 추가!
    list: Array<{
        dt: number;
        main: {
            temp: number;
            temp_min: number;
            temp_max: number;
        };
        weather: Array<{
            icon: string;
            description: string;
        }>;
    }>;
}
