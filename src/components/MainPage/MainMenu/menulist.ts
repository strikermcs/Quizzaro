import { EditPen, MessageBox } from '@element-plus/icons-vue'

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
    }

]