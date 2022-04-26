import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './index.css';

import { registerSW } from 'virtual:pwa-register';

const intervalMS = 60 * 1000;

const updateSW = registerSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update();
      }, intervalMS);
  },
  onNeedRefresh() {},
  onOfflineReady() {},
  onRegisterError(error) {},
});

const app = createApp(App);
app.use(router);
app.mount('#app');
