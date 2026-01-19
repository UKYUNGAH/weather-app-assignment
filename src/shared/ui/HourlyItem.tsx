interface HourlyItemProps {
    time: string;
    temperature: number;
    iconUrl?: string;
}

export default function HourlyItem({ time, temperature, iconUrl }: HourlyItemProps) {
    return (
        <li className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-20">
            {/* 시간 */}
            <time className="text-white/90 text-sm font-medium" dateTime={time}>
                {time}
            </time>

            {/* 아이콘 */}
            {iconUrl && (
                <div className="text-white">
                    <img src={iconUrl} alt="날씨" className="w-8 h-8" />
                </div>
            )}

            {/* 온도 */}
            <p className="text-white text-base font-semibold">{temperature}°</p>
        </li>
    );
}
