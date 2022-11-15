import { 
    collection, 
    addDoc, 
    query, 
    doc, 
    where, 
    getDocs,
    deleteDoc } from "firebase/firestore";
import { db } from '../firebase/firebase'
import { IUser } from '@/interfaces/user.interfaces'

export default class UsersService {

    static async createUser(user: IUser): Promise<string> {
        const docRef = await addDoc(collection(db, "users"), user)
        return docRef.id
    }

    static async getUserByUsername(username: string): Promise<IUser | undefined> {
        
        let user: IUser | undefined
        const q = query(collection(db, "users"), where("username", "==", username))
        const result = await getDocs(q)

        result.forEach((doc) => {
            user = {
                id: doc.id,
                ...doc.data() as IUser
            }
        })

        return user
    }
} 