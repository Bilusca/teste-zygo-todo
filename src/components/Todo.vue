<template>
  <div class="todo-item" :class="{ 'item-completed': todo.completed }">
    <button
      class="action-button "
      :class="{ 'complete-task': todo.completed }"
      @click="handleCompleted()"
    >
      <v-icon icon="check"></v-icon>
    </button>
    <div class="task">
      <p v-if="!isEdit">{{ title }}</p>
      <input
        v-if="isEdit"
        :value="title"
        @change="handleTitle($event.target.value)"
        @keyup.enter="handleTitle($event.target.value)"
      />
    </div>

    <div v-if="!isEdit" class="action-buttons">
      <button
        v-if="!todo.completed"
        class="action-button edit-task"
        @click="handleIsEdit()"
      >
        <v-icon icon="edit"></v-icon>
      </button>
      <button class="action-button remove-task" @click="handleDelete()">
        <v-icon icon="trash-alt"></v-icon>
      </button>
    </div>

    <div v-if="isEdit" class="action-buttons">
      <button class="action-button complete-task" @click="handleEdit()">
        <v-icon icon="save"></v-icon>
      </button>
      <button class="action-button remove-task" @click="handleIsEdit()">
        <v-icon icon="times"></v-icon>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoInterface from "@/interfaces/Todo";
import { namespace } from "vuex-class";
const Todos = namespace("Todos");

@Component
export default class Todo extends Vue {
  @Prop({ required: true }) private todo!: TodoInterface;

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

<style scoped lang="scss">
.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(204, 204, 204, 0.6);
  border-radius: 15px;
  box-shadow: 0px 0px 5px 3px rgba(204, 204, 204, 0.6);
  margin-bottom: 20px;

  &.item-completed {
    p {
      text-decoration: line-through;
    }

    .action-button:disabled {
      background: rgba(204, 204, 204, 0.6);
    }
  }

  p {
    margin: 0;
  }

  input {
    width: 100%;
    background: rgba(204, 204, 204, 0.1);
    border: 1px solid rgba(204, 204, 204, 0.6);
    border-radius: 8px;
    outline: none;
    padding: 3px 10px;
    font-size: 16px;
    color: #343434;
    font-weight: 500;
    transition: ease-in 0.3s all;

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

  .task {
    flex: 1;
    margin: 0 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .action-buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    button:last-child {
      margin-left: 10px;
    }
  }

  .action-button {
    padding: 5px 10px;
    font-size: 16px;
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

    &:active {
      box-shadow: none;
    }

    &.complete-task {
      color: #28a745;
    }

    &.remove-task {
      color: #dc3545;
    }
  }
}
</style>
