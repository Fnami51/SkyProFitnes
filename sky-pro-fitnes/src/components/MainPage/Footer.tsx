function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  
    return (
    <footer className="flex justify-center items-center mt-[34px] mb-[30px]">
        <button
          className='w-[127px] h-[52px] rounded-btnRad bg-green'
          onClick={scrollToTop}
        >
          <p className='text-black font-roboto text-[18px] font-normal leading-[19.8px]'>
            Наверх ↑
          </p>
        </button>
    </footer>
    )
  }
  
  export default Footer