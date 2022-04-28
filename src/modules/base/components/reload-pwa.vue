<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue';

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegistered(r) {
    r &&
      setTimeout(async () => {
        // auto update sw to show need refresh immediatelly
        await r.update();
      }, 60 * 1000);
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
  @apply fixed right-0 bottom-0 m-[16px] p-[12px] rounded-[4px] z-[1] text-left border border-solid border-[#888];
  box-shadow: 3px 4px 5px 0px #8885;
}

.pwa-toast .message {
  @apply mb-[8px];
}

.pwa-toast button {
  @apply outline-none mr-[5px] rounded-[2px] py-[3px] px-[10px] border border-solid border-[#888];
}
</style>
