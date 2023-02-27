<template>
  <div class="app-header">header</div>
</template>

<script setup lang="ts">
interface IProps {
  title: string
}

const props = withDefaults(defineProps<IProps>(), {
  title: ''
})
</script>

<style scoped></style>
