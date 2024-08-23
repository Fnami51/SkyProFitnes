import CourseCard from "./CourseCard"
import Footer from "./Footer"

function MainPage() {
  
    return (
    <>
        <main className="mt-[60px]">
            <article className='flex gap-[30px]'>
                <h1 className="text-[60px] font-medium leading-[60px] text-left font-roboto">
                    Начните заниматься спортоми улучшите качество жизни
                </h1>
                <div className="h-[120px]">
                    <div className="w-[288px] h-[120px] bg-[url('/speech_bubble.svg')] bg-no-repeat bg-cover pt-[16px] pl-[20px] font-roboto text-[32px] text-left leading-[35.2px]">
                        <p>
                            Измени своё тело за полгода!
                        </p>
                    </div>
                </div>
            </article>
            <article className='flex flex-wrap gap-[40px] mt-[50px]'>
                <CourseCard name="Йога" day={25} time="25-30" url_img="" />
            </article>
        </main>
        <Footer />
    </>
    )
  }
  
  export default MainPage