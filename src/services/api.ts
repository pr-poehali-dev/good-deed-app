import {
  User,
  GoodDeed,
  CreateDeedRequest,
  ApiResponse,
  PaginatedResponse,
} from "@/types/api";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<ApiResponse<T>> {
    try {
      const token = localStorage.getItem("authToken");

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  // Аутентификация
  async login(
    email: string,
    password: string,
  ): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: {
    name: string;
    nickname: string;
    email: string;
    password: string;
  }): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.request("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  }

  async logout(): Promise<ApiResponse<void>> {
    const result = await this.request("/auth/logout", { method: "POST" });
    if (result.success) {
      localStorage.removeItem("authToken");
    }
    return result;
  }

  // Пользователи
  async getCurrentUser(): Promise<ApiResponse<User>> {
    return this.request("/users/me");
  }

  async updateProfile(userData: Partial<User>): Promise<ApiResponse<User>> {
    return this.request("/users/me", {
      method: "PUT",
      body: JSON.stringify(userData),
    });
  }

  // Добрые дела
  async getDeeds(
    page = 1,
    limit = 10,
    category?: string,
  ): Promise<ApiResponse<PaginatedResponse<GoodDeed>>> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(category && { category }),
    });

    return this.request(`/deeds?${params}`);
  }

  async getDeedById(id: string): Promise<ApiResponse<GoodDeed>> {
    return this.request(`/deeds/${id}`);
  }

  async createDeed(
    deedData: CreateDeedRequest,
  ): Promise<ApiResponse<GoodDeed>> {
    const formData = new FormData();
    formData.append("title", deedData.title);
    formData.append("description", deedData.description);
    formData.append("category", deedData.category);

    if (deedData.location) {
      formData.append("location", JSON.stringify(deedData.location));
    }

    if (deedData.photos) {
      deedData.photos.forEach((photo, index) => {
        formData.append(`photos[${index}]`, photo);
      });
    }

    return fetch(`${API_BASE_URL}/deeds`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: formData,
    }).then((res) => res.json());
  }

  async likeDeed(id: string): Promise<ApiResponse<void>> {
    return this.request(`/deeds/${id}/like`, { method: "POST" });
  }

  async getUserDeeds(
    userId: string,
    page = 1,
  ): Promise<ApiResponse<PaginatedResponse<GoodDeed>>> {
    return this.request(`/users/${userId}/deeds?page=${page}`);
  }

  // Карта
  async getDeedsInArea(bounds: {
    north: number;
    south: number;
    east: number;
    west: number;
  }): Promise<ApiResponse<GoodDeed[]>> {
    const params = new URLSearchParams({
      north: bounds.north.toString(),
      south: bounds.south.toString(),
      east: bounds.east.toString(),
      west: bounds.west.toString(),
    });

    return this.request(`/deeds/map?${params}`);
  }

  // Статистика
  async getStats(): Promise<
    ApiResponse<{
      today: number;
      thisWeek: number;
      total: number;
      categories: Record<string, number>;
    }>
  > {
    return this.request("/stats");
  }

  // Достижения
  async getUserAchievements(userId: string): Promise<ApiResponse<any[]>> {
    return this.request(`/users/${userId}/achievements`);
  }
}

export const apiService = new ApiService();
