import DashBoardView from '@/views/DashBoardView.vue'
import ListView from '@/views/tasks/ListView.vue'
import TableView from '@/views/tasks/TableView.vue'
import TasksView from '@/views/TasksView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoardView
    },
    {
      path: '/tasks',
      name: 'tasks',
      redirect: '/tasks/list',
      component: TasksView,
      children: [
        {
          path: 'list',
          name: 'task-list',
          component: ListView
        },
        {
          path: 'table',
          name: 'task-table',
          component: TableView
        }
      ]
    }
  ],
})

export default router
