<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register';

const intervalMS = 60 * 1000;

const updateSW = registerSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update();
        console.log('sw r updated');
      }, intervalMS);
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
</script>

<template>
  <button class="text-xl border">update</button>
</template>
