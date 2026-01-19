interface SearchResultItemProps {
    location: string;
    onClick: () => void;
}

const SearchResultItem = ({ location, onClick }: SearchResultItemProps) => {
    return (
        <button
            onClick={onClick}
            className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-b-0 transition-colors"
        >
            <div className="text-sm text-gray-900">{location}</div>
        </button>
    );
};

export default SearchResultItem;
