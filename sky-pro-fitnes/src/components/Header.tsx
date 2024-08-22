import headerLogo from '/logo.png'

function Header() {
  
    return (
      <header className="flex justify-between m-[50px]">
        <div className='flex flex-col gap-[15px]'>
            <img src={headerLogo} className="w-[220px] h-[35px]" alt="logo" />
            <p className="font-roboto text-[18px] font-normal leading-[19.8px] text-left text-gray">
                Онлайн-тренировки для занятий дома
            </p>
        </div>
        <div className='flex justify-end items-center w-[200px]'>
            <button className='absolute w-[103px] h-[52px] rounded-btnRad bg-green'>
                <p className='text-black font-roboto text-[18px] font-normal leading-[19.8px]'>Войти</p>
            </button>
        </div>  
      </header>
    )
  }
  
  export default Header