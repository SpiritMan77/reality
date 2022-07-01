import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import "/node_modules/primeflex/primeflex.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createApp(App).use(store).use(router).use(PrimeVue).mount('#app')
App.component('Menubar', Menubar);
App.component('Card', Card);
