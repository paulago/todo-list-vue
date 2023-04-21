<script setup>
import { ref } from 'vue';
import TodoList from './components/TodoList.vue';
import AddTodoButton from './components/AddTodoButton.vue';

// Referencia mutable (variable reactiva) que es un array vacío.
const todos = ref([])

// Se actualiza automáticamente en la interfaz de usuario con la funcionalidad reactiva.
function handleAddNewTodo(todo) {
  if (todo) {
    todos.value.push(todo)
  }
}

function handleDeleteTodo(todo) {
  // Con filter se comprueba si cada elemento del array todos no es igual al valor pasado como argumento.
  todos.value = todos.value.filter(el => el !== todo);
}
</script>

<template>
  <div id="app">
    <h1>To Do List</h1>
    <!-- add-new-todo: evento personalizado que se maneja con handleAddNewTodo -->
    <AddTodoButton @add-new-todo="handleAddNewTodo" />
    <!-- delete-todo: evento personalizado que se maneja con handleDeleteTodo -->
    <!-- Con ":" se enlaza la propiedad todos del componente TodoList con la variable todos del componente padre -->
    <TodoList :todos=todos @delete-todo='handleDeleteTodo' />
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