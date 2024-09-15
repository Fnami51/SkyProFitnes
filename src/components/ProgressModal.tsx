import React, { useState } from 'react';
import { Exercise } from '../types/interfaces';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  exercises: Exercise[];
  onSave: (progress: { [key: string]: number }) => void;
}

const ProgressModal: React.FC<ProgressModalProps> = ({ isOpen, onClose, exercises, onSave }) => {
  const [progress, setProgress] = useState<{ [key: string]: number }>({});

  if (!isOpen) return null;

  const handleInputChange = (exerciseName: string, value: string) => {
    setProgress(prev => ({
      ...prev,
      [exerciseName]: parseInt(value) || 0
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(progress);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg rounded-[30px] p-10 w-full max-w-[426px]">
        <h2 className="text-[32px] font-normal mb-[48px] text-center">Мой прогресс</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          {exercises.map((exercise) => (
            <div key={exercise.name} className="flex flex-col gap-[10px]">
              <label className="text-[18px]">{`Сколько раз вы сделали ${exercise.name.toLowerCase()}?`}</label>
              <input
                type="number"
                className="border border-[#D0CECE] rounded-[8px] p-[16px]"
                placeholder="0"
                onChange={(e) => handleInputChange(exercise.name, e.target.value)}
              />
            </div>
          ))}
          <button type="submit" className="mt-[34px] bg-[#BCEC30] text-black rounded-[46px] py-[16px] px-[26px]">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProgressModal;