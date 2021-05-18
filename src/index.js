import Vue from 'vue'
import App from './components/app/App.vue';
import { store } from './js/store';


new Vue({
    el: '#root',
    store,
    render: h => h(App)
});
