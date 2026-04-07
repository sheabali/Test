import { apiClient } from "@/lib/axios"

export interface LoginDto {
  email: string
  password: string
}

export interface RegisterDto {
  name: string
  email: string
  password: string
}

export interface AuthResponse {
  user: {
    id: string
    name: string
    email: string
    role: string
  }
  token: string
  refreshToken: string
}

export const authService = {
  // Login
  login: async (data: LoginDto): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>("/auth/login", data)

    // Store tokens
    if (response.data.token) {
      localStorage.setItem("auth_token", response.data.token)
      localStorage.setItem("refresh_token", response.data.refreshToken)
    }

    return response.data
  },

  // Register
  register: async (data: RegisterDto): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>("/auth/register", data)

    // Store tokens
    if (response.data.token) {
      localStorage.setItem("auth_token", response.data.token)
      localStorage.setItem("refresh_token", response.data.refreshToken)
    }

    return response.data
  },

  // Logout
  logout: async (): Promise<void> => {
    await apiClient.post("/auth/logout")
    localStorage.removeItem("auth_token")
    localStorage.removeItem("refresh_token")
  },

  // Refresh token
  refreshToken: async (): Promise<AuthResponse> => {
    const refreshToken = localStorage.getItem("refresh_token")
    const response = await apiClient.post<AuthResponse>("/auth/refresh", {
      refreshToken,
    })

    if (response.data.token) {
      localStorage.setItem("auth_token", response.data.token)
      localStorage.setItem("refresh_token", response.data.refreshToken)
    }

    return response.data
  },
}
