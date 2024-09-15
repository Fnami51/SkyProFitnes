import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TrainingProgress from './TrainingProgress';
import { useCourses } from '../../hooks/useCourses';
import { useAuth } from '../../hooks/useAuth';
import { Workout } from '../../types/interfaces';

function TrainingPage() {
  const { id } = useParams<{ id: string }>();
  const { user, loading: authLoading } = useAuth();
  const { getWorkout } = useCourses();
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkout = async () => {
      if (authLoading) return;
      if (!user) {
        setWorkout(null);
        setLoading(false);
        return;
      }
      if (id) {
        const workoutData = await getWorkout(id);
        setWorkout(workoutData);
        setLoading(false);
      }
    };
    fetchWorkout();
  }, [id, getWorkout, user, authLoading]);

  if (authLoading || loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in to view this workout</div>;
  }

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <main className="mt-[60px]">
      <article className='flex flex-col gap-[25px] mb-[40px]'>
        <h1 className="text-[60px] mobile:text-[32px] font-medium leading-[60px] mobile:leading-[35.2px] text-left font-roboto">
          {workout.name}
        </h1>
        <Link to='/'>Вернуться к списку курсов</Link>
      </article>
      <video src={workout.video} className='w-full rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)]' controls></video>
      {workout.exercises && (
        <TrainingProgress title={workout.name} tasks={workout.exercises.map(exercise => ({
          task: exercise.name,
          progress: 0  // Изначально прогресс 0
        }))} />
      )}
    </main>
  );
}

export default TrainingPage;