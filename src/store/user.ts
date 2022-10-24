import { defineStore } from 'pinia'
import { User } from "firebase/auth";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase'
import { useNotificationStore } from './notification'

interface IUserStoreState {
    user: User | null
}

export const useUserStore = defineStore('user', {

    state: (): IUserStoreState => ({
        user: null
    }),

    actions: {
      
        login(email: string, password: string ): void {
            const notify = useNotificationStore()
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    this.user = userCredential.user
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    notify.SetNofication('Error', errorCode, 'error')
                });
        },
 
        register(email: string, password: string): void {
            const notify = useNotificationStore()
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {                     
                    this.user = userCredential.user;
                    notify.SetNofication('Success', 'UserSuccessfullyCreated', 'success')
                
            })
            .catch((error) => {
                const errorCode = error.code;
                notify.SetNofication('Error', errorCode, 'error') 
            });
        },

        singOut() {
            auth.signOut()
            this.user = null 
        }
    },


})