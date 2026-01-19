import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import WeatherDisplay from '@/shared/ui/WeatherDisplay';
import HourlyItem from '@/shared/ui/HourlyItem';
import FavoriteCard from '@/features/favorites/ui/FavoriteCard';
import SearchResultItem from '@/features/search/ui/SearchResultItem';
import Modal from '@/shared/ui/Modal';
import { useCurrentLocation } from '@/shared/hooks/useCurrentLocation';
import { useCurrentWeatherQuery, useHourlyWeatherQuery } from '@/shared/hooks/useWeatherQuery';
import type { Favorite, District } from '@/shared/types/location';
import districtsData from '@/shared/data/korea_districts.json';

export const HomePage = () => {
    const navigate = useNavigate();

    // 현재 위치 가져오기
    const { location, loading: locationLoading, error: locationError } = useCurrentLocation();

    // 현재 날씨 가져오기
    const {
        data: currentWeather,
        isLoading: weatherLoading,
        error: weatherError,
    } = useCurrentWeatherQuery(location?.lat || 0, location?.lon || 0, !!location);

    // 시간별 날씨 가져오기
    const { data: hourlyWeather, isLoading: hourlyLoading } = useHourlyWeatherQuery(
        location?.lat || 0,
        location?.lon || 0,
        !!location,
    );

    // 상태 관리
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<District[]>([]);
    const [favorites, setFavorites] = useState<Favorite[]>(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingFavorite, setEditingFavorite] = useState<string | null>(null);
    const [aliasInput, setAliasInput] = useState('');

    // 위도/경도로 가장 가까운 지역 찾기
    const findNearestDistrict = (lat: number, lon: number): string => {
        const districts = districtsData as District[];

        let nearest = districts[0];
        let minDistance = Infinity;

        districts.forEach((district) => {
            const distance = Math.sqrt(Math.pow(district.lat - lat, 2) + Math.pow(district.lon - lon, 2));

            if (distance < minDistance) {
                minDistance = distance;
                nearest = district;
            }
        });

        return `${nearest.sido} ${nearest.sigungu} ${nearest.dong}`;
    };

    // 검색어 변경 (실시간 검색)
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);

        if (value.trim() === '') {
            setSearchResults([]);
            return;
        }

        // korea_districts.json에서 검색
        const districts = districtsData as District[];
        const filtered = districts.filter((district) => {
            const fullName = `${district.sido} ${district.sigungu} ${district.dong}`;
            return (
                district.sido.includes(value) ||
                district.sigungu.includes(value) ||
                district.dong.includes(value) ||
                fullName.includes(value)
            );
        });

        setSearchResults(filtered.slice(0, 10)); // 최대 10개
    };

    // 검색 결과 클릭 (즐겨찾기 추가)
    const handleSearchResultClick = (district: District) => {
        const fullName = `${district.sido} ${district.sigungu} ${district.dong}`;
        const districtId = `${district.lat}-${district.lon}`;

        // 이미 즐겨찾기에 있는지 확인
        const exists = favorites.some((f) => f.id === districtId);

        if (exists) {
            alert('이미 즐겨찾기에 추가된 지역입니다');
            return;
        }

        // 최대 6개 체크
        if (favorites.length >= 6) {
            alert('즐겨찾기는 최대 6개까지 추가할 수 있습니다');
            return;
        }

        // 즐겨찾기 추가
        const newFavorite: Favorite = {
            id: districtId,
            name: fullName,
            displayName: fullName,
            lat: district.lat,
            lon: district.lon,
        };

        const updated = [...favorites, newFavorite];
        setFavorites(updated);
        localStorage.setItem('favorites', JSON.stringify(updated));

        // 검색창 초기화
        setSearchQuery('');
        setSearchResults([]);

        alert('즐겨찾기에 추가되었습니다!');
    };

    // 모달 열기
    const handleOpenModal = (favoriteId: string) => {
        const favorite = favorites.find((f) => f.id === favoriteId);
        if (favorite) {
            setEditingFavorite(favoriteId);
            setAliasInput(favorite.displayName);
            setIsModalOpen(true);
        }
    };

    // 모달 닫기
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingFavorite(null);
        setAliasInput('');
    };

    // 별칭 저장
    const handleSaveAlias = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingFavorite) {
            const updated = favorites.map((f) =>
                f.id === editingFavorite ? { ...f, displayName: aliasInput || f.name } : f,
            );
            setFavorites(updated);
            localStorage.setItem('favorites', JSON.stringify(updated));
            handleCloseModal();
        }
    };

    // 즐겨찾기 삭제
    const handleRemoveFavorite = (favoriteId: string) => {
        if (confirm('삭제하시겠습니까?')) {
            const updated = favorites.filter((f) => f.id !== favoriteId);
            setFavorites(updated);
            localStorage.setItem('favorites', JSON.stringify(updated));
        }
    };

    // 즐겨찾기 클릭
    const handleFavoriteClick = (lat: number, lon: number, name: string) => {
        navigate(`/detail/${lat}/${lon}/${encodeURIComponent(name)}`);
    };

    // 로딩 중
    if (locationLoading || weatherLoading || hourlyLoading) {
        return (
            <div className="min-h-screen bg-linear-to-b from-[#94D0DF] to-[#0094AD] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white text-xl">날씨 정보를 불러오는 중...</p>
                </div>
            </div>
        );
    }

    // 위치 에러
    if (locationError) {
        return (
            <div className="min-h-screen bg-linear-to-b from-[#94D0DF] to-[#0094AD] flex items-center justify-center px-4">
                <div className="text-center">
                    <p className="text-white text-2xl font-bold mb-4">{locationError}</p>
                    <p className="text-white/70 text-sm mb-6">브라우저 설정에서 위치 권한을 허용해주세요</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        다시 시도
                    </button>
                </div>
            </div>
        );
    }

    // 날씨 에러
    if (weatherError) {
        return (
            <div className="min-h-screen bg-linear-to-b from-[#94D0DF] to-[#0094AD] flex items-center justify-center px-4">
                <div className="text-center">
                    <p className="text-white text-2xl font-bold mb-4">해당 장소의 정보가 제공되지 않습니다</p>
                    <p className="text-white/70 text-sm mb-6">API 오류가 발생했거나 지원되지 않는 지역입니다</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        다시 시도
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main>
            {/* 히어로 섹션 */}
            <section className="bg-linear-to-b from-[#94D0DF] to-[#0094AD] text-center w-full min-h-screen">
                <div className="max-w-170 mx-auto py-10">
                    {/* 현재 위치 */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <MapPinIcon className="w-4 h-4 text-white" />
                        <strong className="text-white text-lg font-medium">
                            {location ? findNearestDistrict(location.lat, location.lon) : '위치 확인 중...'}
                        </strong>
                    </div>

                    {/* 현재 날씨 */}
                    {currentWeather && (
                        <article>
                            <WeatherDisplay
                                variant="plain"
                                temperature={currentWeather.main.temp}
                                description={currentWeather.weather[0].description}
                                maxTemp={currentWeather.main.temp_max}
                                minTemp={currentWeather.main.temp_min}
                                iconUrl={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                            />
                        </article>
                    )}

                    {/* 시간별 예보 */}
                    {hourlyWeather && (
                        <div>
                            <h2 className="text-white text-lg font-semibold mb-4 px-1">시간별 예보</h2>
                            <div className="w-full overflow-x-auto pb-2">
                                <ul className="flex gap-3 min-w-max px-1">
                                    {hourlyWeather.list.slice(0, 10).map((hour, idx) => {
                                        const date = new Date(hour.dt * 1000);
                                        const timeStr = `${date.getHours()}:00`;

                                        return (
                                            <HourlyItem
                                                key={idx}
                                                time={timeStr}
                                                temperature={hour.main.temp}
                                                iconUrl={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                                            />
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* 검색 섹션 */}
            <section>
                <div className="max-w-6xl mx-auto px-4 py-12 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">지역 검색</h2>
                    <div className="relative max-w-2xl mx-auto">
                        {/* 검색 입력 */}
                        <div>
                            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="지역 검색 (시, 구, 동)"
                                className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0094AD] focus:border-transparent transition-all"
                            />
                        </div>

                        {/* 검색 결과 */}
                        {searchResults.length > 0 && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 max-h-75 overflow-y-auto z-10">
                                {searchResults.map((district, idx) => (
                                    <SearchResultItem
                                        key={idx}
                                        location={`${district.sido} ${district.sigungu} ${district.dong}`}
                                        onClick={() => handleSearchResultClick(district)}
                                    />
                                ))}
                            </div>
                        )}

                        {/* 검색 결과 없을 때 */}
                        {searchQuery && searchResults.length === 0 && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-6 z-10">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-3">
                                        <MagnifyingGlassIcon className="text-gray-400 w-4 h-4" />
                                    </div>
                                    <p className="text-gray-900 font-medium mb-1">검색 결과가 없습니다</p>
                                    <p className="text-gray-500 text-sm">다른 지역명을 입력해주세요</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 즐겨찾기 섹션 */}
            <section>
                <div className="max-w-6xl mx-auto px-4 py-12 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">즐겨찾기</h2>

                    {favorites.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                                <HeartSolidIcon className="text-gray-400 w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">즐겨찾기가 없습니다</h3>
                            <p className="text-gray-500">검색을 통해 지역을 즐겨찾기에 추가해보세요</p>
                        </div>
                    ) : (
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {favorites.map((fav) => (
                                <FavoriteCard
                                    key={fav.id}
                                    displayName={fav.displayName}
                                    location={fav.name}
                                    temperature={currentWeather?.main.temp || 0}
                                    description={currentWeather?.weather[0].description || ''}
                                    minTemp={currentWeather?.main.temp_min || 0}
                                    maxTemp={currentWeather?.main.temp_max || 0}
                                    iconUrl={
                                        currentWeather
                                            ? `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
                                            : ''
                                    }
                                    onEdit={() => handleOpenModal(fav.id)}
                                    onDelete={() => handleRemoveFavorite(fav.id)}
                                    onClick={() => handleFavoriteClick(fav.lat, fav.lon, fav.displayName)}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            {/* 모달 */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">별칭 수정</h2>

                <form onSubmit={handleSaveAlias}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">지역</label>
                        <div className="text-base text-gray-900 bg-gray-50 rounded-lg px-4 py-3">
                            {favorites.find((f) => f.id === editingFavorite)?.name}
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="alias" className="block text-sm font-medium text-gray-700 mb-2">
                            별칭 (선택)
                        </label>
                        <input
                            id="alias"
                            type="text"
                            value={aliasInput}
                            onChange={(e) => setAliasInput(e.target.value)}
                            placeholder="예: 우리집, 회사"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0094AD] focus:border-transparent transition-all"
                            maxLength={20}
                        />
                        <p className="text-xs text-gray-500 mt-2">별칭을 입력하지 않으면 지역명이 표시됩니다</p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={handleCloseModal}
                            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                        >
                            취소
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-3 bg-[#0094AD] text-white rounded-lg font-medium hover:bg-[#007a91] transition-colors"
                        >
                            저장
                        </button>
                    </div>
                </form>
            </Modal>
        </main>
    );
};
