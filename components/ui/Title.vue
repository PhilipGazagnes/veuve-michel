<script setup lang="ts">
interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

withDefaults(defineProps<Props>(), {
  level: 1
})
</script>

<template>
  <component
    :is="`h${level}`"
    class="font-raleway font-light"
    :class="[
      level === 1 && 'font-raleway',
      level === 2 && 'font-playball',
      level === 3 && '',
      level === 4 && '',
      level === 5 && '',
      level === 6 && ''
    ]"
  >
    <slot />
  </component>
</template>
