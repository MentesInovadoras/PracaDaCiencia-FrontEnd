import { create } from 'zustand'
import { persist } from 'zustand/middleware'


type AppState = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}


export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () =>
        set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
    }),
    {
      name: 'app-storage', // nome no localStorage
    }
  )
)

