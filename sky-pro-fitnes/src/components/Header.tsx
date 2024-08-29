// import React from 'react';
import Button from './Button'; // Импортируем наш компонент Button
import headerLogo from '/logo.png';

interface HeaderProps {
  onLoginClick: () => void; // Добавляем проп для обработки клика по кнопке входа
}
function Header({ onLoginClick }: HeaderProps) {
  
    return (
      <header className="flex justify-between m-[50px]">
        <div className='flex flex-col gap-[15px]'>
            <img src={headerLogo} className="w-[220px] h-[35px]" alt="logo" />
            <p className="font-roboto text-[18px] font-normal leading-[19.8px] text-left text-gray">
                Онлайн-тренировки для занятий дома
            </p>
        </div>
        <div className='flex justify-end items-center w-[200px]'>
        <Button onClick={onLoginClick} variant="primary" className="w-[103px] h-[52px]">
          Войти
        </Button>
        </div>  
      </header>
    )
  }
  
  export default Header