import * as Vue from 'vue';
import App from './App.vue';

const { createApp } = Vue;

const app = createApp(App);
const vm = app.mount('#app');
