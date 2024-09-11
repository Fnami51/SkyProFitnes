import { firestore } from '../config/firebase';
import { collection, getDocs, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { Course } from '../types';

export const getAllCourses = async (): Promise<Course[]> => {
  try {
    const coursesCollection = collection(firestore, 'courses');
    const coursesSnapshot = await getDocs(coursesCollection);
    return coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Course));
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const addCourseToUser = async (userId: string, courseId: string): Promise<void> => {
  try {
    const userDocRef = doc(firestore, 'users', userId);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const userCourses = userData.courses || [];
      
      if (!userCourses.includes(courseId)) {
        await updateDoc(userDocRef, {
          courses: [...userCourses, courseId]
        });
      }
    } else {
      await setDoc(userDocRef, { courses: [courseId] });
    }
  } catch (error) {
    console.error('Error adding course to user:', error);
    throw error;
  }
};

export const getUserCourses = async (userId: string): Promise<Course[]> => {
  try {
    const userDocRef = doc(firestore, 'users', userId);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const userCourses = userData.courses || [];
      
      const coursesPromises = userCourses.map(async (courseId: string) => {
        const courseDocRef = doc(firestore, 'courses', courseId);
        const courseDoc = await getDoc(courseDocRef);
        return { id: courseDoc.id, ...courseDoc.data() } as Course;
      });
      
      return Promise.all(coursesPromises);
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching user courses:', error);
    throw error;
  }
};