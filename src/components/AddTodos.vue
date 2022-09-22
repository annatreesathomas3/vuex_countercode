<template>
    <div>
        <h2>Add Todos</h2>
        <form @submit="onSubmit">
            <input type="text" v-model="title" placeholder="Add todo..">
            <input type="submit" value="submit">
        </form>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name:'AddTodos',
    data(){
        return{
            title:''
        }
    },
    methods:{
        ...mapActions(['addTodo']),
        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.title);
        }
    }
}
</script>

<style scoped>
input[type="submit"]{
    background-color: rgb(167, 130, 130);
    color: #fff;
    border: 1px rgb(229, 109, 129) solid;
}
</style>