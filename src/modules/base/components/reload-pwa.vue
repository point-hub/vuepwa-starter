<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue';

const reloadSW: any = '__RELOAD_SW__';

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegistered(r) {
    console.log(reloadSW);
    if (reloadSW === 'true' && r) {
      console.log(r);
      setInterval(async () => {
        // eslint-disable-next-line no-console
        console.log('Checking for sw update');
        await r.update();
      }, 1000 /* 1s for testing purposes */);

      setInterval(async () => {
        // eslint-disable-next-line no-console
        console.log('sw force update');
        updateServiceWorker();
      }, 5000 /* ss for testing purposes */);
    } else {
      // eslint-disable-next-line no-console
      console.log(`SW Registered: ${r}`);
    }
  },
  onNeedRefresh() {
    console.log('sw need refresh');
  },
  onOfflineReady() {
    console.log('sw offline ready');
  },
  onRegisterError(error) {
    console.log('sw error ' + error);
  },
});

const close = async () => {
  offlineReady.value = false;
  needRefresh.value = false;
};
</script>

<template>
  <div v-if="offlineReady || needRefresh" class="pwa-toast" role="alert">
    <div class="message">
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else>
        New content available, click on reload button to update.
      </span>
    </div>
    <button v-if="needRefresh" @click="updateServiceWorker()">Reload</button>
    <button @click="close">Close</button>
  </div>
</template>

<style scoped>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0px #8885;
}
.pwa-toast .message {
  margin-bottom: 8px;
}
.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>
