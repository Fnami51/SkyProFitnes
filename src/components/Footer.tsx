import Button from "./Button";

function Footer() {
  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
  return (
    <footer className="flex justify-center mobile:justify-end items-center mt-[34px] mb-[30px]">
        <Button
          className='w-[127px] h-[52px] rounded-btnRad bg-green'
          variant="primary"
          onClick={scrollToTop}
        >
            Наверх ↑
        </Button>
    </footer>
    )
  }
  
  export default Footer