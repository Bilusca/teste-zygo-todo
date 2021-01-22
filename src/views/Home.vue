<template>
  <div class="home">
    <todo v-for="todo in todos" :todo="todo" :key="todo.order" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todo from "@/components/Todo.vue"; // @ is an alias to /src
import { namespace } from "vuex-class";
import TodoInterface from "@/interfaces/Todo";
const Todos = namespace("Todos");

@Component({
  components: {
    Todo
  }
})
export default class Home extends Vue {
  @Todos.State
  public todos!: TodoInterface[];
}
</script>
