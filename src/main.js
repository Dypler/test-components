import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { DatePicker } from 'ant-design-vue'

import HomePage from './pages/Home/HomePage.vue'
import EventsPage from './pages/Events/EventsPage.vue'
import NewsPage from './pages/News/NewsPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/events', name: 'Events', component: EventsPage },
  { path: '/news', name: 'News', component: NewsPage }
  // { path: '/courses', name: 'Courses', component: CoursesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
const app = createApp(App).use(DatePicker).use(createPinia()).use(router)

app.mount('#app')
