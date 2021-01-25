import TodoInterface from "@/interfaces/Todo";
import { orderBy } from "lodash";

const STORAGE_KEY = "todos:zygo";

export const saveStorageTodos = (todos: TodoInterface[]): void => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const getStorageTodos = (): TodoInterface[] | [] => {
  const items: string | null = window.localStorage.getItem(STORAGE_KEY);

  if (items) {
    const todos = JSON.parse(items);
    return orderBy(todos, "order");
  }

  return [];
};
