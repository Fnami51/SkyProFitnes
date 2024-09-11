import Button from '../components/Button';
import headerLogo from '/logo.png';

interface HeaderProps {
  onLoginClick: () => void;
}

function Header({ onLoginClick }: HeaderProps) {
  const name: string = 'Sergei' // Для примера, потом брать из контекста
  const url_img: string = ''
  const forTest = true

  return (
    <header className="flex justify-between mt-[50px]">
      <div className='flex flex-col gap-[15px]'>
        <img src={headerLogo} className="w-[220px] h-[35px]" alt="logo" />
        <p className="font-roboto text-[18px] font-normal leading-[19.8px] text-left text-gray mobile:hidden">
          Онлайн-тренировки для занятий дома
        </p>
      </div>
      <div className='flex justify-end items-center w-[200px]'>
        {forTest ? (
          <Button onClick={onLoginClick} variant="primary" className="w-[103px] h-[52px]">
            Войти
          </Button>
        ) : (
          <div className='flex items-center h-[50px] gap-[14px]'>
            <img src={url_img !== "" ? url_img : '/images/profile_no-img.png'} className="w-[46px] h-[46px] rounded-[50px] p-[4px]" />
            <p className="text-[24px] font-regular leading-[26.4px] text-right font-roboto">{name}</p>
            <button>
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308" stroke="black" stroke-width="2" />
              </svg>
            </button>
          </div>
        )}

      </div>

    </header>
  )
}

export default Header