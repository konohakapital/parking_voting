export interface User {
  id: string
  email: string
  role: 'driver' | 'operator' | 'admin'
  name?: string
  company?: string
}

export interface AuthState {
  user: User | null
  isLoading: boolean
  error?: string
}

