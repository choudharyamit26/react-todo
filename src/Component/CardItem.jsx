import { useContext } from "react";
import TaskContext from "../store/TaskContext";
import Button from "./Button";

export default function CardItem({ item }) {
  const taskCtx = useContext(TaskContext);

  const handleComplete = (id) => {
    taskCtx.completeItem(id);
  };

  const handleEdit = (id) => {
    taskCtx.showModal("edit", id);
  };

  const handleDelete = (id) => {
    taskCtx.showModal("delete", id);
  };

  return (
    <>
      <div className="card-item">
        <article className={item.complete ? "completed" : ""}>
          {item.content}
        </article>
        <div className="card-item-actions">
          <Button name="Complete" onClick={() => handleComplete(item.id)} />
          <Button name="Edit" onClick={() => handleEdit(item.id)} />
          <Button name="Delete" onClick={() => handleDelete(item.id)} />
        </div>
      </div>
    </>
  );
}
