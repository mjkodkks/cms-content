<template>
  <q-page class="row items-center justify-evenly">
    homepage
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import { ref } from 'vue';

console.log(process.env)
console.log(import.meta.env)
const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
]);
const meta = ref<Meta>({
  totalCount: 1200
});
</script>
