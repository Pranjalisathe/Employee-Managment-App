import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Update from './components/Update.vue'
import Delete from './components/Delete.vue'
import Validation from './components/Validation.vue'
import Add1 from './components/Add1.vue'
import Add from './components/Add.vue'
import PaginDz from './components/PaginDz.vue'

import Form from './components/Form.vue'
// import TutorialsList from './components/TutorialsList.vue'
import Home2 from './components/Home2.vue'
import PaginationComponent from './components/PaginationComponent'

import { createRouter ,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/home'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/'
    },
    // {
    //     name:'LogOut',
    //     component:LogOut,
    //     path:'/logout'
    // },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'Add1',
        component:Add1,
        path:'/add1/:id'
    },
  
    {
        name:'Update',
        component:Update,
        path:'/Update/:id'

    },
    {
        name:'Delete',
        component:Delete,
        path:'/delete/:id'

    },
    {
        name:'Validation',
        component:Validation,
        path:'/validation'

    },
    {
        name:'Home2',
        component:Home2,
        path:'/home2'

    },
    {
        name:'Form',
        component:Form,
        path:'/form'

    },
    {
        name:'PaginDz',
        component:PaginDz,
        path:'/paginDz'

    },
    {
        name:'PaginationComponent',
        component:PaginationComponent,
        path:'/paginationComponent'

    },
  
    // {
    //     name:'Update',
    //     component:Update,
    //     path:'/update'
    // },

]

const router=createRouter({
    history:createWebHistory(),
    routes
})


export default router
