import { useState } from 'react';
import Button from "../Button";
import Level from "./Level";
import WorkoutListModal from '../WorkoutListModal';
import { Course } from '../../types/interfaces';
import { useNavigate } from 'react-router-dom';

interface MyCourseCardProps {
  course: Course;
}

function MyCourseCard({ course }: MyCourseCardProps) {
  const [isWorkoutListModalOpen, setIsWorkoutListModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsWorkoutListModalOpen(true);
  };

  const handleSelectWorkout = (workoutId: string) => {
    navigate(`/training/${workoutId}`);
  };

  

  return (
    <>
      <section className="w-[360px] pb-[15px] rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)]">
        <img src={`/images/${course.nameEN}.png`} className="w-[360px] h-[325px] rounded-[30px] object-cover" alt={course.nameRU} />
        <div className="mt-[24px] ml-[30px] mr-[30px]">
          <h2 className="text-[32px] font-medium leading-[35.2px] text-left font-roboto">{course.nameRU}</h2>
          <div className="flex flex-wrap gap-[6px] mt-[20px]">
            <div className="flex rounded-[30px] bg-gray-super-light items-center p-[10px] gap-[6px]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 2.625C7.5 1.79657 6.82843 1.125 6 1.125C5.17157 1.125 4.5 1.79657 4.5 2.625C2.84315 2.625 1.5 3.96815 1.5 5.625H16.5C16.5 3.96815 15.1569 2.625 13.5 2.625C13.5 1.79657 12.8284 1.125 12 1.125C11.1716 1.125 10.5 1.79657 10.5 2.625H7.5Z" fill="#202020" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.5 7.125H16.5V11.325C16.5 13.0052 16.5 13.8452 16.173 14.487C15.8854 15.0515 15.4265 15.5104 14.862 15.798C14.2202 16.125 13.3802 16.125 11.7 16.125H6.3C4.61984 16.125 3.77976 16.125 3.13803 15.798C2.57354 15.5104 2.1146 15.0515 1.82698 14.487C1.5 13.8452 1.5 13.0052 1.5 11.325V7.125ZM10.5 11.325C10.5 10.905 10.5 10.6949 10.5817 10.5345C10.6537 10.3934 10.7684 10.2787 10.9095 10.2067C11.0699 10.125 11.28 10.125 11.7 10.125H12.3C12.72 10.125 12.9301 10.125 13.0905 10.2067C13.2316 10.2787 13.3463 10.3934 13.4183 10.5345C13.5 10.6949 13.5 10.905 13.5 11.325V11.925C13.5 12.345 13.5 12.5551 13.4183 12.7155C13.3463 12.8566 13.2316 12.9713 13.0905 13.0433C12.9301 13.125 12.72 13.125 12.3 13.125H11.7C11.28 13.125 11.0699 13.125 10.9095 13.0433C10.7684 12.9713 10.6537 12.8566 10.5817 12.7155C10.5 12.5551 10.5 12.345 10.5 11.925V11.325Z" fill="#202020" />
              </svg>
              <p>{course.workouts?.length || 0} тренировок</p>
            </div>
            {course.difficulty !== undefined && (
              <div className="flex rounded-[30px] bg-gray-super-light items-center p-[10px] gap-[6px]">
                <Level value={course.difficulty} />
                <p>Сложность</p>
              </div>
            )}
          </div>
          <Button variant='primary' className='w-[300px] h-[52px] mt-[40px]' onClick={handleOpenModal}>
            Продолжить
          </Button>
        </div>
      </section>
      <WorkoutListModal
        isOpen={isWorkoutListModalOpen}
        onClose={() => setIsWorkoutListModalOpen(false)}
        workoutIds={course.workouts || []}
        onSelectWorkout={handleSelectWorkout}
      />
    </>
  );
}

export default MyCourseCard;