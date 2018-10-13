import MainView from './components/MainView.vue'
import Home from './components/Home.vue'

export const routes = [
    { path: "", component: Home },
    { path: "/main", component: MainView }
]