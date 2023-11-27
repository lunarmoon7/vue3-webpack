import * as Vue from 'vue';
import App from '@/App';
import store from '@/store';

const { createApp } = Vue;

const app = createApp(App);
app.use(store);
const vm = app.mount('#app');
