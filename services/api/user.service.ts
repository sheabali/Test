import { apiClient } from "@/lib/axios"

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: string
  createdAt: string
  updatedAt: string
}

export interface CreateUserDto {
  name: string
  email: string
  password: string
  role?: string
}

export interface UpdateUserDto {
  name?: string
  email?: string
  avatar?: string
}

export const userService = {
  // Get all users
  getUsers: async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>("/users")
    return response.data
  },

  // Get user by ID
  getUserById: async (id: string): Promise<User> => {
    const response = await apiClient.get<User>(`/users/${id}`)
    return response.data
  },

  // Get current user
  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get<User>("/users/me")
    return response.data
  },

  // Create new user
  createUser: async (data: CreateUserDto): Promise<User> => {
    const response = await apiClient.post<User>("/users", data)
    return response.data
  },

  // Update user
  updateUser: async (id: string, data: UpdateUserDto): Promise<User> => {
    const response = await apiClient.patch<User>(`/users/${id}`, data)
    return response.data
  },

  // Delete user
  deleteUser: async (id: string): Promise<void> => {
    await apiClient.delete(`/users/${id}`)
  },
}
