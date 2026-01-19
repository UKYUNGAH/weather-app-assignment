import { PencilIcon, HeartIcon } from '@heroicons/react/24/outline';

interface FavoriteCardProps {
    displayName: string;
    location: string;
    temperature: number;
    description: string;
    minTemp: number;
    maxTemp: number;
    iconUrl?: string;
    onEdit: () => void; // 수정 버튼 클릭
    onDelete: () => void; // 삭제 버튼 클릭
    onClick: () => void; // 카드 클릭 시 (상세 페이지 이동)
}

export default function FavoriteCard({
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
}: FavoriteCardProps) {
    return (
        <li
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-5 relative group cursor-pointer"
            onClick={onClick} // 카드 전체 클릭 시
        >
            {/* 상단: 별명 & 버튼들 */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{displayName}</h3>
                    <p className="text-sm text-gray-500">{location}</p>
                </div>

                <div className="flex gap-2">
                    {/* 수정 버튼 */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // 부모 onClick 막기
                            onEdit();
                        }}
                        className="text-gray-400 hover:text-[#0094AD] transition-colors p-1"
                        title="별칭 수정"
                    >
                        <PencilIcon className="w-4 h-4" />
                    </button>

                    {/* 삭제 버튼 */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // 부모 onClick 막기
                            onDelete();
                        }}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        title="즐겨찾기 제거"
                    >
                        <HeartIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* 날씨 정보 */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {iconUrl && (
                        <div className="text-[#0094AD]">
                            <img src={iconUrl} alt={description} className="w-12 h-12" />
                        </div>
                    )}
                    <div>
                        <div className="text-3xl font-bold text-gray-900">{temperature}°</div>
                        <div className="text-sm text-gray-500 mt-1">{description}</div>
                    </div>
                </div>

                <div className="text-right">
                    <div className="text-sm text-gray-500">최고/최저</div>
                    <div className="text-base font-semibold text-gray-700">
                        {maxTemp}° / {minTemp}°
                    </div>
                </div>
            </div>
        </li>
    );
}
