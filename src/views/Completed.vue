<template>
  <div class="completed">
    <todo
      v-for="todo in todos"
      v-show="todo.completed"
      :todo="todo"
      :key="todo.order"
    />
    <blank-state v-show="!todosCompleted" status="completa" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todo from "@/components/Todo.vue";
import { namespace } from "vuex-class";
import TodoInterface from "@/interfaces/Todo";
const Todos = namespace("Todos");
import BlankState from "@/components/BlankState.vue";

@Component({
  components: {
    Todo,
    BlankState
  }
})
export default class Completed extends Vue {
  @Todos.State
  public todos!: TodoInterface[];

  get todosCompleted(): number {
    return this.todos.filter(todo => todo.completed === true).length;
  }
}
</script>
<style lang="scss" scoped>
.completed {
  width: 100%;
  overflow-y: auto;
}
</style>
