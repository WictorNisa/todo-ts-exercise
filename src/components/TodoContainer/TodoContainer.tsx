import { useState } from "react";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoContainer.module.css";
import { AddTodo,  Todo } from "../../types/Interfaces";
import AddTodoForm from "../AddTodoForm/AddTodoForm";

const inintialTodos: Todo[] = [
  {
    text: "Eat carbs",
    completed: false,
  },
  {
    text: "Watch bill",
    completed: false,
  },
  {
    text: "Go to muay thai",
    completed: false,
  },
];

const TodoContainer = () => {
  const [todos, setTodos] = useState(inintialTodos);

  const deleteTodo = (todoToDelete: Todo) => {
    const filteredTodos = todos.filter((todo) => todo.text !== todoToDelete.text)
    setTodos(filteredTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className={styles.todoContainer}>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoContainer;
