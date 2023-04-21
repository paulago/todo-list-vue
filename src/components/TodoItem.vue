<script setup>

// Emite un evento personalizado (deleteTodoItem), que se utiliza para notificar al componente padre (TodoList) que esta tarea específica debe eliminarse de la lista.
const emit = defineEmits(['deleteTodoItem']);

// TodoItem recibe una propiedad (todoText) desde el componente padre TodoList, y esta propiedad es definida en el componente hijo utilizando el método defineProps().
const props = defineProps({
  todoText: {
    type: String,
    required: true,
  }
});

// Se utiliza emit para emitir el evento personalizado "deleteTodoItem" junto con el texto de la tarea actual (props.todoText).
function handleDeleteTodoItem() {
  emit('deleteTodoItem', props.todoText);
}
</script>

<template>
  <div class='todo-container'>
    <p> {{props.todoText}}</p>
    <button class='delete-btn' @click='handleDeleteTodoItem'>X</button>
  </div>
</template>

<style scoped>
  .todo-container {
    display: flex;

  }

  .delete-btn {
    color: red;
    border: none;
    background-color: transparent;
  }

  p {
    padding: 4px;
    margin: 0;
  }
</style>