interface HourlyItemProps {
    time: string;
    temperature: number;
    iconUrl?: string;
}

const HourlyItem = ({ time, temperature, iconUrl }: HourlyItemProps) => {
    return (
        <li className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-20">
            <time className="text-white/90 text-sm font-medium">{time}</time>
            {iconUrl && <img src={iconUrl} alt="날씨" className="w-8 h-8" />}
            <p className="text-white text-base font-semibold">{Math.round(temperature)}°</p>
        </li>
    );
};

export default HourlyItem;
