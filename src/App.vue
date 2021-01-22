<template>
  <div id="app">
    <create-todo />
    <router-view />
    <div id="nav">
      <router-link to="/">Todas as Tarefas</router-link> |
      <router-link to="/incompletas">Tarefas incompletas</router-link> |
      <router-link to="/completas">Tarefas completas</router-link>
      <button @click="handleDeleteAll()">delete all completed</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import CreateTodo from "@/components/CreateTodo.vue";
const Todos = namespace("Todos");

@Component({
  components: {
    CreateTodo
  }
})
export default class App extends Vue {
  @Todos.Action
  public getTodos!: () => void;

  @Todos.Action
  public deleteAll!: () => void;

  public handleDeleteAll() {
    this.deleteAll();
  }

  mounted() {
    this.getTodos();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
