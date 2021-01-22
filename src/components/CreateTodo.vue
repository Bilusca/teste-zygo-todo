<template>
  <div>
    <input :value="title" @change="onChangeTitle($event.target.value)" />
    <button @click="onSubmit()">criar</button>
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
    this.postTodo(this.title);
  }
}
</script>

<style scoped lang="scss"></style>
