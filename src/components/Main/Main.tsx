import TodoContainer from "../TodoContainer/TodoContainer";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <TodoContainer />
    </div>
  );
};

export default Main;
