"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { authService, type LoginDto, type RegisterDto } from "@/services/api/auth.service"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { userKeys } from "./use-users"

// Login mutation
export function useLogin() {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: LoginDto) => authService.login(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.current() })
      toast.success("Login successful")
      router.push("/dashboard")
    },
    onError: () => {
      toast.error("Invalid credentials")
    },
  })
}

// Register mutation
export function useRegister() {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: RegisterDto) => authService.register(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.current() })
      toast.success("Registration successful")
      router.push("/dashboard")
    },
    onError: () => {
      toast.error("Registration failed")
    },
  })
}

// Logout mutation
export function useLogout() {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      queryClient.clear()
      toast.success("Logged out successfully")
      router.push("/login")
    },
    onError: () => {
      toast.error("Logout failed")
    },
  })
}
