interface WeatherDisplayProps {
    variant: 'card' | 'plain';
    temperature: number;
    description: string;
    maxTemp: number;
    minTemp: number;
    iconUrl?: string;
}

const WeatherDisplay = ({ variant, temperature, description, maxTemp, minTemp, iconUrl }: WeatherDisplayProps) => {
    return (
        <div
            className={`
        text-center
        ${
            variant === 'card'
                ? 'bg-white/15 backdrop-blur-md rounded-3xl shadow-lg max-w-2xl mx-auto px-4 py-8 pb-16 mb-10'
                : 'mb-12'
        }
      `}
        >
            {iconUrl && (
                <div className="flex justify-center mb-6">
                    <img src={iconUrl} alt={description} className="w-20 h-20" />
                </div>
            )}

            <p
                className={`
          text-white font-bold mb-3
          ${variant === 'card' ? 'text-7xl' : 'text-7xl md:text-8xl mb-2'}
        `}
            >
                {Math.round(temperature)}°
            </p>

            <p className="text-white/90 text-xl mb-6">{description}</p>

            <dl className="flex items-center justify-center gap-8 text-white/90">
                <div>
                    <dt className="text-sm mb-1">최고</dt>
                    <dd className="text-2xl font-semibold">{Math.round(maxTemp)}°</dd>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div>
                    <dt className="text-sm mb-1">최저</dt>
                    <dd className="text-2xl font-semibold">{Math.round(minTemp)}°</dd>
                </div>
            </dl>
        </div>
    );
};

export default WeatherDisplay;
