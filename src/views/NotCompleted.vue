<template>
  <div class="not-completed">
    <todo
      v-for="todo in todos"
      v-show="!todo.completed"
      :todo="todo"
      :key="todo.order"
    />
    <blank-state v-show="!todosIncomplete" status="incompleta" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todo from "@/components/Todo.vue";
import { namespace } from "vuex-class";
import TodoInterface from "@/interfaces/Todo";
import BlankState from "@/components/BlankState.vue";
const Todos = namespace("Todos");

@Component({
  components: {
    Todo,
    BlankState
  }
})
export default class NotCompleted extends Vue {
  @Todos.State
  public todos!: TodoInterface[];

  get todosIncomplete(): number {
    return this.todos.filter(todo => todo.completed === false).length;
  }
}
</script>
<style lang="scss" scoped>
.not-completed {
  width: 100%;
  overflow-y: auto;
}
</style>
