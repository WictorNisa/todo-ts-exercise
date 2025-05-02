import { useState } from "react";
import { AddTodo } from "../../types/Interfaces";
import styles from "./AddTodoForm.module.css";

interface Props {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <div className={styles.formContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(text);
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Add a new todo"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addTodo(text);
            setText("");
          }}
        >
          Add todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
