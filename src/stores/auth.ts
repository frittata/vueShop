import { defineStore } from 'pinia'
import { getUsers, userLogin } from '@/api/fakeStore'
import { useStorage } from '@vueuse/core'
import type { User } from '@/types/user'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: useStorage<string | null>('token', null),
    user: useStorage<User | null>('user', null, localStorage, {
      serializer: {
        read: (v) => (v ? JSON.parse(v) : null),
        write: (v) => JSON.stringify(v),
      },
    }),
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(username: string, password: string) {
      const token = await userLogin(username, password)
      this.token = token

      const usersRes = await getUsers()
      const currentUser = usersRes.find((u) => u.username === username)

      if (currentUser) {
        this.user = currentUser
      }
    },

    logout() {
      this.token = null
      this.user = null
    },
  },
})
