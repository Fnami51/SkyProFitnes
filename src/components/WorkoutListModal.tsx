import { useState, useEffect, useRef } from 'react';
import { Workout } from '../types/interfaces';
import Button from './Button';
import { useCourses } from '../hooks/useCourses';
import { useAuth } from '../hooks/useAuth';
import Modal from './Modal';

interface WorkoutListModalProps {
  isOpen: boolean;
  onClose: () => void;
  workoutIds: string[];
  onSelectWorkout: (workoutId: string) => void;
}

const WorkoutListModal: React.FC<WorkoutListModalProps> = ({
  isOpen,
  onClose,
  workoutIds,
  onSelectWorkout
}) => {
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const { getWorkout } = useCourses();
  const modalRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [showScroll, setShowScroll] = useState(false);
  const { user } = useAuth();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleStartWorkout = () => {
    if (user) {
      if (selectedWorkout) {
        onSelectWorkout(selectedWorkout);
        onClose();
      }
    } else {
      setIsLoginModalOpen(true);
    }
  };
  useEffect(() => {
    const fetchWorkouts = async () => {
      if (workoutIds && workoutIds.length > 0) {
        const workoutPromises = workoutIds.map(id => getWorkout(id));
        const fetchedWorkouts = await Promise.all(workoutPromises);
        setWorkouts(fetchedWorkouts.filter((w): w is Workout => w !== null));
      } else {
        setWorkouts([]);
      }
    };

    if (isOpen) {
      fetchWorkouts();
    }
  }, [isOpen, workoutIds, getWorkout]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const checkScroll = () => {
      if (listRef.current) {
        setShowScroll(listRef.current.scrollHeight > listRef.current.clientHeight);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);

    return () => {
      window.removeEventListener('resize', checkScroll);
    };
  }, [workouts]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div ref={modalRef} className="bg-white shadow-lg rounded-[30px] p-10 w-full max-w-[460px] h-[609px] flex flex-col">
          <h2 className="text-[32px] font-normal mb-12 text-center font-['StratosSkyeng'] leading-[110%]">Выберите тренировку</h2>
          <div
            ref={listRef}
            className={`flex-grow overflow-y-auto pr-4 ${showScroll ? 'scrollbar' : ''}`}
          >
            {workouts.length > 0 ? (
              <div className="flex flex-col gap-[34px]">
                {workouts.map((workout, index) => (
                  <div key={workout._id} className="flex flex-col">
                    <label className="flex items-center cursor-pointer mb-2.5 group">
                      <input
                        type="radio"
                        name="workout"
                        value={workout._id}
                        checked={selectedWorkout === workout._id}
                        onChange={() => setSelectedWorkout(workout._id)}
                        className="sr-only"
                      />
                      <span className="w-6 h-6 border-2 border-black rounded-full mr-2.5 flex items-center justify-center group-hover:border-[#BCEC30] transition-colors">
                        <span className={`w-4 h-4 rounded-full ${selectedWorkout === workout._id ? 'bg-[#BCEC30]' : ''} transition-colors`}>
                          {selectedWorkout === workout._id && (
                            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                        </span>
                      </span>
                      <div>
                        <p className="text-[24px] font-normal font-roboto leading-[110%]">{workout.name}</p>
                        <p className="text-[16px] text-black font-roboto leading-[110%]">Тренировка {index + 1}</p>
                      </div>
                    </label>
                    {index < workouts.length - 1 && <hr className="border-[#C4C4C4] w-full mt-4" />}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">Нет доступных тренировок</p>
            )}
          </div>
          <Button
            variant="primary"
            className="mt-8 w-full py-4 px-6.5 bg-[#BCEC30] rounded-[46px] text-[18px] font-roboto leading-[110%] text-black"
            onClick={handleStartWorkout}
            disabled={!selectedWorkout}
          >
            {user ? "Начать" : "Закрыть"}
          </Button>
        </div>
      </div>
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        type="login"
        onSwitchType={() => { }}
      />
    </>
  );
};

export default WorkoutListModal;