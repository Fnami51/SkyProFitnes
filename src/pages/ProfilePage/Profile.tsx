import Button from "../../components/Button";

interface ProfilProps {
    name: string;
    login: string;
    password: string;
    url_img: string
  }
// Подумать как лучше брать здесь из контекста или в ProfilPage
function Profil({name, login, password, url_img}: ProfilProps) {
    return (
        <section className="flex mobile:flex-col mobile:items-center gap-[33px] w-[100%] p-[30px] mt-[40px] mb-[60px] rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)]">
            <img src={url_img !== "" ? url_img : '/images/profil_no-img.png'} className="w-[197px] h-[197px] rounded-[30px] mobile:w-[141px] mobile:h-[141px]"/>
            <div className="flex flex-col gap-[30px] mobile:w-full">
                <h2 className="text-left font-roboto text-[32px] font-medium leading-[35.2px]">{name}</h2>
                <div className="flex flex-col gap-[10px] text-left font-roboto text-[18px] font-normal leading-[19.8px]">
                    <p>Логин: {login}</p>
                    <p>Пароль: {password}</p>
                </div>
                <div className="flex gap-[10px] mobile:flex-col">
                    <Button variant="primary" className='w-[192px] mobile:w-full h-[52px]'>
                        Изменить пароль
                    </Button>
                    <Button variant="secondary" className='w-[192px] mobile:w-full h-[52px]'>
                        Выйти
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Profil