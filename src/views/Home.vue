<template>
  <div class="home">
    <h1 class="mb-4 text-2xl font-bold">Welcome to Vue 3 Starter Project</h1>
    <a-button type="primary" @click="increment">Count is: {{ count }}</a-button>
    <p>Current date: {{ formattedDate }}</p>
    <i class="i-si:cf-vue text-56px"></i>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, toRefs } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { formatDate } from '@/utils/date';

const { count } = toRefs(useCounterStore());
const formattedDate = ref('');

const increment = () => {
  count.value++;
};

onMounted(() => {
  formattedDate.value = formatDate(new Date());
});
</script>
