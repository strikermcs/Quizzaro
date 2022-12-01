import { IQuizDb, IAnswer } from '@/interfaces/quiz.interfaces';
import { IUser, IUserItem } from '@/interfaces/user.interfaces';
import _ from 'lodash'


export const calculatePercentOfCorrectAnswers = (answers: IAnswer[], quiz: IQuizDb, currentQuestion: number): number => {
    const userCorrectAnswers = answers.filter(a => a.correctAnswer === true).length
    const correctAnswers = quiz.questions[currentQuestion]
         .answers.filter(a => a.correctAnswer === true).length
     if (userCorrectAnswers === 0) return 0
     return userCorrectAnswers / correctAnswers
 }

export const getItems = (users : IUser[]): IUserItem[] => {
    let listItems: IUserItem[] = []
    const temp = _.toArray(users)

    listItems = temp.map(current => {
        let item = Object.assign({}, current) as IUserItem
        item.list = 1
        return item 
    })
    
    return listItems
}


export const UserItemsToUsers = (items : IUserItem[]): IUser[] => {
  
    const users = items.map(item => {
        return {
            id: item.id,
            userId: item.userId,
            username: item.username,
            email: item.email
        }      
    })
    
    return users
}