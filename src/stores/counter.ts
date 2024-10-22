import { ref } from 'vue';

export function useCounterStore() {
  const count = ref(0);

  return { count };
}
