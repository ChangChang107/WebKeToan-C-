import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheNavbar from './components/layout/TheNavbar.vue'
import EmployeeList from './components/layout/EmployeeList.vue'
import TheMain from './components/layout/TheMain.vue'
import HomePage from './page/HomePage.vue'
import OverviewPage from './page/OverviewPage.vue'
import TheDropdown from './components/base/dropdown/TheDropdown.vue'
import DialogEmployee from './components/base/DialogEmployee.vue'
import {createRouter, createWebHistory} from 'vue-router'

const app = createApp(App)

// Định nghĩa các router
const routers = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/overview',
        name: 'overview',
        component: OverviewPage
    },
]

//khởi tạo router
const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

//Đăng ký các router vào app
app.use(router);

app.component("TheHeader", TheHeader)
app.component("TheNavbar", TheNavbar)
app.component("EmployeeList", EmployeeList)
app.component("TheMain", TheMain)
app.component("TheDropdown", TheDropdown)
app.component("DialogEmployee", DialogEmployee)
app.component("HomePage", HomePage)
app.component("OverviewPage", OverviewPage)
app.mount('#app')
