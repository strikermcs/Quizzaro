import { defineStore } from 'pinia'
import { User } from "firebase/auth";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase'
import UsersService from '@/services/users.service';
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
 
        async register(username: string, email: string, password: string): Promise<void>{
            const notify = useNotificationStore()
            const user = await UsersService.getUserByUsername(username)
            
            if(user){
                notify.SetNofication('Error', 'UsernameAlreadyExists', 'error')
                return
            }

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {                     
                    this.user = userCredential.user;
                    updateProfile(auth.currentUser!, {
                        displayName: username
                      }).then(() => {
                        UsersService.createUser({
                            userId: userCredential.user.uid,
                            username,
                            email
                        }).then((id) => {
                            notify.SetNofication('Success', 'UserSuccessfullyCreated', 'success')
                        })      
                      })                           
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