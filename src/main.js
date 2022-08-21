import { createApp } from 'vue';
import { Quasar } from 'quasar';
import { initializeApp } from 'firebase/app';

import router from './router';
import store from './store';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

// Import Quasar Plugins
import Notify from '../node_modules/quasar/src/plugins/Notify';

import App from './App.vue';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyB9JJr6j9nNq04HqYfrdA7kKCXkWSdLNZk',
  authDomain: 'real-home-authentication-5f627.firebaseapp.com',
  projectId: 'real-home-authentication-5f627',
  storageBucket: 'real-home-authentication-5f627.appspot.com',
  messagingSenderId: '319424790358',
  appId: '1:319424790358:web:b9c750c5c76724850ae0f7',
  measurementId: 'G-KL5GJFX30H',
});

const myApp = createApp(App).use(router).use(store).use(firebaseApp);
myApp.use(Quasar, {
  plugins: {
    Notify,
  }, // import Quasar plugins and add here
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app');
