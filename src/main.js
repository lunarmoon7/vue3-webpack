import * as Vue from 'vue';
import App from '@/App';

const { createApp } = Vue;

const app = createApp(App);
const vm = app.mount('#app');
