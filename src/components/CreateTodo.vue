<template>
  <div class="create-todo">
    <input
      placeholder="Adicione uma tarefa"
      :value="title"
      @change="onChangeTitle($event.target.value)"
      @keyup.enter="onSubmit()"
    />
    <button @click="onSubmit()">Adicionar</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Todos = namespace("Todos");

@Component
export default class CreateTodo extends Vue {
  private title = "";

  @Todos.Action
  public postTodo!: (title: string) => void;

  public onChangeTitle(valeu: string): void {
    this.title = valeu;
  }

  public onSubmit() {
    if (!this.title) {
      return;
    }

    this.postTodo(this.title);
    this.title = "";
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/mq.scss";

.create-todo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid rgba(204, 204, 204, 0.6);
  border-radius: 15px;
  box-shadow: 0px 0px 5px 5px rgba(204, 204, 204, 0.6);
  margin-bottom: 20px;

  input {
    width: 75%;
    background: rgba(204, 204, 204, 0.1);
    border: 1px solid rgba(204, 204, 204, 0.6);
    border-radius: 8px;
    outline: none;
    padding: 5px;
    font-size: 16px;
    color: #343434;
    font-weight: 500;
    transition: ease-in 0.3s all;
    margin-right: 15px;

    &::placeholder {
      font-size: 16px;
      font-style: italic;
      font-weight: 500;
      color: #ccc;
    }

    &:focus,
    &:active {
      border-color: rgba(137, 44, 220, 0.6);
      box-shadow: 0px 0px 5px 1px rgba(137, 44, 220, 0.6);
    }
  }

  button {
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    color: #343434;
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.6);
    border-radius: 8px;
    text-align: center;
    outline: none;
    transition: ease-in 0.3s all;

    &:hover {
      border-color: rgba(137, 44, 220, 0.6);
      box-shadow: 0px 0px 5px 1px rgba(137, 44, 220, 0.6);
    }

    &:active {
      box-shadow: none;
    }
  }
}
</style>
