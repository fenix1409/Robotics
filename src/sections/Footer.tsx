import { useTranslation } from "react-i18next"
import { Instagram, Logo, Telegram, YouTube } from "../assets/Icons"

const Footer = () => {
    const { t } = useTranslation()
    const webs = [
        { id: 1, icon: <Telegram />, link: "https://t.me/Bobur_Oripov" },
        { id: 2, icon: <YouTube />, link: "https://www.youtube.com/" },
        { id: 3, icon: <Instagram />, link: "https://www.instagram.com/" }
    ]
    const courses = [
        { id: 1, title: "Робототехника" },
        { id: 2, title: "Английский для взрослых" },
        { id: 3, title: "Английский для детей" },
        { id: 4, title: "Шахмат" },
        { id: 5, title: "Живопись" }
    ]
    const contacts = [
        { id: 1, title: "Телеграм", link: "https://t.me/Bobur_Oripov" },
        { id: 2, title: "Инстаграм", link: "https://www.instagram.com/" },
        { id: 3, title: "Ютюб", link: "https://www.youtube.com/" }
    ]
    return (
        <footer className="container bg-[#FFE000] max-sm:py-[15px] pt-[10px] pb-[10px]">
            <div className="flex gap-[140px] max-sm:gap-[30px] mb-[22px] max-sm:flex-col">
                <div className="max-sm:flex max-sm:items-center max-sm:gap-[20px]">
                    <a href="/" className="mb-[15px] max-sm:mb-[0px]"><Logo /></a>
                    <div className="">
                        <p className="text-[14px] leading-[22px] font-bold mb-[20px] max-sm:mb-[15px] w-[248px]">SLOGAN lLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="flex items-center gap-[14px]">
                            {webs.map(item => (
                                <a key={item.id} href={item.link}>{item.icon}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="space-y-[10px] flex items-start flex-col">
                    <span className="text-[26px] leading-[100%] font-bold">{t('Курсы')}</span>
                    {courses.map(item => (
                        <strong className="text-[20px] leading-[100%]" key={item.id}>{t(item.title)}</strong>
                    ))}
                </div>
                <div className="space-y-[10px] flex items-start flex-col">
                    <span className="text-[26px] leading-[100%] font-bold">{t('Контакты')}</span>
                    {contacts.map(item => (
                        <a href={item.link} className="text-[20px] leading-[100%]" key={item.id}>{t(item.title)}</a>
                    ))}
                </div>
            </div>
            <p className="text-[14px] leading-[100%] font-semibold">Ideallux.com © 2000-2024, All Rights Reserved</p>
        </footer>
    )
}

export default Footer