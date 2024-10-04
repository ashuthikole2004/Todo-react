import style from './TodoItem.module.css';
import { MdDelete } from "react-icons/md";
function TodoItem({todo,date,click}) {
  return (
    <>
      <div className="container">
        <div className="row row1">
          <div className="col-6">{todo}</div>
          <div className="col-4">{date}</div>
          <div className="col-2"><button type="button" className={`btn btn-danger ${style.btn1}`} onClick={()=>click(todo)}><MdDelete /></button></div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
