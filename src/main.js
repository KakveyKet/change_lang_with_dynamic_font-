import { createApp } from 'vue'
import App from './App.vue'
import '../src/css/index.css';
import i18n from './composible/in18n';

const app = createApp(App);
app.use(i18n)
app.mount('#app')
