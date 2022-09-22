<template>
  <div id="app">
    <AddTodos/><br/>
    <FilterTodos/>
    <TodoItem/>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import AddTodos from "./components/AddTodos.vue";
import FilterTodos from "./components/FilterTodos.vue"

export default {
  name: 'app',
  components: {
    TodoItem,
    AddTodos,
    FilterTodos
  }
}
</script>

<style>
body{
  background-color:rgb(250, 237, 200);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
