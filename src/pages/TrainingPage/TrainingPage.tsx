import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCourses } from '../../hooks/useCourses';
import { useAuth } from '../../hooks/useAuth';
import { Workout } from '../../types/interfaces';
import ProgressModal from '../../components/ProgressModal';
import { database } from '../../config/firebase';
import { ref, set, get } from "firebase/database";

function TrainingPage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { getWorkout } = useCourses();
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [progress, setProgress] = useState<{ [key: string]: number }>({});
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      if (id) {
        const workoutData = await getWorkout(id);
        setWorkout(workoutData);
        if (user) {
          const progressRef = ref(database, `userProgress/${user.uid}/${id}`);
          const snapshot = await get(progressRef);
          if (snapshot.exists()) {
            setProgress(snapshot.val());
          }
        }
        setLoading(false);
      }
    };
    fetchWorkout();
  }, [id, getWorkout, user]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'videoStarted' && workout && user) {
        handleAutoSaveProgress();
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [workout, user]);

  const handleAutoSaveProgress = async () => {
    if (!user || !id || !workout || Object.keys(progress).length > 0) return;

    const newProgress = workout.exercises?.reduce((acc, exercise) => {
      acc[exercise.name] = exercise.quantity;
      return acc;
    }, {} as { [key: string]: number }) || {};

    try {
      const progressRef = ref(database, `userProgress/${user.uid}/${id}`);
      await set(progressRef, newProgress);
      setProgress(newProgress);
      console.log('Progress auto-saved:', newProgress);
    } catch (error) {
      console.error('Error auto-saving progress:', error);
    }
  };

  const handleOpenProgressModal = () => {
    setIsProgressModalOpen(true);
  };

  const handleCloseProgressModal = () => {
    setIsProgressModalOpen(false);
  };

  const handleSaveProgress = async (newProgress: { [key: string]: number }) => {
    if (!user || !id) return;
    try {
      const progressRef = ref(database, `userProgress/${user.uid}/${id}`);
      await set(progressRef, newProgress);
      setProgress(newProgress);
      console.log('Progress saved:', newProgress);
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const calculatePercentage = (exerciseName: string) => {
    if (!workout) return 0;
    const exercise = workout.exercises?.find(e => e.name === exerciseName);
    if (!exercise) return 0;
    const completed = progress[exerciseName] || 0;
    return Math.min(Math.round((completed / exercise.quantity) * 100), 100);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Пожалуйста, авторизуйтесь для просмотра тренировки</div>;
  }

  if (!workout) {
    return <div>Тренировка не найдена</div>;
  }

  return (
    <main className="mt-[60px]">
      <h1 className="text-[60px] mobile:text-[32px] font-medium leading-[60px] mobile:leading-[35.2px] text-left font-roboto mb-[40px]">
        {workout.name}
      </h1>
      <Link to='/'>Вернуться к списку курсов</Link>
      <iframe
        ref={videoRef}
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${workout?.video}?enablejsapi=1`}
        title={workout?.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => {
          if (videoRef.current) {
            videoRef.current.contentWindow?.postMessage('{"event":"listening"}', '*');
          }
        }}
      ></iframe>
      {workout.exercises && (
        <section className="flex flex-col mobile:items-center w-[100%] p-[40px] mt-[40px] mb-[60px] rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)]">
          <h2 className="text-[32px] font-normal mb-[48px] text-center">{workout.name}</h2>
          <div className="mt-[20px] mb-[40px] grid grid-cols-3 gap-y-[20px] gap-x-[60px]">
            {workout.exercises.map((exercise, index) => (
              <div key={index}>
                <p>{exercise.name} ({calculatePercentage(exercise.name)}%)</p>
                <div className="w-full bg-[#F7F7F7] rounded-full h-2.5 mt-2">
                  <div
                    className="bg-[#00C1FF] h-2.5 rounded-full"
                    style={{ width: `${calculatePercentage(exercise.name)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleOpenProgressModal}
            className="w-[320px] h-[52px] mobile:w-[283px] bg-[#BCEC30] text-black rounded-[46px] font-roboto text-[18px] font-normal leading-[19.8px]"
          >
            Заполнить свой прогресс
          </button>
        </section>
      )}
      <ProgressModal
        isOpen={isProgressModalOpen}
        onClose={handleCloseProgressModal}
        exercises={workout.exercises || []}
        onSave={handleSaveProgress}
      />
    </main>
  );
}

export default TrainingPage;