import { defineStore } from 'pinia'
import { authAPI } from '@/services/api'

const auth_storage = {
  email: localStorage.getItem('auth.email'),
  name: localStorage.getItem('auth.name'),
  id: localStorage.getItem('auth.id')
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      auth: {
        email: auth_storage.email,
        name: auth_storage.name,
        id: auth_storage.id
      }
    }
  },

  getters: {
    getAuth: (state) => state.auth,

    getEmail: (state) => state.auth.email,

    getId: (state) => state.auth.id,

    getName: (state) => state.auth.name,

    isAuthen (state) {
      return state.auth.email != null
    }
  },

  actions: {
    async login (email, password) {
      if (await authAPI.login(email, password)) {
        this.fetch()
        return true
      }
      return false
    },

    async fetch () {
      this.auth = await authAPI.me()
      localStorage.setItem('auth.email', this.auth.email)
      localStorage.setItem('auth.name', this.auth.name)
      localStorage.setItem('auth.id', this.auth.id)
    },

    logout () {
      authAPI.logout()
      localStorage.removeItem('auth.email')
      localStorage.removeItem('auth.name')
      localStorage.removeItem('auth.id')
      this.auth = {
        email: null,
        name: null,
        id: null
      }
    }
  }
})