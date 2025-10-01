
export interface User {
  firstName: string;
  lastName: string;
  licenseNumber: string;
}

export enum CourseMode {
  OFFICIAL = 'OFFICIAL',
  TRIAL = 'TRIAL',
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ModuleData {
  id: number;
  title: string;
  content: string[];
  summary: string;
  quiz: Question[];
}

export interface QuizResult {
  moduleId: number;
  score: number;
  total: number;
}
