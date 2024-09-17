// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useCourses } from '../../hooks/useCourses';
// import { useAuth } from '../../hooks/useAuth';
// import { Workout } from '../../types/interfaces';
// import ProgressModal from '../../components/ProgressModal';
// import { database  } from '../../config/firebase';
// import { ref, set, get } from "firebase/database";


// function TrainingPage() {
//   const { id } = useParams<{ id: string }>();
//   const { user, loading: authLoading } = useAuth();
//   const { getWorkout } = useCourses();
//   const [workout, setWorkout] = useState<Workout | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
//   const [progress, setProgress] = useState<{ [key: string]: number }>({});

//   useEffect(() => {
//     const fetchWorkout = async () => {
//       if (authLoading) return;
//       if (!user) {
//         setWorkout(null);
//         setLoading(false);
//         return;
//       }
//       if (id) {
//         const workoutData = await getWorkout(id);
//         setWorkout(workoutData);
//         const progressRef = ref(database, `userProgress/${user.uid}/${id}`);
//         const snapshot = await get(progressRef);
//         if (snapshot.exists()) {
//           setProgress(snapshot.val());
//         }
//         setLoading(false);
//       }
//     };
//     fetchWorkout();
//   }, [id, getWorkout, user, authLoading]);

//   const handleOpenProgressModal = () => {
//     setIsProgressModalOpen(true);
//   };

//   const handleCloseProgressModal = () => {
//     setIsProgressModalOpen(false);
//   };

//   const handleSaveProgress = async (newProgress: { [key: string]: number }) => {
//     if (!user || !id) return;

//     try {
//       // Сохраняем прогресс в Firebase
//       const progressRef = ref(database, `userProgress/${user.uid}/${id}`);
//       await set(progressRef, newProgress);

//       // обновляем локальное состояние
//       setProgress(newProgress);
//       console.log('Progress saved:', newProgress);
//     } catch (error) {
//       console.error('Error saving progress:', error);
//     }
//   };

//   const calculatePercentage = (exerciseName: string) => {
//     if (!workout) return 0;
//     const exercise = workout.exercises?.find(e => e.name === exerciseName);
//     if (!exercise) return 0;
//     const completed = progress[exerciseName] || 0;
//     return Math.min(Math.round((completed / exercise.quantity) * 100), 100);
//   };

//   if (authLoading || loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     return <div>Авторизируйтесь чтобы просматривать курсы</div>;
//   }

//   if (!workout) {
//     return <div>Workout not found</div>;
//   }

//   return (
//     <main className="mt-[60px]">
//       <article className='flex flex-col gap-[25px] mb-[40px]'>
//         <h1 className="text-[60px] mobile:text-[32px] font-medium leading-[60px] mobile:leading-[35.2px] text-left font-roboto">
//           {workout.name}
//         </h1>
//         <Link to='/'>Вернуться к списку курсов</Link>
//       </article>
//       <video src={workout.video} className='w-full rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)]' controls></video>
//       {workout.exercises && (
//         <section className="flex flex-col mobile:items-center w-[100%] p-[40px] mt-[40px] mb-[60px] rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)]">
//           <h2 className="text-[32px] font-normal leading-[35.2px] text-left">{workout.name}</h2>
//           <div className="mt-[20px] mb-[40px] grid grid-cols-3 gap-y-[20px] gap-x-[60px]">
//             {workout.exercises.map((exercise, index) => (
//               <div key={index}>
//                 <p>{exercise.name} ({calculatePercentage(exercise.name)}%)</p>
//                 <div className="w-full bg-[#F7F7F7] rounded-full h-2.5 mt-2">
//                   <div 
//                     className="bg-[#00C1FF] h-2.5 rounded-full" 
//                     style={{ width: `${calculatePercentage(exercise.name)}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={handleOpenProgressModal}
//             className="w-[320px] h-[52px] mobile:w-[283px] bg-[#BCEC30] text-black rounded-[46px] font-roboto text-[18px] font-normal leading-[19.8px]"
//           >
//             Заполнить свой прогресс
//           </button>
//         </section>
//       )}
//       <ProgressModal
//         isOpen={isProgressModalOpen}
//         onClose={handleCloseProgressModal}
//         exercises={workout.exercises || []}
//         onSave={handleSaveProgress}
//       />
//     </main>
//   );
// }

// export default TrainingPage;