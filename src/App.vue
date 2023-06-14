<script setup>
import TodoList from './components/TodoList.vue';
import AddTodoButton from './components/AddTodoButton.vue';
// import { todos, addNewTodo, deleteTodo } from './reactiveStore.js';
import { useTodoListStore } from './piniaStore.js';

const store = useTodoListStore();

function handleAddNewTodo(todo) {
  if (todo) {
    // addNewTodo(todo);
    store.addNewTodo(todo);
  }
}

function handleDeleteTodo(todo) {
  // deleteTodo(todo);
  store.deleteTodo(todo);
}
</script>

<template>
  <div id="app">
    <h1>To Do List</h1>
    <!-- add-new-todo: evento personalizado que se maneja con handleAddNewTodo -->
    <AddTodoButton @add-new-todo="handleAddNewTodo" />
    <!-- delete-todo: evento personalizado que se maneja con handleDeleteTodo -->
    <!-- Con ":" se enlaza la propiedad todos del componente TodoList con la variable todos del componente padre -->
    <TodoList :todos=store.todos @delete-todo='handleDeleteTodo' />
  </div>
</template>

<style scoped>
#app {
  padding: 1rem 2rem 1rem 2rem;
  max-width: 30rem;
  margin: auto;
  background-color: white;
  border-radius: 1rem;
}

h1 {
  text-align: center;
}
</style>