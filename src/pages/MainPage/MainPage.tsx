import { useEffect, useState } from 'react';
import CourseCard from "../../components/Cards/CourseCard";
import Footer from "../../components/Footer";
import { useCoursesContext } from '../../context/CoursesContext';
import { Course } from '../../types/interfaces';

function MainPage() {
    const { courses, loading } = useCoursesContext();
    const [displayCourses, setDisplayCourses] = useState<Course[]>([]);

    useEffect(() => {
        if (courses && courses.length > 0) {
            setDisplayCourses(courses);
        }
    }, [courses]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return (
        <>
            <main className="mt-[60px]">
                <article className='flex gap-[25px]'>
                    <h1 className="text-[60px] mobile:text-[32px] font-medium leading-[60px] mobile:leading-[35.2px] text-left font-roboto">
                        Начните заниматься спортом и улучшите качество жизни
                    </h1>
                    <div className="h-[120px] mobile:hidden tablet:hidden">
                        <div className="w-[288px] h-[120px] bg-[url('/speech_bubble.svg')] bg-no-repeat bg-cover pt-[16px] pl-[20px] font-roboto text-[32px] text-left leading-[35.2px]">
                            <p>Измени своё тело за полгода!</p>
                        </div>
                    </div>
                </article>
                <article className='flex flex-wrap gap-[40px] mt-[50px]'>
                    {displayCourses
                        .slice()
                        .sort((a, b) => a.order - b.order)
                        .map((course) => (
                            <CourseCard key={course._id} course={course} />
                        ))}
                </article>
            </main>
            <Footer />
        </>
    );
}

export default MainPage;