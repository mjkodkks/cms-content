import { acceptHMRUpdate, defineStore } from 'pinia'

export const mainStore = defineStore('mainStore', {
  state: () => {
    return {
    }
  },
  actions: {
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(mainStore, import.meta.hot))
