import TodoInterface from "@/interfaces/Todo";
import TodoService from "@/services/todo.service";
import store from "@/store";
import getId from "@/utils/get-id";
import { findIndex, forEach, maxBy } from "lodash";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({ store, namespaced: true })
class Todos extends VuexModule {
  private todoService = new TodoService();
  public todos: TodoInterface[] = [];

  @Mutation
  public GET_TODOS(todos: TodoInterface[]): void {
    this.todos = todos;
  }

  @Mutation
  public POST_TODO(todo: TodoInterface): void {
    this.todos = [...this.todos, todo];
  }

  @Mutation
  public SET_COMPLETED_TODO(todo: TodoInterface): void {
    const todoIndex = findIndex(this.todos, { order: todo.order });

    this.todos[todoIndex].completed = true;
  }

  @Mutation
  public DELETE_TODO(todo: TodoInterface): void {
    this.todos = this.todos.filter(t => t.order !== todo.order);
  }

  @Mutation
  public DELETE_ALL(): void {
    this.todos = this.todos.filter(todo => todo.completed !== true);
  }

  @Mutation
  public EDIT_TODO(todo: TodoInterface): void {
    const todoIndex = findIndex(this.todos, { order: todo.order });

    this.todos[todoIndex] = { ...todo };
  }

  @Action
  public async getTodos(): Promise<void> {
    const { data } = await this.todoService.getTodos();

    this.context.commit("GET_TODOS", data);
  }

  @Action
  public async postTodo(title: string): Promise<void> {
    const max: TodoInterface | undefined = maxBy(this.todos, "order");

    let newOrder: number;

    if (typeof max === "object") {
      newOrder = max?.order + 1;
    } else {
      newOrder = 1;
    }

    const { data } = await this.todoService.postTodo({
      title,
      order: newOrder
    });

    this.context.commit("POST_TODO", data);
  }

  @Action
  public async setCompletedTodo(todo: TodoInterface): Promise<void> {
    const id = getId(todo.url);

    const { data } = await this.todoService.editTodo(id, {
      completed: true,
      title: todo.title,
      order: todo.order
    });

    this.context.commit("SET_COMPLETED_TODO", data);
  }

  @Action
  public async deleteTodo(todo: TodoInterface): Promise<void> {
    const id = getId(todo.url);

    const { data } = await this.todoService.deleteTodo(id);

    this.context.commit("DELETE_TODO", data);
  }

  @Action
  public async deleteAll(): Promise<void> {
    const completed: TodoInterface[] = this.todos.filter(
      t => t.completed === true
    );
    const datas: TodoInterface[] = [];

    await forEach(completed, todo => {
      const id = getId(todo.url);
      this.todoService.deleteTodo(id).then(response => {
        datas.push(response.data);
      });
    });

    this.context.commit("DELETE_ALL");
  }

  @Action
  public async editTodo({ order, title, url }: TodoInterface): Promise<void> {
    const id = getId(url);

    const { data } = await this.todoService.editTodo(id, {
      order,
      title,
      url
    });

    this.context.commit("EDIT_TODO", data);
    this.context.dispatch("getTodos");
  }
}

export default Todos;
