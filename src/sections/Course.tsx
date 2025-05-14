import Robotecnic from '../assets/images/robotexnik.png'
import Art from '../assets/images/art.png'
import AdultArt from '../assets/images/adult-art.png'
import Enlisg from '../assets/images/english.png'
import Chess from '../assets/images/chess.png'

const Course = () => {
    const data = [
        { id: 1, title: "Робототехника", image: Robotecnic },
        { id: 2, title: "Живопись для детей", image: Art },
        { id: 3, title: "Живопись для взрослых", image: AdultArt },
        { id: 4, title: "Английский язык для детей", image: Enlisg },
        { id: 5, title: "Шахмат", image: Chess },
    ]
    return (
        <section className='course container py-[80px]'>
            <h1 className="text-[96px] leading-[100px] font-bold mb-[80px] text-[#F0D625] w-[878px] mx-auto max-sm:text-[20px] max-sm:leading-[30px] max-sm:mb-[30px] max-sm:w-[398px]">Авторские кусы от JustRobotics</h1>
            <div className='flex flex-wrap items-center justify-center gap-[58px] max-sm:flex-nowrap max-sm:justify-start max-sm:overflow-x-auto max-sm:px-4 max-sm:py-2 max-sm:gap-[15px]'>
                {data.map(item => (
                    <div className='flex-shrink-0 w-[284px] h-[304px] sm:w-[551px] px-4 sm:px-[51px] pt-6 sm:pt-[43px] pb-5 sm:pb-[35px] bg-[#F0D625] rounded-3xl hover:scale-105 duration-200 shadow-[0_5px_25px_30px_rgba(255,224,0,0.4)] max-sm:shadow-none' key={item.id}>
                        <img src={item.image} alt={`${item.image} image`} className='w-full h-auto rounded-3xl mb-5 sm:mb-[21px] sm:!w-[449px] sm:!h-[211px]' />
                        <h2 className='text-xl sm:text-[40px] leading-6 sm:leading-[42px] font-bold mb-8 sm:mb-[114px]'>
                            {item.title}
                        </h2>
                        <button className='max-sm:hidden w-[261px] py-[7px] px-[20px] text-[20px] leading-[100%] font-semibold text-white bg-black rounded-[50px] cursor-pointer sm:float-right'>
                            Подробнее о кусе
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Course