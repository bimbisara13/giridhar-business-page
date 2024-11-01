import { createApp } from 'vue';
import './assets/tailwind.css';
import App from './App.vue';
import 'aos/dist/aos.css';
import AOS from 'aos';

const app = createApp(App);

app.mount('#app');

AOS.init();