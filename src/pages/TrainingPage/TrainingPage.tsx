
import { Link } from 'react-router-dom';
import TrainingProgress from './TrainingProgress';

interface Tasks {
    task: string;
    progress: number;
}

interface TrainigProps {
    id: number;
}

function TrainingPage ({id}: TrainigProps) {
    const tasks: Tasks[] = [
        {
            task: 'Наклоны вперед',
            progress: 40
        },
        {
            task: 'Наклоны назад',
            progress: 20
        },
        {
            task: 'Поднятие ног, согнутых в коленях',
            progress: 60
        }
    ] // Для примера

	return (
        <main className="mt-[60px]" key={id}>
            <article className='flex flex-col gap-[25px] mb-[40px]'>
                <h1 className="text-[60px] mobile:text-[32px] font-medium leading-[60px] mobile:leading-[35.2px] text-left font-roboto">
                    Йога
                </h1>
                <Link to={'/'} className="font-roboto text-4xl font-normal leading-[35.2px] text-left">Красота и здоровье / Йога на каждый день / 2 день</Link>
            </article>
            <video src="#" className='w-full rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)]'></video>
            <TrainingProgress title={'Упражнение для йоги'} tasks={tasks}/>
        </main>
    )
}

export default TrainingPage