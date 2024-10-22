<template>
  <div class="home">
    <h1 class="text-2xl font-bold mb-4">Welcome to Vue 3 Starter Project</h1>
    <a-button type="primary" @click="increment">Count is: {{ count }}</a-button>
    <p>Current date: {{ formattedDate }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { formatDate } from '@/utils/date'

const counterStore = useCounterStore()
const count = ref(counterStore.count)
const formattedDate = ref('')

const increment = () => {
  counterStore.increment()
  count.value = counterStore.count
}

onMounted(() => {
  formattedDate.value = formatDate(new Date())
})
</script>