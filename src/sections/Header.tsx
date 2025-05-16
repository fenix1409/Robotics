import { useState } from 'react'
import Logo from '../../public/logo.svg'
import HeaderModal from '../components/HeaderModal'
import { HamburgerBtn } from '../assets/Icons'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t, i18n } = useTranslation()
    const [language, setLanguage] = useState('RU')
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const list = [
        { id: 1, title: "Главная", path: "#" },
        { id: 2, title: "О нас", path: "#" },
        { id: 3, title: "Курсы", path: "#", options: ["Робототехника", "Английский", "Живопись для детей", "Живопись для взрослых"] },
        { id: 4, title: "Контакты", path: "#" },
    ]

    return (
        <header className='container bg-[#000000] border-[#FFE000] border-b-[10px] border-t-[10px]'>
            <div className="py-[23px] flex items-center justify-between">
                <a href="/">
                    <img src={Logo} alt="Logo svg" width={111} height={111} />
                </a>
                <div className='flex items-center gap-[47px] max-sm:hidden'>
                    <nav className='flex items-center gap-[50px]'>
                        {list.map(item => (
                            item.id === 3 ? (
                                <div key={item.id} className="relative group">
                                    <button className='text-[24px] leading-[100%] text-white border-[1px] border-white rounded-[25px] py-[8px] px-[20px] hover:border-[#F0D625] hover:text-[#F0D625] flex items-center gap-1'>
                                        {t(item.title)} ▼
                                    </button>
                                    <div className="absolute hidden group-hover:block bg-black border border-[#FFE000] min-w-[200px] z-10">
                                        {item.options?.map((option, index) => (
                                            <a key={index} href="#" className="block px-4 py-2 text-white hover:bg-[#FFE000] hover:text-black text-[18px]">
                                                {t(option)}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a href={item.path} className='text-[24px] leading-[100%] text-white hover:text-[#F0D625]' key={item.id}>
                                    {t(item.title)}
                                </a>
                            )
                        ))}
                    </nav>
                    <button className='w-[248px] py-[16px] px-[54px] text-[24px] leading-[100%] font-bold bg-[#ffe000] rounded-[7px] hover:shadow-[0_10px_25px_-1px_rgba(255,224,0,0.4)] active:shadow-[0_5px_10px_-1px_rgba(255,224,0,0.3)] transition-all duration-200 transform'>
                        {t('Позвонить')}
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex gap-2 bg-black p-1 rounded-[10px] border border-[#FFE000]">
                        <button
                            className={`w-[60px] h-[36px] text-[21px] leading-[100%] font-medium rounded-[10px] transition-all duration-200 ${language === 'RU' ? 'bg-[#FFE000] text-black' : 'bg-transparent text-[#FFE000]'}`}
                            onClick={() => {
                                setLanguage('RU')
                                i18n.changeLanguage('ru')
                                localStorage.setItem('lang', 'ru')
                            }}>RU</button>
                        <button
                            className={`w-[60px] h-[36px] text-[21px] leading-[100%] font-medium rounded-[10px] transition-all duration-200 ${language === 'UZ' ? 'bg-[#FFE000] text-black' : 'bg-transparent text-[#FFE000]'}`}
                            onClick={() => {
                                setLanguage('UZ')
                                i18n.changeLanguage('uz')
                                localStorage.setItem('lang', 'uz')
                            }}>UZ</button>
                    </div>
                    <button className='max-sm:block' onClick={() => setIsMenuOpen(true)}>
                        <HamburgerBtn />
                    </button>
                </div>
            </div>
            <HeaderModal
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </header>
    )
}

export default Header