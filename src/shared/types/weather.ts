export interface WeatherData {
    main: {
        temp: number; //현재 온도
        temp_min: number; // 최저 온도
        temp_max: number; // 최고 온도
    };
    weather: Array<{
        description: string; // 날씨 설명
        icon: string; // 아이콘 코드
    }>;
}

// 시간별 날씨
export interface HourlyWeather {
    dt: number; // 시간
    main: {
        temp: number; // 온도
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
}

// 시간별 날씨 응답
export interface HourlyResponse {
    list: HourlyWeather[];
}
