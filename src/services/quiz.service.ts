import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebase'
import { IQuizDb } from "@/interfaces/quiz.interfaces"; 


export default class quizService {

    static async addQuiz(quiz: IQuizDb): Promise<string> {
        
        const docRef = await addDoc(collection(db, "quizes"), quiz)

        return docRef.id
    }

    static async getQuizzesByUser(userId: string): Promise<IQuizDb[]> {
        const Quizzes :IQuizDb[] = []
        const q = query(collection(db, "quizes"), where("userId", "==", userId))

        const result = await getDocs(q)
        result.forEach((doc) => {
            Quizzes.push({id: doc.id, ...doc.data() as IQuizDb})
        })


        return Quizzes
    }

}