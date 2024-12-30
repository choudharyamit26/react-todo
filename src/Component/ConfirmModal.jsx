import { useContext } from "react";
import TaskContext from "../store/TaskContext";

export default function ConfirmModal() {
  const taskCtx = useContext(TaskContext);

  const handleClose = () => {
    taskCtx.closeModal();
  };
  const handleDelete = () => {
    const id = taskCtx.selectedId;
    taskCtx.removeItem(id);
    taskCtx.closeModal();
  };
  return (
    <dialog open={taskCtx.open === "delete"}>
      <div className="modal">
        <div className="modal-content">
          <h2>Delete Item</h2>
          <h3>Are you sure, you want to delete this item?</h3>
          <div className="button-group">
            <button
              className="btn btn-add"
              type="submit"
              onClick={handleDelete}
            >
              Yes
            </button>
            <button className="btn btn-close" onClick={handleClose}>
              No
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
