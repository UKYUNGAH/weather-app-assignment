interface FavoriteCardProps {
    displayName: string;
    location: string;
    temperature: number;
    description: string;
    minTemp: number;
    maxTemp: number;
    iconUrl?: string;
    onEdit: () => void;
    onDelete: () => void;
    onClick: () => void;
}

const FavoriteCard = ({
    displayName,
    location,
    temperature,
    description,
    minTemp,
    maxTemp,
    iconUrl,
    onEdit,
    onDelete,
    onClick,
}: FavoriteCardProps) => {
    return (
        <li
            onClick={onClick}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-5 cursor-pointer"
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{displayName}</h3>
                    <p className="text-sm text-gray-500">{location}</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit();
                        }}
                        className="text-gray-400 hover:text-[#0094AD] transition-colors p-1 cursor-pointer"
                        title="별칭 수정"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                        className="hover:text-gray-400 text-red-500 transition-colors p-1 cursor-pointer"
                        title="즐겨찾기 제거"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {iconUrl && <img src={iconUrl} alt={description} className="w-10 h-10" />}
                    <div>
                        <div className="text-3xl font-bold text-gray-900">{Math.round(temperature)}°</div>
                        <div className="text-sm text-gray-500 mt-1">{description}</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-sm text-gray-500">최고/최저</div>
                    <div className="text-base font-semibold text-gray-700">
                        {Math.round(maxTemp)}° / {Math.round(minTemp)}°
                    </div>
                </div>
            </div>
        </li>
    );
};

export default FavoriteCard;
