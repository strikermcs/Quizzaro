import { defineStore } from 'pinia'
import { IResultUserDataTable } from '@/interfaces/quiz.interfaces';

interface IMailStoreState {
    mail: IResultUserDataTable[] | null
}

export const useMailStore = defineStore('mail', {
    state: ():IMailStoreState => ({
        mail: null
    })
})