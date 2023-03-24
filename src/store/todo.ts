import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export interface Todo {
  title: string;
  done: boolean;
}

export const useTodoStore = defineStore("todo", () => {
  const todoText = ref("");
  const todoItems = reactive([]) as Todo[];
  const showModal = ref(false);

  const STORAGE_KEY = "vue-todo-ts-v1";
  const storage = {
    save(todoItems: Todo[]) {
      const parsed = JSON.stringify(todoItems);
      localStorage.setItem(STORAGE_KEY, parsed);
    },
    fetch(): Todo[] {
      const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
      const result = JSON.parse(todoItems);
      return result;
    },
  };

  const removeTodoItem = (index: number) => {
    console.log("remove", index);
    todoItems.splice(index, 1);
    storage.save(todoItems);
  };

  const updateTodoText = (value: string) => {
    todoText.value = value;
  };

  const addTodoItem = () => {
    if (todoText.value !== "") {
      const value = todoText.value;
      const todo: Todo = {
        title: value,
        done: false,
      };
      todoItems.push(todo);
      storage.save(todoItems);
      initTodoText();
    } else {
      showModal.value = !showModal.value;
    }
  };

  const initTodoText = () => {
    todoText.value = "";
  };

  //   const fetchTodoItems = () => {
  //     todoItems = storage.fetch().sort((a, b) => {
  //       if (a.title < b.title) {
  //         return -1;
  //       }
  //       if (a.title > b.title) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //   };

  const toggleTodoItemComplete = (todoItem: Todo, index: number) => {
    todoItems.splice(index, 1, {
      ...todoItem,
      done: !todoItem.done,
    });
    storage.save(todoItems);
  };

  const clearTodo = () => {
    localStorage.clear();
    todoItems.splice(0, todoItems.length);
  };

  return {
    todoText,
    todoItems,
    showModal,
    removeTodoItem,
    updateTodoText,
    addTodoItem,
    toggleTodoItemComplete,
    clearTodo,
  };
});
