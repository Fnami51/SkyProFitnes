import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCourses } from '../../hooks/useCourses';
import Level from "./Level";
import Modal from '../Modal';
import InfoModal from '../infoModal';
import { Course } from '../../types/interfaces';

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  const { user } = useAuth();
  const { addCourse } = useCourses();
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');

  const handleAddCourse = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (user) {
      try {
        await addCourse(course._id);
        setInfoMessage('Курс успешно добавлен!');
        setIsInfoModalOpen(true);
      } catch (error) {
        console.error('Error adding course:', error);
        setInfoMessage('Ошибка при добавлении курса. Попробуйте еще раз.');
        setIsInfoModalOpen(true);
      }
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleCardClick = () => {
    if (course && course._id) {
      navigate(`/course/${course._id}`);
    }
  };

  const getCourseImage = (nameEN: string): string => {
    const imageMap: { [key: string]: string } = {
      'Yoga': '/images/Yoga_small.png',
      'Stretching': '/images/Stretching_small.png',
      'DanceFitness': '/images/DanceFitness_small.png',
      'StepAirobic': '/images/StepAirobic_small.png',
      'BodyFlex': '/images/BodyFlex_small.png',
    };
    return imageMap[nameEN] || '/images/default_small.png';
  };

  if (!course) {
    return null;
  }

  return (
    <>
      <section className="w-[360px] pb-[15px] rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)] cursor-pointer overflow-hidden" onClick={handleCardClick}>
        <div className="relative">
          <img src={getCourseImage(course.nameEN)} alt={course.nameRU} className="w-full h-[325px] object-cover" />
          <button className="absolute top-5 right-5 w-[32px] h-[32px]" onClick={handleAddCourse}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663C8.63619 2.66663 2.66666 8.63616 2.66666 16C2.66666 23.3638 8.63619 29.3333 16 29.3333ZM14.6667 14.6666V9.33329H17.3333V14.6666H22.6667V17.3333H17.3333V22.6666H14.6667V17.3333H9.33332V14.6666H14.6667Z" fill="white" />
            </svg>
          </button>
        </div>
        <div className="mt-[24px] ml-[30px] mr-[30px]">
          <h2 className="text-[32px] font-medium leading-[35.2px] text-left font-roboto">{course.nameRU}</h2>
          <div className="flex flex-wrap gap-[6px] mt-[20px]">
            <div className="flex rounded-[30px] bg-gray-super-light items-center p-[10px] gap-[6px]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 2.625C7.5 1.79657 6.82843 1.125 6 1.125C5.17157 1.125 4.5 1.79657 4.5 2.625C2.84315 2.625 1.5 3.96815 1.5 5.625H16.5C16.5 3.96815 15.1569 2.625 13.5 2.625C13.5 1.79657 12.8284 1.125 12 1.125C11.1716 1.125 10.5 1.79657 10.5 2.625H7.5Z" fill="#202020" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.5 7.125H16.5V11.325C16.5 13.0052 16.5 13.8452 16.173 14.487C15.8854 15.0515 15.4265 15.5104 14.862 15.798C14.2202 16.125 13.3802 16.125 11.7 16.125H6.3C4.61984 16.125 3.77976 16.125 3.13803 15.798C2.57354 15.5104 2.1146 15.0515 1.82698 14.487C1.5 13.8452 1.5 13.0052 1.5 11.325V7.125ZM10.5 11.325C10.5 10.905 10.5 10.6949 10.5817 10.5345C10.6537 10.3934 10.7684 10.2787 10.9095 10.2067C11.0699 10.125 11.28 10.125 11.7 10.125H12.3C12.72 10.125 12.9301 10.125 13.0905 10.2067C13.2316 10.2787 13.3463 10.3934 13.4183 10.5345C13.5 10.6949 13.5 10.905 13.5 11.325V11.925C13.5 12.345 13.5 12.5551 13.4183 12.7155C13.3463 12.8566 13.2316 12.9713 13.0905 13.0433C12.9301 13.125 12.72 13.125 12.3 13.125H11.7C11.28 13.125 11.0699 13.125 10.9095 13.0433C10.7684 12.9713 10.6537 12.8566 10.5817 12.7155C10.5 12.5551 10.5 12.345 10.5 11.925V11.325Z" fill="#202020" />
              </svg>
              <p>{course.workouts?.length || 0} {course.workouts?.length === 1 ? 'тренировка' : 'тренировок'}</p>
            </div>
            {course.difficulty !== undefined && (
              <div className="flex rounded-[30px] bg-gray-super-light items-center p-[10px] gap-[6px]">
                <Level value={course.difficulty} />
                <p>Сложность</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        type="login"
        onSwitchType={() => { }}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        message={infoMessage}
      />
    </>
  );
}

export default CourseCard;