import Button from "../components/Button"
import Robot from '../assets/images/robot.png'

const Hero = () => {
  return (
    <section className='container hero max-sm:pl-[20px]'>
        <div className="flex items-center gap-[83px] max-sm:gap-[0px] max-sm:mt-[18px]">
            <div className='w-[651px] max-sm:w-[232px] p-[50px] max-sm:p-[15px] bg-white rounded-[30px]'>
                <h1 className='text-[84px] leading-[100%] font-semibold mb-[9px] max-sm:text-[32px] max-sm:leading-[30px] max-sm:font-semibold max-sm:mb-[5px]'>JustRobotics</h1>
                <p className='text-[40px] leading-[42px] font-medium mb-[79px] max-sm:text-[16px] max-sm:leading-[16px] max-sm:font-medium max-sm:mb-[5px]'>твой проводник в мир технологий и искусства</p>
                <span className='text-[20px] leading-[100%] mb-[9px] max-sm:text-[14px] max-sm:leading-[16px] max-sm:mb-[3px]'>получите бесплатное первое занятие</span>
                <Button title="Перейти к курсам" type="button" extraStyle="!bg-black !text-[#FFE000] mt-[6px] max-sm:w-[145px] max-sm:py-[7px] max-sm:px-[5px] max-sm:text-[14px] max-sm:leading-[10px] max-sm:font-bold"/>
            </div>
            <img src={Robot} alt="Robot image" width={777} height={611} className="max-sm:hidden"/>
            <img src={Robot} alt="Robot image" width={182} height={201} className="sm:hidden"/>
        </div>
    </section>
  )
}

export default Hero