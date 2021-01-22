<template>
  <div class="about">
    <todo
      v-for="todo in todos"
      v-show="todo.completed"
      :todo="todo"
      :key="todo.order"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todo from "@/components/Todo.vue";
import { namespace } from "vuex-class";
import TodoInterface from "@/interfaces/Todo";
const Todos = namespace("Todos");

@Component({
  components: {
    Todo
  }
})
export default class Completed extends Vue {
  @Todos.State
  public todos!: TodoInterface[];
}
</script>
