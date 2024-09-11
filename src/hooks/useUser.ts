import { useState, useEffect } from 'react';
import { Course } from '../types';
import { getAllCourses, addCourseToUser, getUserCourses } from '../api/courses';

export const useCourses = (userId: string | null) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [userCourses, setUserCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const allCourses = await getAllCourses();
        setCourses(allCourses);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchUserCourses = async () => {
      if (userId) {
        try {
          const userCoursesData = await getUserCourses(userId);
          setUserCourses(userCoursesData);
        } catch (error) {
          console.error('Error fetching user courses:', error);
        }
      }
    };

    fetchUserCourses();
  }, [userId]);

  const addCourse = async (courseId: string) => {
    if (userId) {
      try {
        await addCourseToUser(userId, courseId);
        const updatedUserCourses = await getUserCourses(userId);
        setUserCourses(updatedUserCourses);
      } catch (error) {
        console.error('Error adding course:', error);
        throw error;
      }
    }
  };

  return { courses, userCourses, loading, addCourse };
};