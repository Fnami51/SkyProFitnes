import React from 'react';
import styles from './CoursePage.module.css'

const CoursePage: React.FC = () => {
	return (
		<div className={styles.coursePage}>
			<div className={styles.yogaheader}>
				<h2>Йога</h2>
				<img
					src='/images/yoga.jpg'
					alt='Йога'
					className={styles.yogaheaderImg}
				/>
				<img
					src='/images/yoga_small.png'
					alt='Йога_мобил'
					className={styles.yogaSmall}
				/>
			</div>
			<section className={styles.yogasection}>
				<div className={styles.yogainfo}>
					<h3>Подойдет для вас, если:</h3>
					<div className={styles.yogabenefits}>
						<div className={styles.benefititem}>
							<span>1</span>
							<p>
								Давно хотели
								<br />
								попробовать йогу,
								<br />
								но не решались начать
							</p>
						</div>
						<div className={styles.benefititem}>
							<span>2</span>
							<p>
								Хотите укрепить
								<br />
								позвоночник, избавиться
								<br />
								от болей в спине и суставах
							</p>
						</div>
						<div className={styles.benefititem}>
							<span>3</span>
							<p>
								Ищете активность,
								<br />
								полезную для тела
								<br />и души
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.directions}>
				<h3>Направления</h3>
				<ul>
					<li>
						<img src='/images/sparcle.png' alt='Icon' />
						<p>Йога для новичков</p>
					</li>
					<li>
						<img src='/images/sparcle.png' alt='Icon' />
						<p>Классическая йога</p>
					</li>
					<li>
						<img src='/images/sparcle.png' alt='Icon' />
						<p>Кундалини-йога</p>
					</li>
					<li>
						<img src='/images/sparcle.png' alt='Icon' />
						<p>Йогатерапия</p>
					</li>
					<li>
						<img src='/images/sparcle.png' alt='Icon' />
						<p>Хатха-йога</p>
					</li>
					<li>
						<img src='/images/sparcle.png' alt='Icon' />
						<p>Аштанга-йога</p>
					</li>
				</ul>
			</section>

			<section className={styles.fitnesspromo}>
				<div className={styles.fitnesspromoText}>
					<h3>
						Начните путь
						<br />к новому телу
					</h3>
					<ul>
						<li>Проработка всех групп мышц</li>
						<li>Тренировка суставов</li>
						<li>Улучшение циркуляции крови</li>
						<li>Упражнения заряжают бодростью</li>
						<li>Помогают противостоять стрессам</li>
					</ul>
					<button className={styles.customButton}>
						Войдите, чтобы добавить курс
					</button>
				</div>
				<img
					src='/images/6094.png'
					alt='Черный'
					className={styles.fitnesspromoImage2}
				/>
				<img
					src='/images/6084.png'
					alt='Салатовый'
					className={styles.fitnesspromoImage3}
				/>
			</section>
			<img
				src='/images/runner.png'
				alt='Бегун'
				className={styles.fitnesspromoImage1}
			/>
			<img
				src='/images/6084.png'
				alt='Салатовый_2'
				className={styles.fitnesspromoImage4}
			/>
		</div>
	)
}

export default CoursePage