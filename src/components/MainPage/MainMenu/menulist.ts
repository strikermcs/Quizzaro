import { 
    EditPen, 
    MessageBox, 
    ArrowUpBold,
    ArrowDownBold,
    DocumentCopy
} from '@element-plus/icons-vue'

export const menuList = [
    
    {
        id: '1',
        title: 'MainMenuCreateQuiz',
        icon: EditPen,
        route: {name: 'create-quiz'}
    },

    {
        id: '2',
        title: 'MainMenuMyQuizes',
        icon: MessageBox,
        route: {name: 'my-quizes'}
    },

    {
        id: '3',
        title: 'MainMenuSendQuizes',
        icon: ArrowUpBold,
        route: {name: 'sent'}
    },

    {
        id: '4',
        title: 'MainMenuIncomeQuizes',
        icon: ArrowDownBold,
        route: {name: 'income'} 
    },

    {
        id: '5',
        title: 'MainMenuAllQuizes',
        icon: DocumentCopy,
        route: {name: 'all'} 
    }

]