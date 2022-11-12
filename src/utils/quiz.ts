import { IQuizDb, IAnswer } from '@/interfaces/quiz.interfaces';


export const calculatePercentOfCorrectAnswers = (answers: IAnswer[], quiz: IQuizDb, currentQuestion: number): number => {
    const userCorrectAnswers = answers.filter(a => a.correctAnswer === true).length
    const correctAnswers = quiz.questions[currentQuestion]
         .answers.filter(a => a.correctAnswer === true).length
     if (userCorrectAnswers === 0) return 0
     return userCorrectAnswers / correctAnswers
 }