import { IAnswer } from "@/interfaces/quiz.interfaces"
import { useNotificationStore } from "@/store/notification"

export const validateAnswers = (answers: IAnswer[]): boolean => {
    const notify = useNotificationStore()
    let correctAnswers = 0
    let emptyFields = 0
    answers.forEach(answer => {
       
        if(answer.answer.trim().length === 0) {
           emptyFields++
        }
        if(answer.correctAnswer){
            correctAnswers++
        }
    })

    if(emptyFields > 0) {
        notify.SetNofication('Error', 'AnswersFieldsDontBeEmpty', 'error')
        return false
    }
    if (correctAnswers === 0){
        notify.SetNofication('Error', 'OneAnswerMustBeRigth', 'error')
        return false
    }

    return true
} 

