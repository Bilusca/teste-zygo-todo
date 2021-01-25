<template>
  <div id="app">
    <div class="container">
      <Header />
      <create-todo />
      <router-view />
      <Footer />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import CreateTodo from "@/components/CreateTodo.vue";
import Footer from "@/components/Footer.vue";
import Header from "./components/Header.vue";
const Todos = namespace("Todos");

@Component({
  components: {
    CreateTodo,
    Footer,
    Header
  }
})
export default class App extends Vue {
  @Todos.Action
  public getTodos!: () => void;

  mounted() {
    this.getTodos();
  }
}
</script>

<style lang="scss">
@import "@/styles/mq.scss";

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.container {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgba(204, 204, 204, 0.6);
  border-radius: 15px;
  padding: 15px;
  background: #fff;
  box-shadow: 0px 0px 15px 10px rgba(204, 204, 204, 0.6);
  max-height: 90%;

  @include mq($until: tablet) {
    width: 95%;
  }
}
</style>
