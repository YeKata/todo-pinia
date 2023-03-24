<template>
  <div class="inputBox shadow">
    <input
      v-model="todo.todoText"
      type="text"
      class="textbox"
      @keyup.enter="todo.addTodoItem()"
    />
    <span class="addContainer hoverbtn" @click="todo.addTodoItem()">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </span>
    <ModalPage v-if="todo.showModal" @close="todo.showModal = false">
      <h3 slot="header">
        <div>
          경고!
          <font-awesome-icon
            :icon="['fas', 'x']"
            @click="todo.showModal = false"
          />
        </div>
      </h3>
      <h3 slot="body">값을 입력해주세요.</h3>
      <h3 slot="footer">굿이요</h3>
    </ModalPage>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/store/todo";
import ModalPage from "./common/ModalPage.vue";

const todo = useTodoStore();
</script>

<style scoped></style>
