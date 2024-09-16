export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  name?: string;
  login?: string;
  password?: string;
  url_img?: string;
}

export interface Course {
  _id: string;
  nameEN: string;
  nameRU: string;
  description: string;
  directions: string[];
  fitting: string[];
  order: number;
  workouts: string[];
}

export interface Workout {
  _id: string;
  name: string;
  video: string;
  exercises?: Exercise[];
}

export interface Exercise {
  name: string;
  quantity: number;
}

interface ImportMetaEnv {
  VITE_FIREBASE_API_KEY: string;
  VITE_FIREBASE_AUTH_DOMAIN: string;
  VITE_FIREBASE_PROJECT_ID: string;
  VITE_FIREBASE_STORAGE_BUCKET: string;
  VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  VITE_FIREBASE_APP_ID: string;
  VITE_FIREBASE_DATABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}