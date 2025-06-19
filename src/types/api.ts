export interface User {
  id: string;
  name: string;
  nickname: string;
  email: string;
  avatar?: string;
  joinDate: string;
  stats: {
    totalDeeds: number;
    thisWeek: number;
    streak: number;
  };
}

export interface GoodDeed {
  id: string;
  title: string;
  description: string;
  category: string;
  author: {
    id: string;
    name: string;
    nickname: string;
  };
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  date: string;
  likes: number;
  isLiked?: boolean;
  photos?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  earned: boolean;
  earnedDate?: string;
}

export interface CreateDeedRequest {
  title: string;
  description: string;
  category: string;
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  photos?: File[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
