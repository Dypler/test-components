import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import HomePage from '@home/HomePage.vue'
import EventsPage from '@events/EventsPage.vue'
import NewsPage from '@news/NewsPage.vue'
import CoursesPage from '@courses/СoursesPage.vue'
import HelpPage from '@help/HelpPage.vue'
import NewsPageItem from '@news/NewsPageItem.vue'
import CoursesPageItem from '@courses/CoursesPageItem.vue'

import './assets/main.scss'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/events', name: 'Events', component: EventsPage },
  { path: '/news', name: 'News', component: NewsPage },
  { path: '/news/id', name: 'NewsItem', component: NewsPageItem },
  { path: '/courses', name: 'Courses', component: CoursesPage },
  { path: '/courses/id', name: 'CoursesItem', component: CoursesPageItem },
  { path: '/help', name: 'Help', component: HelpPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
const app = createApp(App).use(createPinia()).use(router).use(Antd).use(autoAnimatePlugin)

app.mount('#app')
