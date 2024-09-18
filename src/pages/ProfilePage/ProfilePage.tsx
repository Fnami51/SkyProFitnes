import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyCourseCard from "../../components/Cards/MyCourseCard";
import CourseCard from "../../components/Cards/CourseCard";
import { useAuth } from '../../hooks/useAuth';
import { useCourses } from '../../hooks/useCourses';
import Profile from "./Profile";
import { Course } from '../../types/interfaces';
import Footer from '../../components/Footer';

function ProfilePage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { getUserCourses } = useCourses();
  const [userCourses, setUserCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    } else {
      const fetchUserCourses = async () => {
        const courses = await getUserCourses(user.uid);
        setUserCourses(courses);
      };
      fetchUserCourses();
    }
  }, [user, getUserCourses, navigate]);

  return (
    <>
      <main className='mt-[60px] mb-[60px]'>
        <h1 className='text-[40px] font-medium leading-[44px] text-left font-roboto mobile:text-[24px] mobile:leading-[26.4px]'>
          Профиль
        </h1>
        {user && <Profile />}
        <h1 className='text-[40px] font-medium leading-[44px] text-left font-roboto mobile:text-[24px] mobile:leading-[26.4px] mt-[60px]'>
          Мои курсы
        </h1>
        <article className='flex flex-wrap gap-[40px] mt-[50px]'>
          {userCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}

export default ProfilePage;
