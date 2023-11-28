import * as Vue from 'vue';
import App from '@/App';
import router from '@/routes/route';

const { createApp } = Vue;

const app = createApp(App);
app.use(router);
app.mount('#app');
