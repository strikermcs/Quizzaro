import { db } from '../firebase/firebase'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useUserStore } from '@/store/user';
import { IResultUserDataTable } from "@/interfaces/quiz.interfaces"; 

export function subscribeToMail(update: Function) {
    const userStore = useUserStore()
    const q = query(collection(db, "quizesResults"), where("userId", "==", userStore.user?.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const results:IResultUserDataTable[] = []
        
        querySnapshot.forEach((doc) => {
            results.push(doc.data() as IResultUserDataTable);
        });
          update(results)
    });

}

