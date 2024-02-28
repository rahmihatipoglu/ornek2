import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = {
    id: '',
    adsoyad: '',
    tc: '',
    eposta: 'aaa@kf.com',
    yas: '',
    il_id: '0',
    dersler: [],
    durum: 1
  }

  return { user }
})
