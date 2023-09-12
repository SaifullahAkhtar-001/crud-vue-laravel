import { createRouter, createWebHistory } from 'vue-router'
import AddContact from '../views/AddContact.vue'
import ContactList from '../views/ContactList.vue'
import EditContact from '../views/EditContact.vue'

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
  {
    path: '/contact/edit/:id?',
    name: 'EditContact',
    component: EditContact
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
