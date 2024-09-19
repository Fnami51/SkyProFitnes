import { useState } from 'react'
import Modal from '../../components/Modal'
import { useAuth } from '../../hooks/useAuth'  // Измените путь импорта
import { User } from '../../types/interfaces'

function Profile() {
	const { user, logout } = useAuth() as { user: User | null, logout: () => Promise<void> } // Получаем user и logout из контекста
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalType, setModalType] = useState<'newPassword'>('newPassword')

	const handleChangeName = () => {
	}

	const handleChangePassword = () => {
		setModalType('newPassword')
		setIsModalOpen(true)
	}

	const handleLogout = async () => {
		try {
			await logout()
			// Редирект на главную страницу
			window.location.href = '/'
		} catch (error) {
			console.error('Error logging out:', error)
		}
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	return (
		<section className='flex mobile:flex-col mobile:items-center gap-[33px] w-[100%] p-[30px] mt-[40px] mb-[60px] rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)]'>
			<img
				src={user?.photoURL ||  user?.url_img ||'/images/profile_no-img.png'}
				className='w-[197px] h-[197px] rounded-[30px] mobile:w-[141px] mobile:h-[141px]'
			/>
			<div className='flex flex-col gap-[30px] mobile:w-full'>
				<div className='flex'>
					<h2 className='text-left font-roboto text-[32px] font-medium leading-[35.2px]'>
						{user?.displayName || user?.name || user?.email?.split('@')[0]}
					</h2>
					<button 
						className='h-[32px] ml-[15px]' 
						onClick={handleChangeName}
					>
					<svg
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M10 4H8V6H5C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H8V20H10V4ZM8 8V16H5C4.44772 16 4 15.5523 4 15V9C4 8.44772 4.44772 8 5 8H8Z"
							fill="currentColor"
						/>
						<path
							d="M19 16H12V18H19C20.6569 18 22 16.6569 22 15V9C22 7.34315 20.6569 6 19 6H12V8H19C19.5523 8 20 8.44771 20 9V15C20 15.5523 19.5523 16 19 16Z"
							fill="currentColor"
						/>
					</svg>
					</button>
				</div>
				<div className='flex flex-col gap-[10px] text-left font-roboto text-[18px] font-normal leading-[19.8px]'>
					<p>Логин: {user?.email || user?.login}</p>
					<p>Пароль: ********</p>
				</div>
				<div className='flex gap-[10px] mobile:flex-col'>
					<button
						onClick={handleChangePassword}
						className='w-[192px] mobile:w-full h-[52px] rounded-btnRad bg-green'
					>
						<p className='text-black font-roboto text-[18px] font-normal leading-[19.8px]'>
							Изменить пароль
						</p>
					</button>
					<button
						onClick={handleLogout}
						className='w-[192px] mobile:w-full h-[52px] rounded-btnRad bg-white border border-black'
					>
						<p className='text-black font-roboto text-[18px] font-normal leading-[19.8px]'>
							Выйти
						</p>
					</button>
				</div>
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				type={modalType}
				onSwitchType={() => {}} // Этот пропс не используется для смены пароля, но требуется компонентом
			/>
		</section>
	)
}

export default Profile
