export interface Todo {
  text: string;
  completed: boolean;
}

export type ToggleTodo = (selectedTodo: Todo) => void;

export type AddTodo = (text: string) => void;

export type DeleteTodo = (todoToDelete: Todo) => void;
