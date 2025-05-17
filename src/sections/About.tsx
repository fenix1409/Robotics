import { useTranslation } from "react-i18next"

const About = () => {
    const data = [
        { id: 1, title: "300+", students: "Довольных студентов" },
        { id: 2, title: "25+", students: "Преподавателей" },
        { id: 3, title: "60+", students: "групп" },
    ]
    const { t } = useTranslation()
    return (
        <section className="container">
            <div className="flex items-center justify-center gap-[43px] flex-wrap max-sm:gap-[10px]">
                {data.map(item => (
                    <div className="py-[19px] px-[47px] bg-[#F0D625] rounded-b-[30px] w-[398px] h-[275px] flex items-center flex-col max-sm:w-[195px] max-sm:h-[110px] max-sm:px-[51px] max-sm:py-[24px] max-sm:rounded-t-[30px] shadow-[0_5px_250px_30px_rgba(255,224,0,0.4)]" key={item.id}>
                        <h2 className="text-[120px] leading-[100%] font-extrabold max-sm:text-[20px]">{t(item.title)}</h2>
                        <span className="text-[40px] leading-[42px] font-bold max-sm:text-[12px] max-sm:leading-[15px] max-sm:font-semibold">{t(item.students)}</span>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default About