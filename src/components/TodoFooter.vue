<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn hoverbtn" @click="todo.clearTodo()"
      >Clear All</span
    >
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/store/todo";

const todo = useTodoStore();
</script>

<style scoped></style>
