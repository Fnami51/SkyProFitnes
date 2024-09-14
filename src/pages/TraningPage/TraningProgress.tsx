import Button from "../../components/Button";

interface Tasks {
    task: string;
    progress: number;
}

interface TraningProgressProps {
    title: string;
    tasks: Tasks[]
  }
// Подумать как лучше брать здесь из контекста или в ProfilPage
function TraningProgress({title, tasks}: TraningProgressProps) {
    return (
        <section className="flex flex-col mobile:items-center w-[100%] p-[40px] mt-[40px] mb-[60px] rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)]">
            <h2 className="text-[32px] font-normal leading-[35.2px] text-left">{title}</h2>
            <div className="mt-[20px] mb-[40px] grid grid-cols-3 gap-y-[20px] gap-x-[60px]">
            {
                tasks.map((item, index) => (
                    <div key={index}>
                        <p>{item.task} {item.progress}%</p>
                        <div className="w-full bg-[#F7F7F7] rounded-full h-2.5 mt-2">
                            <div
                                className="bg-[#00C1FF] h-2.5 rounded-full"
                                style={{ width: `${item.progress}%` }}
                            ></div>
                        </div>
                    </div>
                ))
            }
            </div>
            <Button variant="primary" className="w-[320px] h-[52px] mobile:w-[283px]">
                Заполнить свой прогресс
            </Button>
        </section>
    )
}

export default TraningProgress