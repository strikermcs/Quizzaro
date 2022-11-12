import _ from 'lodash'
import { IQuizDb, IAnswersResult, IResultDataTableItem  } from '@/interfaces/quiz.interfaces'

export const getResultTableData = (results: IAnswersResult[], quiz: IQuizDb): IResultDataTableItem[] => {
    
    const dataTable: IResultDataTableItem[] = []
    const questions = quiz.questions
  
    for(let i = 0; i < _.size(questions); i++ ){
      const answers = questions[i].answers.filter(a => a.correctAnswer != false)
      dataTable.push({
        question: questions[i].question,
        rigthAnswers: answers.map(a => a.answer).join(" "),
        userAnswers: results[i].answers.map(a => a.answer).join(" "),
        result: results[i].correctPercent 
      })
    }
    return dataTable
  } 