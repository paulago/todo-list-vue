import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useTodoListStore = defineStore('todos', () => {
    const todos = ref([])

// Se actualiza automáticamente en la interfaz de usuario con la funcionalidad reactiva.
    function addNewTodo(todo) {
  todos.value.push(todo)
}

    function deleteTodo(todo) {
  // Con filter se comprueba si cada elemento del array todos no es igual al valor pasado como argumento.
  todos.value = todos.value.filter((el) => el !== todo)
}

    return {
        todos,
        addNewTodo,
        deleteTodo
    }
});