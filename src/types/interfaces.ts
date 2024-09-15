export interface User {
     uid: string;
     email: string;
     displayName?: string;
     photoURL?: string;
}

export interface Course {
     id: string;
     name: string;
     description: string;
     progress?: number;
}

export interface Workout {
     id: string;
     name: string;
     exercises: Exercise[];
     video: string;
}

export interface Exercise {
     name: string;
     quantity: number;
}