import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/Home/HomePage.vue'
import EventsPage from './pages/Events/EventsPage.vue'
import NewsPage from './pages/News/NewsPage.vue'
// import CoursesPage from './pages/Courses/CoursesPage.vue'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
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

app.use(router)
app.mount('#app')
