import { IQuizDb, IAnswer } from '@/interfaces/quiz.interfaces';
import _ from 'lodash'

export const calculatePercentOfCorrectAnswers = (answers: IAnswer[], quiz: IQuizDb, currentQuestion: number): number => {
    const userCorrectAnswers = answers.filter(a => a.correctAnswer === true).length
    const correctAnswers = quiz.questions[currentQuestion]
         .answers.filter(a => a.correctAnswer === true).length
     if (userCorrectAnswers === 0) return 0
     return userCorrectAnswers / correctAnswers
 }

export const getItems = (items : any[]): any[] => {
    let listItems: any[] = []
    const temp = _.toArray(items)

    listItems = temp.map(current => {
        let item = Object.assign({}, current)
        item.list = 1
        return item
    })
    
    return listItems
}
