import { Todo, ToggleTodo } from "../../types/Interfaces";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: (todo: Todo) => void
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.text}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
