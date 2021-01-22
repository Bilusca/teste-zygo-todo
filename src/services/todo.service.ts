import TodoInterface from "@/interfaces/Todo";
import { AxiosInstance, AxiosPromise } from "axios";
import server from "./_request";

class TodoService {
  private server: AxiosInstance;

  constructor() {
    this.server = server;
  }

  public getTodos(): AxiosPromise {
    return this.server.get("/").then(response => response);
  }

  public postTodo({ title, order }: TodoInterface): AxiosPromise {
    return this.server.post("/", { title, order }).then(response => response);
  }

  public editTodo(
    id: number | undefined,
    { completed, title }: TodoInterface
  ): AxiosPromise {
    return this.server
      .patch(`${id}`, { completed, title })
      .then(response => response);
  }

  public deleteTodo(id: number | undefined): AxiosPromise {
    return this.server.delete(`${id}`).then(response => response);
  }
}

export default TodoService;
