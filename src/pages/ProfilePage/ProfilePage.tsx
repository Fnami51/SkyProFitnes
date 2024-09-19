import MyCourseCard from "../../components/Cards/MyCourseCard"
import Profile from "./Profile"

function ProfilePage() {

    return (
		<>
			<main className='mt-[60px] mb-[60px]'>
				<h1 className='text-[40px] font-medium leading-[44px] text-left font-roboto mobile:text-[24px] mobile:leading-[26.4px]'>
					Профиль
				</h1>
				<Profile />
				<h1 className='text-[40px] font-medium leading-[44px] text-left font-roboto mobile:text-[24px] mobile:leading-[26.4px]'>
					Мои курсы
				</h1>
				<article className='flex flex-wrap gap-[40px] mt-[50px]'>
					<MyCourseCard
						name='Йога'
						day={25}
						time='25-30'
						url_img='/images/yoga_small.png'
						progress={40}
					/>
				</article>
			</main>
		</>
	)
  }
  
  export default ProfilePage
