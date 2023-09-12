import { createRouter, createWebHistory } from 'vue-router'
import AddContact from '../views/ContactList.vue'
import ContactList from '../views/AddContact.vue'

const routes = [
  {
    path: '/',
    name: 'ContactList',
    component: ContactList
  },
  {
    path: '/add_contact',
    name: 'AddContact',
    component: AddContact
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
