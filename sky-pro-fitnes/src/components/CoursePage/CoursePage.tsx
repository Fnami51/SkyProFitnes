import React from 'react';

const CoursePage: React.FC = () => {
	return (
		<div className='relative'>
			<div className='mb-[60px] w-full h-[310px] rounded-[30px] bg-[#FFC700] relative overflow-hidden mobile:h-[557px] mobile:mb-[30px]'>
				<h2 className='pt-[40px] ml-[40px] leading-[66px] text-[60px] font-medium text-white flex items-center text-center relative z-10 mobile:hidden'>
					Йога
				</h2>
				<img
					src='/images/yoga.jpg'
					alt='Йога'
					className='absolute right-[-250px] bottom-[-140px] h-[220%] object-cover z-0 rounded-[30px] mobile:hidden'
				/>
				<img
					src='/images/yoga_small.png'
					alt='Йога_мобил'
					className='hidden mobile:block absolute z-20 w-full h-auto'
				/>
			</div>
			<section>
				<div className='text-left mb-[60px] mobile:mb-[30px]'>
					<h3 className='text-[40px] font-semibold leading-[44px] text-left mb-[40px] mobile:text-[24px] mobile:mb-[24px]'>
						Подойдет для вас, если:
					</h3>
					<div className='flex justify-between gap-[17px] tablet:flex-wrap tablet:gap-[12px] mobile:flex-col mobile:gap-[10px]'>
						<div className='flex-grow-[1.2] flex-basis-0 flex items-center p-[20px] text-white rounded-[28px] text-center gap-[25px] bg-gradient-to-r from-[#151720] to-[#1E212E] relative overflow-hidden flex-shrink-0'>
							<span className='w-[43px] h-[101px] font-roboto text-[75px] font-medium leading-[101.25px] text-left text-[#BCEC30]'>
								1
							</span>
							<p className='text-left font-roboto text-[24px] font-normal leading-[26.4px] mobile:text-[20px] mobile:leading-[24px]'>
								Давно хотели
								<br />
								попробовать йогу,
								<br />
								но не решались начать
							</p>
						</div>
						<div className='flex-grow-[1.3] flex-basis-0 flex items-center p-[20px] text-white rounded-[28px] text-center gap-[25px] bg-gradient-to-r from-[#151720] to-[#1E212E] relative overflow-hidden flex-shrink-0'>
							<span className='w-[43px] h-[101px] font-roboto text-[75px] font-medium leading-[101.25px] text-left text-[#BCEC30]'>
								2
							</span>
							<p className='text-left font-roboto text-[24px] font-normal leading-[26.4px] mobile:text-[20px] mobile:leading-[24px]'>
								Хотите укрепить
								<br />
								позвоночник, избавиться
								<br />
								от болей в спине и суставах
							</p>
						</div>
						<div className='flex-grow flex-basis-0 flex items-center p-[20px] text-white rounded-[28px] text-center gap-[25px] bg-gradient-to-r from-[#151720] to-[#1E212E] relative overflow-hidden flex-shrink-0'>
							<span className='w-[43px] h-[101px] font-roboto text-[75px] font-medium leading-[101.25px] text-left text-[#BCEC30]'>
								3
							</span>
							<p className='text-left font-roboto text-[24px] font-normal leading-[26.4px] mobile:text-[20px] mobile:leading-[24px]'>
								Ищете активность,
								<br />
								полезную для тела
								<br />и души
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='text-left mb-[102px] mobile:mb-[156px]'>
				<h3 className='text-[40px] font-semibold leading-[44px] mb-[40px] mobile:text-[24px] mobile:mb-[24px]'>
					Направления
				</h3>
				<ul className='bg-[#BCEC30] grid grid-cols-3 rounded-[28px] h-[146px] p-[30px] gap-x-[85px] gap-y-[30px] mobile:grid-cols-1 mobile:h-auto mobile:gap-y-[20px]'>
					<li className='flex items-center gap-[8px]'>
						<img
							src='/images/sparcle.png'
							alt='Icon'
							className='w-[26px] h-[26px]'
						/>
						<p className='m-0 font-roboto text-[24px] leading-[26.4px] mobile:text-[18px]'>
							Йога для новичков
						</p>
					</li>
					<li className='flex items-center gap-[8px]'>
						<img
							src='/images/sparcle.png'
							alt='Icon'
							className='w-[26px] h-[26px]'
						/>
						<p className='m-0 font-roboto text-[24px] leading-[26.4px] mobile:text-[18px]'>
							Классическая йога
						</p>
					</li>
					<li className='flex items-center gap-[8px]'>
						<img
							src='/images/sparcle.png'
							alt='Icon'
							className='w-[26px] h-[26px]'
						/>
						<p className='m-0 font-roboto text-[24px] leading-[26.4px] mobile:text-[18px]'>
							Кундалини-йога
						</p>
					</li>
					<li className='flex items-center gap-[8px]'>
						<img
							src='/images/sparcle.png'
							alt='Icon'
							className='w-[26px] h-[26px]'
						/>
						<p className='m-0 font-roboto text-[24px] leading-[26.4px] mobile:text-[18px]'>
							Йогатерапия
						</p>
					</li>
					<li className='flex items-center gap-[8px]'>
						<img
							src='/images/sparcle.png'
							alt='Icon'
							className='w-[26px] h-[26px]'
						/>
						<p className='m-0 font-roboto text-[24px] leading-[26.4px] mobile:text-[18px]'>
							Хатха-йога
						</p>
					</li>
					<li className='flex items-center gap-[8px]'>
						<img
							src='/images/sparcle.png'
							alt='Icon'
							className='w-[26px] h-[26px]'
						/>
						<p className='m-0 font-roboto text-[24px] leading-[26.4px] mobile:text-[18px]'>
							Аштанга-йога
						</p>
					</li>
				</ul>
			</section>
			<section className='relative rounded-[30px] mb-[50px] overflow-hidden bg-white mobile:overflow-visible mobile:flex mobile:justify-center mobile:z-[5]'>
				<div className='relative pl-[40px] pt-[40px] pb-[40px] flex flex-col gap-[28px] z-[2] w-[477px] mobile:w-[343px]'>
					<h3 className='font-roboto text-[60px] font-medium leading-[60px] text-left mobile:text-[32px] mobile:leading-[35.2px]'>
						Начните путь
						<br />к новому телу
					</h3>
					<ul className='list-disc flex flex-col gap-[10px] pl-[35px] marker:text-[16px]'>
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
					<button className='bg-[#BCEC30] text-black font-roboto text-[18px] font-normal leading-[17.6px] text-center w-[437px] h-[52px] rounded-[46px] px-[26px] py-[16px] transition-all duration-300 ease-in-out mobile:w-[290px] mobile:h-[50px] mobile:text-[16px]'>
						Войдите, чтобы добавить курс
					</button>
				</div>
				<img
					src='/images/6094.png'
					alt='Черный'
					className='absolute top-[22px] right-[385px] mobile:w-[32.16px] mobile:h-[27.33px] mobile:top-[-183px] mobile:right-[154px] mobile:z-[3]'
				/>
				<img
					src='/images/6084.png'
					alt='Салатовый'
					className='absolute top-[105px] right-[15px] w-[670.18px] h-[440.98px] order-3 mobile:hidden'
				/>
			</section>
			<img
				src='/images/runner.png'
				alt='Бегун'
				className='absolute top-[900px] right-[40px] z-[3] mobile:w-[313.22px] mobile:h-[348.91px] mobile:top-[1410px] mobile:right-[-69px] mobile:z-[1]'
			/>
			<img
				src='/images/6084.png'
				alt='Салатовый_2'
				className='hidden mobile:block absolute mobile:w-[750.93px] mobile:h-[300px] mobile:top-[1530px] mobile:right-[27px]'
			/>
		</div>
	)
}

export default CoursePage
