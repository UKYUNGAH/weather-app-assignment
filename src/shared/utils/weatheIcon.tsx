// 아이콘 코드 이미지 url 변환
export const getWeatherIconUrl = (iconCode: string): string => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// 날씨 아이콘 컴포넌트
export const WeatherIcon = ({ iconCode, size = 80 }: { iconCode: string; size?: number }) => {
    return (
        <img
            src={getWeatherIconUrl(iconCode)}
            alt="날씨 아이콘"
            width={size}
            height={size}
            className="drop-shadow-lg"
        />
    );
};
