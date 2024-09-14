
import { Link } from 'react-router-dom';
import TraningProgress from './TraningProgress';

interface Tasks {
    task: string;
    progress: number;
}

function TraningPage () {
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
        <main className="mt-[60px]">
            <article className='flex flex-col gap-[25px] mb-[40px]'>
                <h1 className="text-[60px] mobile:text-[32px] font-medium leading-[60px] mobile:leading-[35.2px] text-left font-roboto">
                    Йога
                </h1>
                <Link to={'/'}>Красота и здоровье / Йога на каждый день / 2 день</Link>
            </article>
            <video src="#" className='w-full rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)]'></video>
            <TraningProgress title={'Упражнение для йоги'} tasks={tasks}/>
        </main>
    )
}

export default TraningPage