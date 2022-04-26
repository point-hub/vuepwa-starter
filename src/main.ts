import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './index.css';

import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
  onRegisterError(error) {},
});

const app = createApp(App);
app.use(router);
app.mount('#app');
