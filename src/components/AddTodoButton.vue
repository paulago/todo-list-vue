<script setup>
import { ref } from 'vue';

// Esta función crea una lista de eventos personalizados que un componente puede emitir y que otros componentes pueden escuchar. 
const emit = defineEmits(['addNewTodo']);

// Referencia mutable que es un string vacío que se utiliza para almacenar el valor del input.
const newTodo = ref('');

// Emite un evento personalizado (addNewTodo) y pasa el valor del input como argumento.
// Este evento personalizado se maneja en el componente padre y agrega la tarea a la lista de tareas.
function handleAddNewTodo() {
  emit('addNewTodo', newTodo.value);
  newTodo.value = '';
}
</script>

<template>
  <div class="add-todo-container">
    <!-- v-model enlaza el input con la variable newTodo, por lo que cualquier cambio en el input se reflejará automáticamente en la variable newTodo. -->
    <input type="text" id="new-todo-input" name="new-todo" placeholder="Write your task..." v-model="newTodo" />
    <!-- @click se usa para manejar eventos de clic -->
    <button class="add-todo-btn" @click="handleAddNewTodo">+</button>
  </div>
</template>

<style scoped>

.add-todo-container {
  display: flex;
  justify-content: center;
  position: relative;
}

#new-todo-input {
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: rgb(222, 222, 222);
  padding: 1rem;
  width: 95%;
}

.add-todo-btn {
  font-size: 2.5rem;
  color: rgb(66, 203, 199);
  border: 0;
  padding: 0;
  cursor: pointer;
  position: absolute;
  right: 0;
  height: 100%;
  background-color: transparent;
  padding-right: 1rem;
}
</style>
