<script setup lang="ts">
import { defineComponent } from 'vue';
import ReloadPWA from './modules/base/components/reload-pwa.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <component :is="ReloadPWA" />
  <router-view />
</template>
