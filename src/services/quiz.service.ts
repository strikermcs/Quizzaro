import { 
    collection, 
    addDoc, 
    query, 
    doc, 
    where, 
    getDocs,
    deleteDoc, 
    getDoc} from "firebase/firestore";
import { db } from '../firebase/firebase'
import { IQuizDb, ISendQuiz } from "@/interfaces/quiz.interfaces"; 
import { IUser } from "@/interfaces/user.interfaces";
import { useUserStore } from "@/store/user";
import { ISendQuizTable } from "@/interfaces/sentQuiz.interfaces";

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
            recipientId: recipient.userId as string,
            recipientName: recipient.username
        }

        const docRef = await addDoc(collection(db, "sendQuizes"), toSend)

        return docRef.id
    }

    static async getSentQuizes(): Promise<ISendQuizTable[]>{
        const userStore = useUserStore()
        const userId = userStore.user?.uid
        const sentQuises: ISendQuiz[] = []
        const quizesList: ISendQuizTable[] = []

        const q = query(collection(db, "sendQuizes"), where("senderId", "==", userId))
        const result = await getDocs(q)

        result.forEach((doc) => {
            sentQuises.push({id: doc.id, ...doc.data() as ISendQuiz})
        })

        for await (const sent of sentQuises) {
            
            const q = doc(db, "quizes", sent.quizId)
            const result = await getDoc(q)
           
            quizesList.push({
                quiz: result.data() as IQuizDb,
                recipientName: sent.recipientName,
                recipientId: sent.recipientId,
                sentQuizId: sent.id as string
            })

        }

        return quizesList

    }

    static async sentQuizDelete(sentQuizId: string): Promise<void>{
        const docRef = doc(db, "sendQuizes", sentQuizId);
        await deleteDoc(docRef)
    }

}