import { createApp } from 'vue'
import VueMask from '@devindex/vue-mask';
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router).mount('#app')
app.use(VueMask);
