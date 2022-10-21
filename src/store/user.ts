import { defineStore } from 'pinia'

interface IUserStoreState {
    user: {} | null
}

export const useUserStore = defineStore('user', {

    state: (): IUserStoreState => ({
        user: null
    }),

    actions: {
        setUser(){
            
        }
    }
})