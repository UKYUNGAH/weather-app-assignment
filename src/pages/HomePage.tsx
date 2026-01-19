import { MapPinIcon, MagnifyingGlassIcon, PencilIcon, HeartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import WeatherDisplay from '@/shared/ui/WeatherDisplay';

export const HomePage = () => {
    return (
        <main className="">
            {/* hiro */}
            <section className=" bg-linear-to-b from-[#94D0DF] to-[#0094AD] text-center w-full min-h-screen">
                <div className="max-w-170 mx-auto py-10">
                    {/* 현재위치 */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <MapPinIcon className="w-4 h-4 text-white" />
                        <strong className="text-white text-lg font-medium">서울 강남구 역삼동</strong>
                    </div>

                    {/* 현재 날씨 정보 */}
                    <article className="">
                        <WeatherDisplay variant="plain" temperature={20} description="흐림" maxTemp={28} minTemp={20} />
                    </article>

                    {/* 시간별 예보 */}
                    <div className="">
                        <h2 className="text-white text-lg font-semibold mb-4 px-1">시간별 예보</h2>
                        <div className="w-full overflow-x-auto pb-2">
                            <ul className="flex gap-3 min-w-max px-1">
                                <li className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-20">
                                    <time className="text-white/90 text-sm font-medium" dateTime="19:00">
                                        19:00
                                    </time>
                                    <div className="text-white">{/* api 제공 이미지 */}</div>
                                    <p className="text-white text-base font-semibold">22 °</p>
                                </li>
                                <li className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-20">
                                    <time className="text-white/90 text-sm font-medium" dateTime="19:00">
                                        19:00
                                    </time>
                                    <div className="text-white">{/* api 제공 이미지 */}</div>
                                    <p className="text-white text-base font-semibold">22 °</p>
                                </li>
                                <li className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-20">
                                    <time className="text-white/90 text-sm font-medium" dateTime="19:00">
                                        19:00
                                    </time>
                                    <div className="text-white">{/* api 제공 이미지 */}</div>
                                    <p className="text-white text-base font-semibold">22 °</p>
                                </li>
                                <li className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-20">
                                    <time className="text-white/90 text-sm font-medium" dateTime="19:00">
                                        19:00
                                    </time>
                                    <div className="text-white">{/* api 제공 이미지 */}</div>
                                    <p className="text-white text-base font-semibold">22 °</p>
                                </li>
                                <li className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-20">
                                    <time className="text-white/90 text-sm font-medium" dateTime="19:00">
                                        19:00
                                    </time>
                                    <div className="text-white">{/* api 제공 이미지 */}</div>
                                    <p className="text-white text-base font-semibold">22 °</p>
                                </li>
                                <li className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-20">
                                    <time className="text-white/90 text-sm font-medium" dateTime="19:00">
                                        19:00
                                    </time>
                                    <div className="text-white">{/* api 제공 이미지 */}</div>
                                    <p className="text-white text-base font-semibold">22 °</p>
                                </li>
                                <li className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-20">
                                    <time className="text-white/90 text-sm font-medium" dateTime="19:00">
                                        19:00
                                    </time>
                                    <div className="text-white">{/* api 제공 이미지 */}</div>
                                    <p className="text-white text-base font-semibold">22 °</p>
                                </li>
                                <li className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-20">
                                    <time className="text-white/90 text-sm font-medium" dateTime="19:00">
                                        19:00
                                    </time>
                                    <div className="text-white">{/* api 제공 이미지 */}</div>
                                    <p className="text-white text-base font-semibold">22 °</p>
                                </li>
                                <li className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-20">
                                    <time className="text-white/90 text-sm font-medium" dateTime="19:00">
                                        19:00
                                    </time>
                                    <div className="text-white">{/* api 제공 이미지 */}</div>
                                    <p className="text-white text-base font-semibold">22 °</p>
                                </li>
                                <li className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-20">
                                    <time className="text-white/90 text-sm font-medium" dateTime="19:00">
                                        19:00
                                    </time>
                                    <div className="text-white">{/* api 제공 이미지 */}</div>
                                    <p className="text-white text-base font-semibold">22 °</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 검색 */}
            <section className="">
                <div className="max-w-6xl mx-auto px-4 py-12  border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">지역 검색</h2>
                    <div className="relative max-w-2xl mx-auto">
                        {/* 검색 인풋 */}
                        <div className="">
                            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="지역 검색 (시, 구, 동)"
                                className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0094AD] focus:border-transparent transition-all"
                            />
                        </div>

                        {/* 검색결과 - 지역 뜰 때 */}
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 max-h-75 overflow-y-auto z-1">
                            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0 first:rounded-t-xl last:rounded-b-xl">
                                <div className="font-medium text-gray-900">인천 남동구 구월3동</div>
                            </button>
                        </div>

                        {/* 검색결과 - 없을 때 */}
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-6 z-1">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-3">
                                    <MagnifyingGlassIcon className="text-gray-400  w-4 h-4" />
                                </div>
                                <p className="text-gray-900 font-medium mb-1">검색 결과가 없습니다</p>
                                <p className="text-gray-500 text-sm">다른 지역명을 입력해주세요</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 즐겨찾기 */}
            <section>
                <div className="max-w-6xl mx-auto px-4 py-12  border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">즐겨찾기</h2>

                    {/* 카드 */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <li className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-5 relative group cursor-pointer ">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 text-lg mb-1">우리집</h3>
                                    <p className="text-sm text-gray-500">인천 남동구 구월3동</p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        className="text-gray-400 hover:text-[#0094AD] transition-colors p-1"
                                        title="별칭 수정"
                                    >
                                        <PencilIcon className="text-gray-400  w-4 h-4" />
                                    </button>
                                    <button
                                        className="text-gray-400 hover:text-red-500 transition-colors p-1 "
                                        title="즐겨찾기 제거"
                                    >
                                        <HeartIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="text-[#0094AD]" />
                                    <div>
                                        <div className="text-3xl font-bold text-gray-900">20°</div>
                                        <div className="text-sm text-gray-500 mt-1">비</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-500">최고/최저</div>
                                    <div className="text-base font-semibold text-gray-700">26° / 20°</div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    {/* 즐겨찾기 없을 때 */}
                    <div className="text-center py-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                            <HeartSolidIcon className="text-gray-400 w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">즐겨찾기가 없습니다</h3>
                        <p className="text-gray-500">검색을 통해 지역을 즐겨찾기에 추가해보세요</p>
                    </div>
                </div>
            </section>

            {/* 모달 */}
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 hidden">
                <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">별칭 수정</h2>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <XMarkIcon className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>

                    <form>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">지역</label>
                            <div className="text-base text-gray-900 bg-gray-50 rounded-lg px-4 py-3">인천광역시</div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="alias" className="block text-sm font-medium text-gray-700 mb-2">
                                별칭 (선택)
                            </label>
                            <input
                                id="alias"
                                type="text"
                                placeholder="예: 우리집, 회사"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0094AD] focus:border-transparent transition-all"
                                maxLength={20}
                            />
                            <p className="text-xs text-gray-500 mt-2">별칭을 입력하지 않으면 지역명이 표시됩니다</p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                type="button"
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
                </div>
            </div>
        </main>
    );
};
