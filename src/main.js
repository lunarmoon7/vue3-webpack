import * as Vue from 'vue';
import App from '@/App';
import store from '@/store';
import router from '@/routes/route';
import '@/routes/guards';

const { createApp } = Vue;

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
