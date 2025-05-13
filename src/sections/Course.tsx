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
        <section className='course py-[80px]'>
            <h1 className="text-[96px] leading-[100px] font-bold mb-[80px] text-[#F0D625] w-[878px] mx-auto">Авторские кусы от JustRobotics</h1>
                <div className='flex items-center justify-center gap-[58px] flex-wrap'>
                    {data.map(item=> (
                        <div className='w-[551px] px-[51px] pt-[43px] pb-[35px] bg-[#F0D625] rounded-[30px] hover:scale-105 duration-200 shadow-[0_5px_250px_30px_rgba(255,224,0,0.4)]' key={item.id}>
                            <img src={item.image} alt={`${item.image} image`} width={449} height={211} className='rounded-[30px] mb-[21px]'/>
                            <h2 className='text-[40px] leading-[42px] font-bold mb-[114px]'>{item.title}</h2>
                            <button className='w-[261px] py-[7px] px-[20px] text-[20px] leading-[100%] font-semibold text-white bg-black rounded-[50px] cursor-pointer'>Подробнее о кусе </button>
                        </div>
                    ))}
                </div>
        </section>
    )
}

export default Course