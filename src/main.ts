import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './style/index.css'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';
const app = createApp(App);

app.use(Swipe);
app.use(SwipeItem);
createApp(App).use(store).use(router).mount('#app')
