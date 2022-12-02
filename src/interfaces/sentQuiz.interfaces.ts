import { IQuizDb } from "./quiz.interfaces";

export interface ISendQuizTable {
    quiz: IQuizDb
    recipientName: string
    recipientId: string
    sentQuizId: string
}