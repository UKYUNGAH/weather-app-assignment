// 즐겨찾기 타입
export interface Favorite {
    id: string;
    name: string; // 지역명 (예: "인천광역시 남동구 구월3동")
    displayName: string; // 별칭 (예: "우리집")
    lat: number;
    lon: number;
}

// korea_districts.json 타입
export interface District {
    sido: string; // 시/도 (예: "서울특별시")
    sigungu: string; // 시/군/구 (예: "강남구")
    dong: string; // 읍/면/동 (예: "역삼동")
    lat: number; // 위도
    lon: number; // 경도
}
