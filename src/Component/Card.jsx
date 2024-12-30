import Button from "./Button.jsx";
import { useContext } from "react";
import TaskContext from "../store/TaskContext.jsx";
import CardItem from "./CardItem.jsx";

export default function Card() {
  const taskCtx = useContext(TaskContext);
  const handleModal = () => {
    taskCtx.showModal("open");
  };
  const todoItems = taskCtx.items;

  return (
    <div className="card">
      <Button name="Add Task" onClick={handleModal} />
      {todoItems.length === 0 ? (
        <p>Add a new task</p>
      ) : (
        <ul>
          {todoItems.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
