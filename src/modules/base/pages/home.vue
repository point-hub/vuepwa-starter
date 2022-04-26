<script setup lang="ts">
interface Props {
  name: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: 'John Doe',
});
</script>

<template>
  <div>Home</div>
  <p>GGG {{ name }}</p>
</template>
