<template>
  <div>
    <h3>Todos List</h3>
    <div class="lengend">
      <span>Double click to mark as complete</span>&nbsp;
      <span> <span class="incomplete-box"></span>=Incomplete </span>&nbsp;
      <span> <span class="complete-box"></span>=Complete </span>
    </div>
    <div class="todos">
      <div
        @dblclick="onDblClick(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        :class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }}
        <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name:"TodoItem",
    methods:{
    ...mapActions(['fetchTodos','deleteTodo',"updateTodo"]),
    onDblClick(todo){
        const updTodo = {
            id:todo.id,
            title:todo.title,
            completed: !todo.completed
        }  
        this.updateTodo(updTodo);
        }
    },
    computed: mapGetters(["allTodos"]),
    created(){
        this.fetchTodos();
    }

}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: rgb(243, 186, 100);
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: darksalmon;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: rgb(243, 186, 100);
}
.is-complete {
  background-color: darksalmon;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>