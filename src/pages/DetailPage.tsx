import { MapPinIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import WeatherDisplay from '@/shared/ui/WeatherDisplay';

export const DetailPage = () => {
    return (
        <main className=" bg-linear-to-b from-[#94D0DF] to-[#0094AD] pb-10">
            {/* 뒤로가기 */}
            <header className="sticky top-0 z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
                <div className="max-w-2xl mx-auto px-4 py-4">
                    <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                        <ArrowLeftIcon className="text-white w-5 h-5" />
                        <span className="font-medium">뒤로</span>
                    </button>
                </div>
            </header>

            {/* 현재 위치 */}
            <section>
                <div className="flex justify-center items-center gap-2 max-w-2xl mx-auto px-4 py-8 pb-16">
                    <MapPinIcon className="text-white/90 w-6 h-6" />
                    <strong className="text-white text-xl font-bold">서울 강남구 역삼동</strong>
                </div>
            </section>

            {/* 현재 날씨 카드 */}
            <section className="">
                <section>
                    <WeatherDisplay variant="card" temperature={20} description="흐림" maxTemp={28} minTemp={20} />
                </section>
            </section>

            {/* 시간별 예보 */}
            <section className="">
                <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 shadow-lg max-w-2xl mx-auto ">
                    <h2 className="text-white text-lg font-semibold mb-4">시간별 예보</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                            <time className="text-white font-medium w-16">19:00</time>
                            <div className="flex items-center gap-4 flex-1 justify-center">
                                <p className="text-white">{/* 날씨 api에서 이미지 받아오기 */}</p>
                                <span className="text-white/80 text-sm w-16 text-center">맑음</span>
                            </div>
                            <p className="text-white text-lg font-semibold w-16 text-right">9 °</p>
                        </li>
                        <li className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                            <time className="text-white font-medium w-16">19:00</time>
                            <div className="flex items-center gap-4 flex-1 justify-center">
                                <p className="text-white">{/* 날씨 api에서 이미지 받아오기 */}</p>
                                <span className="text-white/80 text-sm w-16 text-center">맑음</span>
                            </div>
                            <p className="text-white text-lg font-semibold w-16 text-right">9 °</p>
                        </li>
                        <li className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                            <time className="text-white font-medium w-16">19:00</time>
                            <div className="flex items-center gap-4 flex-1 justify-center">
                                <p className="text-white">{/* 날씨 api에서 이미지 받아오기 */}</p>
                                <span className="text-white/80 text-sm w-16 text-center">맑음</span>
                            </div>
                            <p className="text-white text-lg font-semibold w-16 text-right">9 °</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
};
