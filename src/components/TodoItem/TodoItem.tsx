import styles from "./TodoItem.module.css";
import { Todo, ToggleTodo } from "../../types/Interfaces";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: (todo: Todo) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      className={`${styles.todoItem} ${todo.completed ? styles.completed : ""}`}
    >
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo)}
        />
        <span>{todo.text}</span>
      </label>
      <button onClick={() => deleteTodo(todo)} className={styles.deleteButton}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
