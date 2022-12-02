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
import { IQuizDb, ISendQuiz, IResultUserDataTable } from "@/interfaces/quiz.interfaces"; 
import { IUser } from "@/interfaces/user.interfaces";
import { useUserStore } from "@/store/user";
import { ISendQuizTable, IIncomeQuizTable } from "@/interfaces/sentQuiz.interfaces";

type QuizesType = "senderId" | "recipientId"
export default class quizService {

    static async getQuizesTable(messageType: QuizesType): Promise<ISendQuiz[]> {
        const userStore = useUserStore()
        const userId = userStore.user?.uid
        const sentQuises: ISendQuiz[] = []

        const q = query(collection(db, "sendQuizes"), where(messageType, "==", userId))
        const result = await getDocs(q)

        result.forEach((doc) => {
            sentQuises.push({id: doc.id, ...doc.data() as ISendQuiz})
        })

        return sentQuises
    }
    

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
            senderName: user.user?.displayName as string,
            recipientId: recipient.userId as string,
            recipientName: recipient.username
        }

        const docRef = await addDoc(collection(db, "sendQuizes"), toSend)

        return docRef.id
    }

   

    static async getSentQuizes(): Promise<ISendQuizTable[]>{
        const quizesList: ISendQuizTable[] = []

        const sentQuises = await this.getQuizesTable('senderId')
        
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

    static async getIncomeQuizes(){
        const quizesList: IIncomeQuizTable[] = []

        const sentQuises = await this.getQuizesTable('recipientId')

        for await (const sent of sentQuises) {
            
            const q = doc(db, "quizes", sent.quizId)
            const result = await getDoc(q)
           
            quizesList.push({
                quiz: result.data() as IQuizDb,
                senderName: sent.senderName,
                senderId: sent.recipientId,
                sentQuizId: sent.id as string
            })

        }

        return quizesList
    } 

    static async getAllQuizes(): Promise<IQuizDb[]> {
        const Quizzes :IQuizDb[] = []
        const q = query(collection(db, "quizes"))

        const result = await getDocs(q)
        result.forEach((doc) => {
            Quizzes.push({id: doc.id, ...doc.data() as IQuizDb})
        })


        return Quizzes
    }

    static async sentResultQuizToUser(rezult: IResultUserDataTable): Promise<string>{
        const docRef = await addDoc(collection(db, "quizesResults"), rezult)

        return docRef.id
    }

}