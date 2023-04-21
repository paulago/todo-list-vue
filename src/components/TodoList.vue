<script setup>
import TodoItem from './TodoItem.vue';

// Esta función crea una lista de eventos personalizados que un componente puede emitir y que otros componentes pueden escuchar.
const emit = defineEmits(['deleteTodo']);

// El objeto props espera que el componente padre (TodoApp) pase un array de objetos que representan las tareas (todos).
const props = defineProps({
  todos: {
    type: Object,
    required: true,
  },
});

// handleDeleteTodo emite un evento personalizado (deleteTodo), que se utiliza para notificar al componente padre (TodoApp) que una tarea específica debe eliminarse de la lista.
function handleDeleteTodo(todoText) {
  emit('deleteTodo', todoText);
}

</script>

<template>
  <div class='todo-list-container'>
    <ul class='todo-list'>
      <!-- v-for: para generar la lista de tareas a partir de los elementos en el array todos -->
      <!-- :key="index": para rastrear la posición y el orden de los elementos de la lista y actualizarlos de manera eficiente cuando hay cambios -->
      <!-- v-bind: para enlazar la tarea actual con el componente TodoItem a través de la prop todo-text -->
      <TodoItem v-for="todo in props.todos" :key="todo" :todo-text="todo" @delete-todo-item='handleDeleteTodo'></TodoItem>
    </ul>
  </div>
</template>

<style scoped>
  .todo-list {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 16px;
  }
</style>