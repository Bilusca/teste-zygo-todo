<template>
  <div>
    <p v-if="!isEdit">{{ title }}</p>
    <input
      v-if="isEdit"
      :value="title"
      @change="handleTitle($event.target.value)"
    />
    <button v-if="!isEdit" @click="handleIsEdit()">edit</button>
    <button v-if="isEdit" @click="handleEdit()">save</button>
    <button @click="handleCompleted()">set true</button>
    <button @click="handleDelete()">delete item</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoInterface from "@/interfaces/Todo";
import { namespace } from "vuex-class";
const Todos = namespace("Todos");

@Component
export default class Todo extends Vue {
  @Prop() private todo!: TodoInterface;

  private isEdit = false;
  private title = this.todo.title;

  @Todos.Action
  public setCompletedTodo!: (todo: TodoInterface) => void;

  @Todos.Action
  public deleteTodo!: (todo: TodoInterface) => void;

  @Todos.Action
  public editTodo!: (todo: TodoInterface) => void;

  public handleCompleted() {
    this.setCompletedTodo(this.todo);
  }

  public handleDelete() {
    this.deleteTodo(this.todo);
  }

  public handleIsEdit() {
    this.isEdit = !this.isEdit;
  }

  public handleTitle(title: string) {
    this.title = title;
  }

  public handleEdit() {
    const order = this.todo.order;
    const url = this.todo.url;
    this.editTodo({ title: this.title, order, url });
    this.handleIsEdit();
  }
}
</script>

<style scoped lang="scss"></style>
