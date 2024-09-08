import { firestore, auth } from '../config/firebase';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import { User } from '../types';

export const createUserProfile = async (user: User): Promise<void> => {
     try {
          const userDocRef = doc(firestore, 'users', user.uid);
          await setDoc(userDocRef, {
               email: user.email,
               displayName: user.displayName || '',
          });
     } catch (error) {
          console.error('Error creating user profile:', error);
          throw error;
     }
};

export const getUserProfile = async (userId: string): Promise<User | null> => {
     try {
          const userDocRef = doc(firestore, 'users', userId);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
               return { uid: userDoc.id, ...userDoc.data() } as User;
          }

          return null;
     } catch (error) {
          console.error('Error fetching user profile:', error);
          throw error;
     }
};

export const updateUserProfile = async (userId: string, data: Partial<User>): Promise<void> => {
     try {
          const userDocRef = doc(firestore, 'users', userId);
          await updateDoc(userDocRef, data);

          const currentUser = auth.currentUser;
          if (currentUser && data.displayName) {
               await updateProfile(currentUser, { displayName: data.displayName });
          }
     } catch (error) {
          console.error('Error updating user profile:', error);
          throw error;
     }
};