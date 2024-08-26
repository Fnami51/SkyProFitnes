import MyCourseCard from "../Cards/MyCourseCard"
import Profil from "./Profil"

function ProfilPage() {
    
    return (
    <>
        <main className="mt-[60px]">
            <h1 className="text-[60px] font-medium leading-[60px] text-left font-roboto">
                Профиль
            </h1>
            <Profil name="Sergei" login="serg228" password="qwertyu" url_img=""/>
            <h1 className="text-[60px] font-medium leading-[60px] text-left font-roboto">
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