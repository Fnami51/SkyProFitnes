import { useState, useRef } from 'react';
import Button from '../components/Button';
import headerLogo from '/logo.png';
import { useAuth } from '../hooks/useAuth';
import UserModal from './UserModal';

interface HeaderProps {
  onLoginClick: () => void;
}

function Header({ onLoginClick }: HeaderProps) {
  const { user } = useAuth();
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const userRef = useRef<HTMLDivElement>(null);

  const handleUserClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Предотвращаем распространение события
    setUserModalOpen(!isUserModalOpen); // Переключаем состояние
  };

  // function Header({ onLoginClick }: HeaderProps) {
  //   const name: string = 'Sergei' // Для примера, потом брать из контекста
  //   const url_img: string = '' // Для примера, потом брать из контекста
  //   const forTest = true // Для примера, потом брать из контекста

  return (
    <header className="flex justify-between mt-[50px] items-center">
      <div className='flex flex-col gap-[15px]'>
        <img src={headerLogo} className="w-[220px] h-[35px]" alt="logo" />
        <p className="font-roboto text-[18px] font-normal leading-[19.8px] text-left text-gray mobile:hidden">
          Онлайн-тренировки для занятий дома
        </p>
      </div>
      <div className='relative'>
        {user ? (
          <div
            ref={userRef}
            onClick={handleUserClick}
            className="flex items-center cursor-pointer gap-5"
          >
            <img
              src={user.photoURL || '/images/profile_no-img.png'}
              className="w-[41.67px] h-[41.67px] p-1 rounded-full bg-[#D9D9D9] object-cover"
              alt="user avatar"
            />
            <p className="font-roboto text-[24px] font-normal leading-[110%] text-black">
              {user.displayName || user.email?.split('@')[0]}
            </p>
            <svg className="w-[13px] h-[13px]" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 1L7 6L13 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ) : (
          <Button onClick={onLoginClick} variant="primary" className="w-[103px] h-[52px]">Войти</Button>
        )}
        {user && isUserModalOpen && (
          <UserModal
            isOpen={isUserModalOpen}
            onClose={() => setUserModalOpen(false)}
            userRef={userRef}
          />
        )}
      </div>
    </header>
  );
}

export default Header;