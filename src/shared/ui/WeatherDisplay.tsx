interface WeatherDisplayProps {
    variant: 'card' | 'plain'; // card: DetailPage (배경 있음), plain: HomePage (배경 없음)
    temperature: number; // 현재 온도
    description: string; // 날씨 설명 (예: "흐림")
    maxTemp: number; // 최고 온도
    minTemp: number; // 최저 온도
    iconUrl?: string; // 날씨 아이콘 URL (선택)
}

export default function WeatherDisplay({
    variant,
    temperature,
    description,
    maxTemp,
    minTemp,
    iconUrl,
}: WeatherDisplayProps) {
    return (
        <div
            className={`text-center ${
                variant === 'card'
                    ? 'bg-white/15 backdrop-blur-md rounded-3xl shadow-lg max-w-2xl mx-auto px-4 py-8 pb-16 mb-10'
                    : 'mb-12'
            }`}
        >
            {/* 아이콘 */}
            <div className="flex justify-center mb-6">
                {iconUrl ? (
                    <img src={iconUrl} alt={description} className="w-20 h-20" />
                ) : (
                    <span className="text-white drop-shadow-lg"></span>
                )}
            </div>

            {/* 온도 */}
            <p
                className={`
        text-white font-bold 
        ${variant === 'card' ? 'text-7xl mb-3' : 'text-7xl md:text-8xl mb-2'}
      `}
            >
                {temperature} °
            </p>

            {/* 설명 */}
            <p className="text-white/90 text-xl mb-6">{description}</p>

            {/* 최고/최저 */}
            <dl className="flex items-center justify-center gap-8 text-white/90">
                <div>
                    <dt className="text-sm mb-1">최고</dt>
                    <dd className="text-2xl font-semibold">{maxTemp} °</dd>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div>
                    <dt className="text-sm mb-1">최저</dt>
                    <dd className="text-2xl font-semibold">{minTemp} °</dd>
                </div>
            </dl>
        </div>
    );
}
