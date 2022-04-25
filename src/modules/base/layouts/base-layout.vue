<script setup lang="ts">
import BaseHeader from '../components/base-header.vue';
import BaseSidebar from '../components/base-sidebar.vue';
import BaseFooter from '../components/base-footer.vue';
</script>

<template>
  <div class="w-screen h-screen flex flex-col p-4 space-y-3">
    <div class="">
      <component :is="BaseHeader" />
    </div>
    <div class="flex flex-1 space-x-5">
      <component :is="BaseSidebar" />
      
      <div class="">
        <router-view></router-view>
      </div>
    </div>
    <div class="">
      <component :is="BaseFooter" />
    </div>
  </div>
</template>