<script lang="ts" setup>
const device = useDevice()
</script>

<template>
  <div class="bg-blue-400 p-8 text-center font-bold">BOILERPLATE</div>
  <div class="bg-yellow-200 p-2">{{ device }}</div>
</template>
