import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import { useCoursesContext } from '../../context/CoursesContext';
import { useAuth } from '../../hooks/useAuth';
import { Course } from '../../types/interfaces';

function CoursePage() {
	const { id } = useParams<{ id: string }>();
	const { user } = useAuth();
	const { getCourse, addCourse } = useCoursesContext(user?.uid || null);
	const [course, setCourse] = useState<Course | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCourse = async () => {
			if (id) {
				const courseData = await getCourse(id);
				setCourse(courseData);
				setLoading(false);
			}
		};
		fetchCourse();
	}, [id, getCourse]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!course) {
		return <div>Course not found</div>;
	}

	const handleAddCourse = async () => {
		if (user && id) {
			try {
				await addCourse(id);
				alert('Course added successfully!');
			} catch (error) {
				console.error('Error adding course:', error);
				alert('Failed to add course. Please try again.');
			}
		} else {
			alert('Please log in to add this course.');
		}
	};

	return (
		<main className='relative mt-[60px]'>
			<div className='mb-[60px] w-full h-[310px] rounded-[30px] bg-[#FFC700] relative overflow-hidden mobile:h-[557px] mobile:mb-[30px]'>
				<h2 className='pt-[40px] ml-[40px] leading-[66px] text-[60px] font-medium text-white flex items-center text-center relative z-10 mobile:hidden'>
					{course.nameRU}
				</h2>
				<img src='/images/yoga.jpg' alt='Йога' className='absolute right-[-250px] bottom-[-140px] h-[220%] object-cover z-0 rounded-[30px] mobile:hidden' />
				<img src='/images/yoga_small.png' alt='Йога_мобил' className='hidden mobile:block absolute z-20 w-full h-auto' />
			</div>

			<section>
				<div className='text-left mb-[60px] mobile:mb-[30px]'>
					<h3 className='text-[40px] font-semibold leading-[44px] text-left mb-[40px] mobile:text-[24px] mobile:mb-[24px]'>
						Подойдет для вас, если:
					</h3>
					<div className='flex justify-between gap-[17px] tablet:flex-wrap tablet:gap-[12px] mobile:flex-col mobile:gap-[10px]'>
						{course.fitting && course.fitting.map((fit, index) => (
							<div key={index} className='flex-grow-[1.2] flex-basis-0 flex items-center p-[20px] text-white rounded-[28px] text-center gap-[25px] bg-gradient-to-r from-[#151720] to-[#1E212E] relative overflow-hidden flex-shrink-0'>
								<span className='w-[43px] h-[101px] font-roboto text-[75px] font-medium leading-[101.25px] text-left text-[#BCEC30]'>
									{index + 1}
								</span>
								<p className='text-left font-roboto text-[24px] font-normal leading-[26.4px] mobile:text-[20px] mobile:leading-[24px]'>
									{fit}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='text-left mb-[102px] mobile:mb-[156px]'>
				<h3 className='text-[40px] font-semibold leading-[44px] mb-[40px] mobile:text-[24px] mobile:mb-[24px]'>
					Направления
				</h3>
				<ul className='bg-[#BCEC30] grid grid-cols-3 rounded-[28px] h-[146px] p-[30px] gap-x-[85px] gap-y-[30px] mobile:grid-cols-1 mobile:h-auto mobile:gap-y-[20px]'>
					{course.directions && course.directions.map((direction, index) => (
						<li key={index} className='flex items-center gap-[8px]'>
							<img src='/images/sparcle.png' alt='Icon' className='w-[26px] h-[26px]' />
							<p className='m-0 font-roboto text-[24px] leading-[26.4px] mobile:text-[18px]'>
								{direction}
							</p>
						</li>
					))}
				</ul>
			</section>

			<section className='relative rounded-[30px] mb-[50px] overflow-hidden bg-white mobile:overflow-visible mobile:flex mobile:justify-center mobile:z-[5]'>
				<div className='relative pl-[40px] pt-[40px] pb-[40px] flex flex-col gap-[28px] z-[2] w-[477px] mobile:w-[343px]'>
					<h3 className='font-roboto text-[60px] font-medium leading-[60px] text-left mobile:text-[32px] mobile:leading-[35.2px]'>
						Начните путь <br />к новому телу
					</h3>
					<ul className='list-disc flex flex-col gap-[10px] pl-[33px] marker:text-[16px]'>
						<li className='font-roboto text-[24px] font-normal leading-[26.4px] text-left text-[#777777] mobile:text-[18px]'>
							проработка всех групп мышц
						</li>
						<li className='font-roboto text-[24px] font-normal leading-[26.4px] text-left text-[#777777] mobile:text-[18px]'>
							тренировка суставов
						</li>
						<li className='font-roboto text-[24px] font-normal leading-[26.4px] text-left text-[#777777] mobile:text-[18px]'>
							улучшение циркуляции крови
						</li>
						<li className='font-roboto text-[24px] font-normal leading-[26.4px] text-left text-[#777777] mobile:text-[18px]'>
							упражнения заряжают бодростью
						</li>
						<li className='font-roboto text-[24px] font-normal leading-[26.4px] text-left text-[#777777] mobile:text-[18px]'>
							помогают противостоять стрессам
						</li>
					</ul>
					<Button
						variant='primary'
						className='w-[437px] h-[52px] mobile:w-[283px] mobile:h-[50px]'
						onClick={handleAddCourse}
					>
						{user ? 'Добавить курс' : 'Войдите, чтобы добавить курс'}
					</Button>
				</div>
				<img src='/images/6094.png' alt='Черный' className='absolute top-[22px] right-[385px] mobile:w-[32.16px] mobile:h-[27.33px] mobile:top-[-183px] mobile:right-[154px] mobile:z-[3]' />
				<img src='/images/6084.png' alt='Салатовый' className='absolute top-[105px] right-[15px] w-[670.18px] h-[440.98px] order-3 mobile:hidden' />
			</section>

			<img src='/images/runner.png' alt='Бегун' className='absolute top-[900px] right-[40px] z-[3] mobile:w-[313.22px] mobile:h-[348.91px] mobile:top-[1410px] mobile:right-[-69px] mobile:z-[1]' />
			<img src='/images/6084.png' alt='Салатовый_2' className='hidden mobile:block absolute mobile:w-[750.93px] mobile:h-[300px] mobile:top-[1530px] mobile:right-[27px]' />

			{/* {course.workouts && course.workouts.length > 0 && (
				<section className="mt-[60px]">
					<h3 className='text-[40px] font-semibold leading-[44px] mb-[40px]'>Тренировки</h3>
					<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{course.workouts.map((workoutId) => (
							<li key={workoutId} className="bg-white rounded-lg shadow-md p-4">
								<Link
									to={`/training/${workoutId}`}
									className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
								>
									Тренировка {workoutId}
								</Link>
							</li>
						))}
					</ul>
				</section>
			)} */}
		</main>
	);
}

export default CoursePage;