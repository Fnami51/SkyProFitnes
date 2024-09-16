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