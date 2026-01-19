import { useParams, useNavigate } from 'react-router-dom';
import { MapPinIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import WeatherDisplay from '@/shared/ui/WeatherDisplay';
import { useCurrentWeatherQuery, useHourlyWeatherQuery } from '@/shared/hooks/useWeatherQuery';

export const DetailPage = () => {
    const { lat, lon, name } = useParams();
    const navigate = useNavigate();

    // 현재 날씨
    const {
        data: current,
        isLoading: currentLoading,
        error: currentError,
    } = useCurrentWeatherQuery(Number(lat) || 0, Number(lon) || 0, !!(lat && lon));

    // 시간별 날씨
    const {
        data: hourly,
        isLoading: hourlyLoading,
        error: hourlyError,
    } = useHourlyWeatherQuery(Number(lat) || 0, Number(lon) || 0, !!(lat && lon));

    // 로딩 중
    if (currentLoading || hourlyLoading) {
        return (
            <div className="min-h-screen bg-linear-to-b from-[#94D0DF] to-[#0094AD] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white text-xl">날씨 정보를 불러오는 중...</p>
                </div>
            </div>
        );
    }

    // ⚠️ 필수 과제: "해당 장소의 정보가 제공되지 않습니다" UI
    if (currentError || hourlyError) {
        return (
            <div className="min-h-screen bg-linear-to-b from-[#94D0DF] to-[#0094AD] flex items-center justify-center px-4">
                <div className="text-center">
                    <p className="text-white text-2xl font-bold mb-4">해당 장소의 정보가 제공되지 않습니다</p>
                    <p className="text-white/70 text-sm mb-6">API 오류가 발생했거나 지원되지 않는 지역입니다</p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        홈으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-linear-to-b from-[#94D0DF] to-[#0094AD] pb-10">
            {/* 뒤로가기 */}
            <header className="sticky top-0 z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
                <div className="max-w-2xl mx-auto px-4 py-4">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                    >
                        <ArrowLeftIcon className="w-5 h-5" />
                        <span className="font-medium">뒤로</span>
                    </button>
                </div>
            </header>

            {/* 현재 위치 */}
            <section>
                <div className="flex justify-center items-center gap-2 max-w-2xl mx-auto px-4 py-8 pb-16">
                    <MapPinIcon className="text-white/90 w-6 h-6" />
                    <strong className="text-white text-xl font-bold">{decodeURIComponent(name || '')}</strong>
                </div>
            </section>

            {/* 현재 날씨 */}
            {current && (
                <section className="px-4">
                    <WeatherDisplay
                        variant="card"
                        temperature={current.main.temp}
                        description={current.weather[0].description}
                        maxTemp={current.main.temp_max}
                        minTemp={current.main.temp_min}
                        iconUrl={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                    />
                </section>
            )}

            {/* 시간별 예보 */}
            {hourly && (
                <section className="px-4">
                    <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 shadow-lg max-w-2xl mx-auto">
                        <h2 className="text-white text-lg font-semibold mb-4">시간별 예보</h2>
                        <ul className="space-y-3">
                            {hourly.list.slice(0, 12).map((item, idx) => {
                                const date = new Date(item.dt * 1000);
                                const hours = date.getHours();
                                const timeStr = `${hours}:00`;

                                return (
                                    <li
                                        key={idx}
                                        className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3"
                                    >
                                        <time className="text-white font-medium w-16">{timeStr}</time>
                                        <div className="flex items-center gap-4 flex-1 justify-center">
                                            <img
                                                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                                alt={item.weather[0].description}
                                                className="w-8 h-8"
                                            />
                                            <span className="text-white/80 text-sm w-16 text-center">
                                                {item.weather[0].description}
                                            </span>
                                        </div>
                                        <p className="text-white text-lg font-semibold w-16 text-right">
                                            {Math.round(item.main.temp)}°
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>
            )}
        </main>
    );
};
