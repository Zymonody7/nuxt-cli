<template>
  <div class="app-footer">footer</div>
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
