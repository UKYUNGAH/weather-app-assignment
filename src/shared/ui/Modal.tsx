import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
    isOpen: boolean; // 열림/닫힘 상태
    onClose: () => void; // 닫기 함수
    children: React.ReactNode; // 모달 안 내용
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    // 모달 닫혀있으면 아무것도 안 보여줌
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
                onClick={(e) => e.stopPropagation()} // 모달 안 클릭은 닫기 안 함
            >
                {/* 닫기 버튼 */}
                <div className="flex items-center justify-between mb-6">
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors ml-auto">
                        <XMarkIcon className="w-5 h-5" />
                    </button>
                </div>

                {/* 모달 내용 */}
                {children}
            </div>
        </div>
    );
}
