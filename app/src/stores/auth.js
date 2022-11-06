import { defineStore } from 'pinia'
import { authAPI } from '@/services/api'

const auth_storage = {
  email: localStorage.getItem('auth.email'),
  name: localStorage.getItem('auth.name'),
  id: localStorage.getItem('auth.id'),
  shop_id: localStorage.getItem('auth.shop_id'),
  phone_number: localStorage.getItem('auth.phone_number'),
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      auth: {
        email: auth_storage.email,
        name: auth_storage.name,
        id: auth_storage.id,
        shop_id: auth_storage.shop_id,
        phone_number: auth_storage.phone_number,
      }
    }
  },

  getters: {
    getAuth: (state) => state.auth,

    getEmail: (state) => state.auth.email,

    getId: (state) => state.auth.id,

    getName: (state) => state.auth.name,

    getShopId: (state) => state.auth.shop_id,

    getPhoneNumber: (state) => state.auth.phone_number,

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


     async signup (email, password,phone_number) {
          if (await authAPI.signup(email, password,phone_number)) {
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
      localStorage.setItem('auth.shop_id', this.auth.shop_id)
      localStorage.setItem('auth.phone_number', this.auth.phone_number)
    },

    logout () {
      authAPI.logout()
      localStorage.removeItem('auth.email')
      localStorage.removeItem('auth.name')
      localStorage.removeItem('auth.id')
      localStorage.removeItem('auth.shop_id')
      localStorage.removeItem('auth.phone_number')
      this.auth = {
        email: null,
        name: null,
        id: null,
        shop_id: null,
        phone_number: null,
      }
    }
  }
})