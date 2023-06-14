import { ref } from 'vue'

// Referencia mutable (variable reactiva) que es un array vacío.
export const todos = ref([])

// Se actualiza automáticamente en la interfaz de usuario con la funcionalidad reactiva.
export function addNewTodo(todo) {
  todos.value.push(todo)
}

export function deleteTodo(todo) {
  // Con filter se comprueba si cada elemento del array todos no es igual al valor pasado como argumento.
  todos.value = todos.value.filter((el) => el !== todo)
}