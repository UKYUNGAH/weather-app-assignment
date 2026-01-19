// WeatherIcon.tsx
export const WeatherIcon = ({ iconCode, size = 80 }: { iconCode: string; size?: number }) => {
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return <img src={iconUrl} alt="날씨 아이콘" width={size} height={size} className="drop-shadow-lg" />;
};
