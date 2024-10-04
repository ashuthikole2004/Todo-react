import TodoName from "./Components/TodoName";
import TodoList from "./Components/TodoList";
import "./App.css";
import TodoContent from "./Components/TodoContent";
import ErrorMessage from "./Components/ErrorMessage";
import { TodoItemsContextProvider } from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center>
        <div className="TodoList">
          <TodoName />
          <TodoList />
          <ErrorMessage />
          <TodoContent />
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}
export default App;
