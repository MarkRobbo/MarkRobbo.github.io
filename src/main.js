import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag';

createApp(App).use(VueGtag, {
    config: { id: 'G-BX1NW8PG3H' },
    pageTrackerScreenviewEnabled: true // I'm watching you 👀
}).mount('#app')
