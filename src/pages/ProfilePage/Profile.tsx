interface ProfileProps {
    name: string;
    login: string;
    password: string;
    url_img: string
}
// Подумать как лучше брать здесь из контекста или в ProfilePage
function Profile({ name, login, password, url_img }: ProfileProps) {
    return (
        <section className="flex mobile:flex-col mobile:items-center gap-[33px] w-[100%] p-[30px] mt-[40px] mb-[60px] rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)]">
            <img src={url_img !== "" ? url_img : '/images/profil_no-img.png'} className="w-[197px] h-[197px] rounded-[30px] mobile:w-[141px] mobile:h-[141px]" />
            <div className="flex flex-col gap-[30px] mobile:w-full">
                <h2 className="text-left font-roboto text-[32px] font-medium leading-[35.2px]">{name}</h2>
                <div className="flex flex-col gap-[10px] text-left font-roboto text-[18px] font-normal leading-[19.8px]">
                    <p>Логин: {login}</p>
                    <p>Пароль: {password}</p>
                </div>
                <div className="flex gap-[10px] mobile:flex-col">
                    <button className='w-[192px] mobile:w-full h-[52px] rounded-btnRad bg-green'>
                        <p className='text-black font-roboto text-[18px] font-normal leading-[19.8px]'>Изменить пароль</p>
                    </button>
                    <button className='w-[192px] mobile:w-full h-[52px] rounded-btnRad bg-white border border-black'>
                        <p className='text-black font-roboto text-[18px] font-normal leading-[19.8px]'>Выйти</p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Profile
