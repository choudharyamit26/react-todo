import { useContext } from "react";
import TaskContext from "../store/TaskContext.jsx";
import Button from "./Button.jsx";

export default function Modal({ ...props }) {
  const taskCtx = useContext(TaskContext);

  const handleClose = () => {
    taskCtx.closeModal();
  };
  const handleFormData = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    taskCtx.addItem({
      id:
        taskCtx.items.length > 0
          ? taskCtx.items[taskCtx.items.length - 1].id + 1
          : 1,
      content: fd.get("task").trim(),
      complete: false,
    });
    taskCtx.closeModal();
    event.target.reset();
  };
  return (
    <dialog open={taskCtx.open === "open"} {...props}>
      <div className="modal">
        <div className="modal-content">
          <h2>Add New Item</h2>
          <form onSubmit={handleFormData}>
            <label className="input-lable">Task Name: </label>
            <input type="text" name="task" required className="input-field" />
            <div className="button-group">
              <Button name="Add" className="btn btn-add" />
              <Button
                name="Close"
                className="btn btn-close"
                onClick={handleClose}
              />
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
