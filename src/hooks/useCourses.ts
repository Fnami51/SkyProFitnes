import { useState, useEffect, useCallback } from 'react';
import { Course, Workout } from '../types/interfaces';
import { getAllCourses, addCourseToUser, getUserCourses, getCourseById, getWorkoutById } from '../api/courses';
import { useAuth } from './useAuth';

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [userCourses, setUserCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    const fetchCourses = async () => {
      if (authLoading) return;
      if (!user) {
        setCourses([]);
        setUserCourses([]);
        setLoading(false);
        return;
      }
      try {
        const allCourses = await getAllCourses();
        setCourses(allCourses);
        const userCoursesData = await getUserCourses(user.uid);
        setUserCourses(userCoursesData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user, authLoading]);

  const addCourse = async (courseId: string) => {
    if (!user) return;
    try {
      await addCourseToUser(user.uid, courseId);
      const updatedUserCourses = await getUserCourses(user.uid);
      setUserCourses(updatedUserCourses);
    } catch (error) {
      console.error('Error adding course:', error);
      throw error;
    }
  };

  const getCourse = async (courseId: string): Promise<Course | null> => {
    if (!user) return null;
    try {
      return await getCourseById(courseId);
    } catch (error) {
      console.error('Error fetching course:', error);
      return null;
    }
  };

  const getWorkout = useCallback(async (workoutId: string): Promise<Workout | null> => {
    if (!user) return null;
    try {
      return await getWorkoutById(workoutId);
    } catch (error) {
      console.error('Error fetching workout:', error);
      return null;
    }
  }, [user]);

  return { courses, userCourses, loading, addCourse, getCourse, getWorkout };
};