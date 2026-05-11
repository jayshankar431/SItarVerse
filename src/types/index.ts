export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'student' | 'teacher' | 'admin';
  bio?: string;
  streak: number;
  lastPracticeDate?: string;
  points: number;
  badges: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Performance';
  thumbnail: string;
  price: number;
  instructorId: string;
  createdAt: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  content: string;
  videoUrl?: string;
  audioUrl?: string;
  pdfUrl?: string;
  order: number;
  isPremium: boolean;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  progress: number;
  completedLessons: string[];
  bookmarkedLessons: string[];
  enrolledAt: string;
}

export interface LiveClass {
  id: string;
  title: string;
  description: string;
  type: 'Google Meet' | 'Zoom';
  meetingUrl: string;
  date: string;
  duration: number;
  maxStudents: number;
  enrolledStudents: string[];
  teacherId: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  link?: string;
  imageUrl?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  type: 'image' | 'video';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
  avatarUrl?: string;
}
