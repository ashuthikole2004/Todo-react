import TodoItem from "./TodoItem";
import style from "./TodoContent.module.css";
import {TodoItemsContext} from "../store/todo-items-store";
import { useContext } from "react";
function TodoContent() {
  const { Items, deleteItem } = useContext(TodoItemsContext);

  return (
    <>
      <div className={style["items"]}>
        {Items.map((item) => (
          <TodoItem
            key={item.todo}
            date={item.date}
            todo={item.todo}
            click={deleteItem}
          />
        ))}
      </div>
    </>
  );
}

export default TodoContent;
