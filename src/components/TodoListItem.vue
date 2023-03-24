<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in todo.todoItems"
        :key="todoItem.title"
        class="shadow"
      >
        <div>
          <font-awesome-icon
            class="checkBtn iconsize"
            :class="{ checkBtnCompleted: todoItem.done }"
            :icon="['fas', 'square-check']"
            @click="todo.toggleTodoItemComplete(todoItem, index)"
          />
        </div>
        <span :class="{ textCompleted: todoItem.done }">{{
          todoItem.title
        }}</span>
        <span class="removeBtn" @click="todo.removeTodoItem(index)">
          <div class="hoverbtn">
            <font-awesome-icon
              class="iconsize"
              :icon="['fas', 'trash-can']"
              @click="todo.showModal = false"
            />
          </div>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/store/todo";

const todo = useTodoStore();
</script>

<style scoped></style>
