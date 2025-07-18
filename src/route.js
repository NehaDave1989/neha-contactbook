import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from './pages/DashboardView.vue'
import CreateContact from './pages/CreateContact.vue'
import EditContact from './pages/EditContact.vue'
import ContactDetails from './pages/ContactDetails.vue'

const routes = [
    { path: '/', component: DashboardView },
    { path: '/add', component: CreateContact },
    { path: '/contact/:cid', component: ContactDetails },
    { path: '/modify/:cid', component: EditContact }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
