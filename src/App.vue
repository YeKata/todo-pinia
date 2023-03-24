<template>
  <div>
    <TodoHeader />
    <TodoInput />
    <TodoListItem />
    <TodoFooter />
  </div>
</template>

<script setup lang="ts">
import TodoInput from "./components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
</script>

<style>
@import "./assets/todo.css";
</style>
