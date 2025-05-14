import { ClockIcon, LocationIcon, PhoneICon } from "../assets/Icons"
import Button from "../components/Button"
import FormData from "../components/FormData"
import Map from "../components/Map"

const GetCourse = () => {
    const list = [
        { id: 1, title: "Адрес Орьентир", icon: <PhoneICon /> },
        { id: 2, title: "График работы", icon: <LocationIcon /> },
        { id: 3, title: "Номера телефонов", icon: <ClockIcon /> },
    ]
    return (
        <section className="container mt-[132px] max-sm:mt-[0px] mb-[80px] max-sm:mb-[30px]">
            <h1 className="text-[96px] leading-[100px] font-bold text-[#F0D625] uppercase mb-[80px] w-[1137px] text-center max-sm:text-[24px] max-sm:leading-[25px] max-sm:w-[388px] max-sm:mb-[22px]">получите бесплатный первый урок</h1>
            <div><FormData /></div>
            <div className="flex items-center gap-[60px] max-sm:gap-[10px] mb-[80px] max-sm:mb-[30]">
                <Button title="Филиал Ц4" type="button" extraStyle="!text-[30px] !leading-[100%] font-bold !px-[64px] !py-[19px] max-sm:w-[178px] max-sm:px-[35px] max-sm:py-[13px] shadow-[0_5px_15px_15px_rgba(255,224,0,0.4)] max-sm:!text-[16px]" />
                <Button title=" Филиал Беруни" type="button" extraStyle="!text-[30px] !bg-white !leading-[100%] font-bold !px-[64px] !py-[19px] max-sm:w-[178px] max-sm:px-[35px] max-sm:py-[13px] max-sm:!text-[16px]" />
            </div>
            <div className="flex items-center justify-center gap-[56px] max-sm:gap-[30px] mb-[80px] max-sm:mb-[30px]">
                {list.map(item => (
                    <div key={item.id} className="flex items-center gap-[23px] max-sm:gap-[5px]">
                        <div>{item.icon}</div>
                        <span className="text-[24px] leading-[100%] inline-block text-white max-sm:text-[10px]">{item.title}</span>
                    </div>
                ))}
            </div>
            <Map />
        </section>
    )
}

export default GetCourse