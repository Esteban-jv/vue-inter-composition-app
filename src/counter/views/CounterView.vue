<script setup lang="ts">
import { ref } from 'vue'

const current = ref(10)

const increment = () => {
  current.value += 1
}
</script>
<template>
  <div>
    <h2>Counter View</h2>
    <p>current: {{ current }}</p>

    <button @click="increment()">Increment 1</button>
  </div>
</template>
