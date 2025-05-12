import { useState } from 'react'
import Logo from '../../public/logo.svg'

const Header = () => {
    const [language, setLanguage] = useState('RU')
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
                                        {item.title} ▼
                                    </button>
                                    <div className="absolute hidden group-hover:block bg-black border border-[#FFE000] min-w-[200px] z-10">
                                        {item.options?.map((option, index) => (
                                            <a key={index} href="#" className="block px-4 py-2 text-white hover:bg-[#FFE000] hover:text-black text-[18px]">
                                                {option}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a href={item.path} className='text-[24px] leading-[100%] text-white hover:text-[#F0D625]' key={item.id}>
                                    {item.title}
                                </a>
                            )
                        ))}
                    </nav>
                    <button className='w-[248px] py-[16px] px-[54px] text-[24px] leading-[100%] font-bold bg-[#ffe000] rounded-[7px] hover:shadow-[0_10px_25px_-1px_rgba(255,224,0,0.4)] active:shadow-[0_5px_10px_-1px_rgba(255,224,0,0.3)] transition-all duration-200 transform'>
                        Позвонить
                    </button>
                </div>
                <div className="flex items-center gap-2">
                        <button 
                            className={`text-[24px] leading-[100%] ${language === 'RU' ? 'text-[#FFE000]' : 'text-white'}`}
                            onClick={() => setLanguage('RU')}
                        >
                            RU
                        </button>
                        <span className="text-[#FFE000]">|</span>
                        <button 
                            className={`text-[24px] leading-[100%] ${language === 'UZ' ? 'text-[#FFE000]' : 'text-white'}`}
                            onClick={() => setLanguage('UZ')}
                        >
                            UZ
                        </button>
                    </div>
            </div>
        </header>
    )
}

export default Header