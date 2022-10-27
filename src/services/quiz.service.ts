import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebase'
import { IQuizDb } from "@/interfaces/quiz.interfaces"; 


export default class quizService {

    static async addQuiz(quiz: IQuizDb): Promise<string> {
        
        const docRef = await addDoc(collection(db, "quizes"), quiz);

        return docRef.id
    }

}