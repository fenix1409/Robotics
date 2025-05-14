import React from 'react'

interface HeaderModalProps {
    isOpen: boolean
    onClose: () => void
}

const HeaderModal: React.FC<HeaderModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-opacity-50 z-50 flex justify-end duration-300 backdrop-brightness-50" onClick={onClose}>
            <div className="bg-white w-3/4 h-full p-6" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl" aria-label="Close menu">
                    &times;
                </button>
                <nav className="mt-12 space-y-6">
                    <a href="#" className="block text-xl hover:text-[#F0D625]">Главная</a>
                    <a href="#" className="block text-xl hover:text-[#F0D625]">О нас</a>
                    <div className="relative">
                        <a href="#" className="block text-xl hover:text-[#F0D625]">Курсы ▼</a>
                    </div>
                    <a href="#" className="block text-xl hover:text-[#F0D625]">Контакты</a>
                    <button className="bg-[#F0D625] text-black px-6 py-2 rounded-full text-xl hover:bg-opacity-90">
                        ПОЗВОНИТЬ
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default HeaderModal