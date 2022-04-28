<script setup lang="ts">
interface Props {
  name: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: 'John Doe',
});

addEventListener('load', async () => {
  let sw = await navigator.serviceWorker.register('./sw.js');
  console.log(sw);
});

const subscribe = async () => {
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManaget.subscribe({
    userVisibleOnly: true,
    applicationServerKey:
      'BG4xOT-4Jk4fbY6RKe7CrsXYXAVi9jpG2WLfW48mXu0ci22gS5ApJYUR00lvFKR0RhArecYDHphGw_0WXptwfaM',
  });
  console.log(JSON.stringify(push));
};
</script>

<template>
  <div>Home</div>
  <p>Hello {{ name }}</p>
  <button @click="subscribe()">subscribe</button>
</template>
