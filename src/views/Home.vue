<template>
  <div class="home">
    <div v-if="todosLength > 0">
      <todo v-for="todo in todos" :todo="todo" :key="todo.order" />
    </div>
    <div v-else class="blank-state-home">
      <span class="message">😄</span>
      <p>Organize já suas tarefas.</p>
    </div>
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

  get todosLength(): number {
    return this.todos.length;
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  overflow-y: auto;
}

.blank-state-home {
  width: 100%;
  height: 200px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  border: 1px solid rgba(204, 204, 204, 0.6);
  border-radius: 15px;
  box-shadow: 0px 0px 5px 3px rgba(204, 204, 204, 0.6);

  .message {
    font-size: 50px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    color: #343434;
  }
}
</style>
