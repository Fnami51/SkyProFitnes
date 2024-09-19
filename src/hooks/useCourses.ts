import { useState, useEffect, useCallback } from 'react';
import { Course, Workout, User } from '../types/interfaces';
import { getAllCourses, addCourseToUser, getUserCourses as getUserCoursesAPI, getCourseById, getWorkoutById } from '../api/courses';
import { getUserProfile as getUserProfileFromAPI, updateUserProfile } from '../api/user';
import { useAuth } from './useAuth';

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [userCourses, setUserCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { user: authUser } = useAuth();

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    try {
      // Загружаем все курсы независимо от авторизации
      const allCourses = await getAllCourses();
      // console.log('Fetched courses:', allCourses);
      setCourses(allCourses);
      
      if (authUser) {
        // Если пользователь авторизован, загружаем его курсы
        const userCoursesData = await getUserCoursesAPI(authUser.uid);
        // console.log('Fetched user courses:', userCoursesData);
        setUserCourses(userCoursesData);
      } else {
        // Если пользователь не авторизован, очищаем пользовательские курсы
        setUserCourses([]);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  }, [authUser]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const addCourse = async (courseId: string) => {
    if (!authUser) return;
    try {
      await addCourseToUser(authUser.uid, courseId);
      const updatedUserCourses = await getUserCoursesAPI(authUser.uid);
      setUserCourses(updatedUserCourses);
    } catch (error) {
      console.error('Error adding course:', error);
      throw error;
    }
  };

  const getCourse = async (courseId: string): Promise<Course | null> => {
    try {
      return await getCourseById(courseId);
    } catch (error) {
      console.error('Error fetching course:', error);
      return null;
    }
  };

  const getWorkout = useCallback(async (workoutId: string): Promise<Workout | null> => {
    try {
      return await getWorkoutById(workoutId);
    } catch (error) {
      console.error('Error fetching workout:', error);
      return null;
    }
  }, []);

  const getUserProfile = async (): Promise<User | null> => {
    if (!authUser) return null;
    try {
      return await getUserProfileFromAPI(authUser.uid);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };

  const updateProfile = async (data: Partial<User>): Promise<void> => {
    if (!authUser) return;
    try {
      await updateUserProfile(authUser.uid, data);
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  };

  const getUserCourses = useCallback(async (userId: string): Promise<Course[]> => {
    try {
      return await getUserCoursesAPI(userId);
    } catch (error) {
      console.error('Error fetching user courses:', error);
      return [];
    }
  }, []);

  return {
    courses,
    userCourses,
    loading,
    addCourse,
    getCourse,
    getWorkout,
    getUserProfile,
    updateProfile,
    getUserCourses,
  };
};