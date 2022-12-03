export interface IAnswer {
    key: number
    answer: string,
    correctAnswer: boolean
}

export interface IQuestion {
    question: string
    answers: IAnswer[]
} 

export interface IQuiz {
    name: string
    theme: string
    questions: Array<IQuestion>
}

export interface IQuizDb extends IQuiz {
    id?: string
    userId: string
}

export interface IAnswersResult {
    answers: IAnswer[]
    correctPercent: number
}

export interface IResultDataTableItem {
    question: string
    rigthAnswers: string
    userAnswers: string
    result: number
}

export interface ISendQuiz {
    id?: string
    quizId: string
    senderId: string
    senderName: string
    recipientId: string
    recipientName: string 
}

export interface IResultUserDataTable {
    quizRezult: IResultDataTableItem[]
    username: string
    userId: string
    isRead: boolean
}