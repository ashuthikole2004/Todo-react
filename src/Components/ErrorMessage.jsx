import { useContext } from "react";
import {TodoItemsContext} from "../store/todo-items-store";

function ErrorMessage() {
  const { Items } = useContext(TodoItemsContext);
  return <>{Items.length === 0 && <h1>Enjoy your day</h1>}</>;
}

export default ErrorMessage;
