import { 
    collection, 
    addDoc, 
    query, 
    doc, 
    where, 
    getDocs,
    deleteDoc } from "firebase/firestore";
import { db } from '../firebase/firebase'
import { IQuizDb, ISendQuiz } from "@/interfaces/quiz.interfaces"; 
import { IUser } from "@/interfaces/user.interfaces";
import { useUserStore } from "@/store/user";

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

    static async deleteQuizById(id: string): Promise<void> {
        
        const docRef = doc(db, "quizes", id);
        await deleteDoc(docRef)
    }

    static async sendQuizToUser(recipient: IUser, quiz: IQuizDb): Promise<string> {
        const user = useUserStore()

        const toSend: ISendQuiz = {
            quizId: quiz.id as string,
            senderId: user.user?.uid as string,
            recipientId: recipient.userId as string
        }

        const docRef = await addDoc(collection(db, "sendQuizes"), toSend)

        return docRef.id
    }

}