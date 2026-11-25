import { createContext } from 'react'
import type { User } from '@supabase/supabase-js'

export interface AuthContextData {
  user: User | null
  signed: boolean
  loadingAuth: boolean
  signOut: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextData)
