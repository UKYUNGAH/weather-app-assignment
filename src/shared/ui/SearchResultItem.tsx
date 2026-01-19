interface SearchResultItemProps {
    location: string;
    onClick: () => void; // 클릭 시
}

export default function SearchResultItem({ location, onClick }: SearchResultItemProps) {
    return (
        <button
            onClick={onClick}
            className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0 first:rounded-t-xl last:rounded-b-xl"
        >
            <div className="font-medium text-gray-900">{location}</div>
        </button>
    );
}
