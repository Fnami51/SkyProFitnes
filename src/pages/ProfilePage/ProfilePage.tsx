import MyCourseCard from "../../components/Cards/MyCourseCard"
import Profil from "./Profile"

function ProfilPage() {
    
    return (
    <>
        <main className="mt-[60px] mb-[60px]">
            <h1 className="text-[40px] font-medium leading-[44px] text-left font-roboto mobile:text-[24px] mobile:leading-[26.4px]">
                Профиль
            </h1>
            <Profil name="Sergei" login="serg228" password="qwertyu" url_img=""/>
            <h1 className="text-[40px] font-medium leading-[44px] text-left font-roboto mobile:text-[24px] mobile:leading-[26.4px]">
                Мои курсы
            </h1>
            <article className='flex flex-wrap gap-[40px] mt-[50px]'>
                <MyCourseCard name="Йога" day={25} time="25-30" url_img="/images/yoga_small.png" progress={40} />
            </article>
        </main>
    </>
    )
  }
  
  export default ProfilPage