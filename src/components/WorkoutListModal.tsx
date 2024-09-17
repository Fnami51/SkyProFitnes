import { useState, useEffect } from 'react';
import { Workout } from '../types/interfaces';
import Button from './Button';

interface WorkoutListModalProps {
  isOpen: boolean;
  onClose: () => void;
  workouts: Workout[];
  onSelectWorkout: (workoutId: string) => void;
}

const WorkoutListModal: React.FC<WorkoutListModalProps> = ({ isOpen, onClose, workouts, onSelectWorkout }) => {
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setSelectedWorkout(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg rounded-[30px] p-10 w-full max-w-[460px] h-[609px] flex flex-col">
        <h2 className="text-[32px] font-normal mb-12 text-center">Выберите тренировку</h2>
        <div className="flex-grow overflow-y-auto">
          {workouts.map((workout, index) => (
            <div key={workout._id} className="mb-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="workout"
                  value={workout._id}
                  checked={selectedWorkout === workout._id}
                  onChange={() => setSelectedWorkout(workout._id)}
                  className="mr-4 w-6 h-6"
                />
                <div>
                  <p className="text-[24px] font-normal">{workout.name}</p>
                  <p className="text-[16px] text-gray">Тренировка {index + 1}</p>
                </div>
              </label>
              {index < workouts.length - 1 && <hr className="my-4 border-[#C4C4C4]" />}
            </div>
          ))}
        </div>
        <Button
          variant="primary"
          className="mt-8 w-full"
          onClick={() => {
            if (selectedWorkout) {
              onSelectWorkout(selectedWorkout);
              onClose();
            }
          }}
          disabled={!selectedWorkout}
        >
          Начать
        </Button>
      </div>
    </div>
  );
};

export default WorkoutListModal;