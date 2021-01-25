<template>
  <footer class="footer">
    <div class="nav">
      <router-link to="/">Tarefas</router-link>
      <router-link to="/incompletas">Incompletas</router-link>
      <router-link to="/completas">Completas</router-link>
    </div>
    <button @click="handleDeleteAll()">Deletar tarefas completas</button>
  </footer>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Todos = namespace("Todos");

@Component
export default class Footer extends Vue {
  @Todos.Action
  public deleteAll!: () => void;

  public handleDeleteAll() {
    this.deleteAll();
  }
}
</script>
<style scoped lang="scss">
@import "@/styles/mq.scss";

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;

  @include mq($until: tablet) {
    flex-direction: column;
  }

  p {
    font-size: 14px;
    font-weight: bold;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #343434;
      font-weight: bold;
      font-size: 14px;
      margin-right: 10px;
      text-decoration: none;

      @include mq($until: tablet) {
        &:last-child {
          margin: 0;
        }
      }

      &:hover {
        color: lighten(#892cdc, 15%);
      }

      &.router-link-exact-active {
        color: #892cdc;
      }
    }
  }

  button {
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
    color: #343434;
    background: transparent;
    border: 1px solid rgba(204, 204, 204, 0.6);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    transition: ease-in 0.3s all;

    &:hover {
      border-color: rgba(137, 44, 220, 0.6);
      box-shadow: 0px 0px 5px 1px rgba(137, 44, 220, 0.6);
    }

    @include mq($until: tablet) {
      margin-top: 15px;
    }
  }
}
</style>
